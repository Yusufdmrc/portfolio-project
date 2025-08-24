import { supabase, ContactMessageInsert, ContactMessage } from "./client";

/**
 * İletişim formu mesajını veritabanına kaydet
 */
export async function saveContactMessage(data: ContactMessageInsert) {
  try {
    console.log("Attempting to save contact message:", data);

    // Auth durumunu kontrol et
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    console.log("Auth status:", { user: user?.id || "anonymous", authError });

    const { data: result, error } = await supabase
      .from("contact_messages")
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error("Supabase error details:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });

      // RLS hatası için özel mesaj
      if (error.code === "42501") {
        throw new Error(
          "RLS Policy hatası: Lütfen Supabase'de politikaları kontrol edin"
        );
      }

      throw error;
    }

    console.log("Contact message saved successfully:", result);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error saving contact message:", error);

    // Daha detaylı hata mesajı
    let errorMessage = "Unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "object" && error !== null) {
      errorMessage = JSON.stringify(error);
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Tüm iletişim mesajlarını getir (admin kullanımı için)
 */
export async function getContactMessages(): Promise<ContactMessage[]> {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return [];
  }
}

/**
 * Belirli bir iletişim mesajını getir
 */
export async function getContactMessage(
  id: string
): Promise<ContactMessage | null> {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching contact message:", error);
    return null;
  }
}

/**
 * İletişim mesajını sil (admin kullanımı için)
 */
export async function deleteContactMessage(id: string) {
  try {
    const { error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error("Error deleting contact message:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Supabase bağlantısını test et
 */
export async function testConnection() {
  try {
    console.log("Testing Supabase connection...");

    // Önce basit bir auth kontrol
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    console.log("Auth check:", { user: user?.id || "anonymous", authError });

    // Şimdi contact_messages tablosuna erişim testi
    const { error, count } = await supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Connection test error:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });

      if (error.code === "PGRST116") {
        return {
          success: false,
          error:
            'Table "contact_messages" does not exist. Please create the table first.',
        };
      }

      throw error;
    }

    console.log("Connection test successful, table has", count, "records");
    return {
      success: true,
      message: `Supabase connection successful. Table has ${count || 0} records.`,
    };
  } catch (error) {
    console.error("Supabase connection test failed:", error);

    let errorMessage = "Connection failed";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "object" && error !== null) {
      errorMessage = JSON.stringify(error);
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
}
