# Kişisel Portfolyo Web Sitesi - Gereksinim Belgesi

## 1. Proje Tanımı

Bu proje, **Next.js** ve **Tailwind CSS** kullanılarak geliştirilecek kişisel bir portfolyo web sitesidir.  
Proje aynı zamanda **Supabase** (veritabanı) ve **Sanity** (CMS) teknolojilerini öğrenme ve uygulama amacı taşır.

Site; kişisel bilgiler, beceriler, eğitim ve iş geçmişi, projeler, blog yazıları ve iletişim bilgilerini içerecektir.

---

## 2. Amaçlar

- Next.js ile tam fonksiyonel ve performanslı bir web uygulaması geliştirmek
- Tailwind CSS ile modern, responsive ve özelleştirilebilir bir UI tasarlamak
- Supabase ile veritabanı yönetimini öğrenmek
- Sanity CMS ile dinamik içerik yönetimi sağlamak
- Blog bölümü üzerinden içerik ekleme, düzenleme ve silme işlevlerini öğrenmek

---

## 3. Teknolojiler

- **Frontend:** Next.js, React, Tailwind CSS, Framer Motion (animasyonlar için opsiyonel)
- **Backend / Veritabanı:** Supabase
- **CMS:** Sanity.io
- **Barındırma:** Vercel
- **Versiyon Kontrol:** Git + GitHub

---

## 4. Sayfa ve Bölümler

### 4.1. Ana Sayfa (Home)

- **Hero Alanı:**
  - Arka planda gradient veya fotoğraf
  - Kendi fotoğrafım (optimize edilmiş, responsive)
  - Ad, kısa unvan (ör. "Software Test Engineer" veya "Full-Stack Developer")
  - Kısa bir tanıtım metni
  - "Hakkımda" sayfasına yönlendiren buton

- **Beceriler Bölümü:**
  - Icon + skill adı (ör. JavaScript, React, Selenium)
  - Tailwind grid yapısı ile responsive

- **Eğitim & İş Hayatı Zaman Çizelgesi:**
  - Timeline tasarımı (dikey / yatay)
  - Yıl, kurum adı, pozisyon / program adı, kısa açıklama

- **Projeler Önizleme:**
  - En fazla 3 proje kartı
  - Proje görseli, kısa açıklama, “Detayları Gör” butonu

- **Blog Önizleme:**
  - En son eklenen 3 blog yazısının başlığı, tarihi ve kısa açıklaması

- **Footer:**
  - Sosyal medya ikonları (LinkedIn, GitHub, X/Twitter, Instagram)
  - Telif bilgisi

---

### 4.2. Hakkımda (About)

- Daha detaylı kişisel bilgiler
- İlgi alanları
- Teknik yetkinlikler ve soft skills listesi
- CV indirme butonu

---

### 4.3. Projeler (Projects)

- Sanity’den dinamik olarak çekilecek
- Her proje için:
  - Başlık
  - Açıklama
  - Kullanılan teknolojiler
  - Proje görselleri
  - GitHub ve canlı demo linkleri

---

### 4.4. Blog

- **Blog Listesi:**
  - Kart tasarımında başlık, özet, tarih, kategori
  - Sayfalama (pagination) veya “Load More” butonu

- **Blog Detay Sayfası:**
  - Başlık, yazar, tarih
  - İçerik (Sanity CMS üzerinden yönetilebilir)
  - İlgili yazılar bölümü

---

### 4.5. İletişim (Contact)

- Form alanları:
  - İsim
  - E-posta
  - Mesaj
- Supabase üzerinden veri saklama (admin panel olmayacak)
- Sosyal medya linkleri
- **Not:** Mesaj yönetimi için başlangıçta sadece **Supabase Dashboard** kullanılacak.  
  Yani kod tarafında herhangi bir admin sayfası olmayacak.

---

## 5. Fonksiyonel Gereksinimler

1. **Responsive Tasarım:** Mobil, tablet ve masaüstü uyumlu olmalı.
2. **Dinamik İçerik Yönetimi:** Blog yazıları ve projeler Sanity CMS üzerinden yönetilebilmeli.
3. **Veri Tabanı Bağlantısı:** İletişim formları Supabase üzerinde saklanmalı.
4. **SEO Optimizasyonu:** Next.js ile meta etiketler ve açık grafik etiketleri eklenmeli.
5. **Animasyonlar:** Framer Motion ile geçiş efektleri (opsiyonel).
6. **Performans:** Lighthouse testi ile yüksek puan hedefi.

---

## 6. Öğrenme Hedefleri

- **Next.js**: Sayfa yönlendirme, statik & dinamik veri çekme, API Routes
- **Tailwind CSS**: Utility-first yaklaşımı, responsive design
- **Supabase**: Veritabanı CRUD işlemleri, Row Level Security (RLS)
- **Sanity.io**: CMS şeması oluşturma, veri çekme, GROQ sorguları

---

## 7. Kullanıcı Rolleri

- **Ziyaretçi:**
  - Site içeriğini görüntüler
  - Blog yazılarını okur
  - İletişim formu gönderir
- **Admin (Ben):**
  - Sanity CMS üzerinden blog ve proje ekler/günceller
  - Supabase Dashboard üzerinden form verilerini görüntüler

---

## 8. Yayınlama Planı

1. Tasarım prototipleri oluştur (Figma)
2. Next.js + Tailwind ile temel sayfaları hazırla
3. Sanity CMS entegrasyonunu yap
4. Supabase ile iletişim formu bağlantısını kur
5. Test ve optimizasyon
6. Vercel üzerinden canlıya al

---

## 9. Gelecek Geliştirmeler (Opsiyonel)

- Çok dilli destek (i18n)
- Proje filtreleme (kategoriye göre)
- Dark/Light tema seçici
