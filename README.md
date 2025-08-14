# Kişisel Portfolyo Web Sitesi

Bu proje, **Next.js**, **Tailwind CSS**, **Supabase** ve **Sanity CMS** kullanılarak geliştirilmiş kişisel bir portfolyo web sitesidir.

## 🚀 Teknolojiler

- **Frontend:** Next.js 15, React 18, TypeScript, Tailwind CSS
- **Animasyonlar:** Framer Motion
- **CMS:** Sanity.io
- **Veritabanı:** Supabase
- **Barındırma:** Vercel
- **Icon:** Lucide React

## 📁 Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # Hakkımda sayfası
│   ├── blog/              # Blog sayfası
│   ├── contact/           # İletişim sayfası
│   ├── projects/          # Projeler sayfası
│   ├── layout.tsx         # Ana layout
│   └── page.tsx           # Ana sayfa
├── components/            # React bileşenleri
│   ├── forms/             # Form bileşenleri
│   ├── sections/          # Sayfa bölümleri
│   └── ui/                # UI bileşenleri
├── lib/                   # Kütüphane konfigürasyonları
│   ├── sanity/            # Sanity client
│   └── supabase/          # Supabase client
├── types/                 # TypeScript tip tanımları
└── utils/                 # Yardımcı fonksiyonlar
```

## ⚙️ Kurulum

1. **Projeyi klonlayın:**

   ```bash
   git clone [repo-url]
   cd portfolio-project
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Environment değişkenlerini ayarlayın:**
   `.env.example` dosyasını `.env.local` olarak kopyalayın ve gerekli değerleri doldurun.

4. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

## 🔧 Konfigürasyon

### Supabase Kurulumu

1. [Supabase](https://supabase.com) hesabı oluşturun
2. Yeni proje oluşturun
3. API anahtarlarınızı `.env.local` dosyasına ekleyin
4. İletişim formu için `contact_messages` tablosunu oluşturun:
   ```sql
   CREATE TABLE contact_messages (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT NOT NULL,
     message TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

### Sanity CMS Kurulumu

1. [Sanity.io](https://sanity.io) hesabı oluşturun
2. Yeni proje oluşturun
3. Proje ID'sini `.env.local` dosyasına ekleyin
4. Blog ve proje içerikleri için schema tanımlarını yapın

## 📱 Özellikler

- ✅ Responsive tasarım
- ✅ Modern UI/UX
- ✅ Animasyonlar (Framer Motion)
- ✅ SEO optimizasyonu
- ✅ İletişim formu (Supabase)
- ✅ Blog sistemi (Sanity CMS)
- ✅ Proje vitrini
- ✅ TypeScript desteği

## 🎯 Gelecek Geliştirmeler

- [ ] Çok dilli destek (i18n)
- [ ] Dark/Light tema
- [ ] Blog filtreleme
- [ ] Proje kategorileri
- [ ] Admin paneli

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

**Yusuf Demirci**

- GitHub: [@Yusufdmrc](https://github.com/Yusufdmrc)
- LinkedIn: [Profil Linki]
- E-posta: [E-posta Adresiniz]
