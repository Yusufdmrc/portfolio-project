-- RLS Politika Hatası Çözümü
-- Bu SQL'i Supabase Dashboard > SQL Editor'da çalıştırın

-- Eski politikaları temizle
DROP POLICY IF EXISTS "Enable insert for everyone" ON contact_messages;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON contact_messages;
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON contact_messages;
DROP POLICY IF EXISTS "Authenticated users can view contact messages" ON contact_messages;

-- RLS'i yeniden etkinleştir
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Doğru politikalar oluştur
CREATE POLICY "Allow public insert" 
ON contact_messages FOR INSERT 
TO public 
WITH CHECK (true);

CREATE POLICY "Allow anon insert" 
ON contact_messages FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Allow authenticated read" 
ON contact_messages FOR SELECT 
TO authenticated 
USING (true);

-- Alternatif çözüm: RLS'i tamamen kapat (geliştirme için)
-- ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;
