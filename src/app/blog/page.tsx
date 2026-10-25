"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Next.js ile Full-Stack Web Projesi Oluşturma Yol Haritası",
    excerpt:
      "Sıfırdan Next.js ile modern full-stack web uygulaması geliştirme sürecinin detaylı rehberi. Database entegrasyonu, authentication, deployment ve best practices.",
    content: `Günümüzde full-stack web geliştirme, yazılım dünyasında en çok ihtiyaç duyulan alanlardan biri haline geldi. Hem frontend hem de backend tarafında yetkin olmak, bir geliştiriciyi çok daha esnek ve değerli kılıyor. Bu yazıda, modern teknolojilerle bir full-stack web projesi geliştirmek isteyenler için Next.js tabanlı bir yol haritası paylaşacağım.

## 1. Temel Altyapıyı Hazırlama
Next.js projesi oluşturmak için:
\`\`\`bash
npx create-next-app@latest my-project
cd my-project
npm run dev
\`\`\`

## 2. Frontend: Kullanıcı Arayüzünü Tasarlama
Tailwind CSS ile modern, responsive ve component tabanlı UI oluşturmak için:
\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## 3. Backend: API Katmanı
Next.js projelerinde app/api/ klasörü altına dosyalar ekleyerek backend endpointleri tanımlayabilirsin.

## 4. Veritabanı Seçimi
PostgreSQL / MySQL için Prisma ORM:
\`\`\`bash
npm install prisma @prisma/client
npx prisma init
\`\`\``,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-30",
    readingTime: "15 min",
    category: "Web Development",
    tags: ["Next.js", "Tam Yığın", "React", "TypeScript", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    slug: "nextjs-fullstack-yol-haritasi",
  },
  {
    id: 2,
    title: "Test Otomasyon Projelerindeki CI/CD Süreçleri",
    excerpt:
      "Modern test otomasyon projelerinde CI/CD pipeline'ları nasıl kurulur ve optimize edilir? GitHub Actions, Jenkins ve Docker entegrasyonu.",
    content: `Yazılım geliştirme dünyasında hız, güvenilirlik ve kalite artık vazgeçilmez üçlü haline geldi. Özellikle büyük ve kurumsal projelerde, kullanıcıya hatasız ürün sunmak için sadece geliştirme değil, test süreçlerinin de modern yöntemlerle yönetilmesi gerekiyor.

## CI/CD Nedir?
**Continuous Integration (Sürekli Entegrasyon)**
- Geliştiriciler kodlarını sık sık ortak bir repoya push eder
- Her commit sonrası proje otomatik build edilir ve testler çalıştırılır

**Continuous Deployment (Sürekli Dağıtım)**
- Başarılı build ve testlerden sonra uygulama staging veya production ortamına otomatik deploy edilir

## Test Otomasyonunun CI/CD Süreçlerindeki Rolü
Pipeline içinde farklı seviyelerde testler koşulur:
- **Unit Testler** → Kodun en küçük parçalarının doğruluğunu kontrol eder
- **Integration Testler** → Servislerin birlikte çalışabilirliğini test eder
- **API Testleri** → Backend endpointlerinin doğru yanıt verdiğinden emin olunur`,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-26",
    readingTime: "12 min",
    category: "Test Otomasyonu",
    tags: ["CI/CD", "Test", "GitHub Actions", "Jenkins", "Otomasyon"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    slug: "test-otomasyon-cicd-surecleri",
  },
  {
    id: 3,
    title: "TypeScript ile Tip Güvenli Kod Yazımı",
    excerpt:
      "TypeScript'in sunduğu type safety özellikleri ile daha güvenilir ve maintainable kod yazma teknikleri.",
    content: `JavaScript, esnekliği sayesinde dünyanın en popüler programlama dillerinden biri haline geldi. Ancak bu esneklik, büyük ölçekli projelerde ciddi sorunlara yol açabiliyor: beklenmeyen runtime hataları, zor bakım süreçleri ve düşük kod güvenilirliği.

## 🎯 Tip Güvenliği (Type Safety) Nedir?
Tip güvenliği, bir değişkenin ya da fonksiyonun alabileceği değerlerin önceden tanımlanması anlamına gelir.

JavaScript'te:
\`\`\`javascript
function toUpperCase(str) {
  return str.toUpperCase();
}
toUpperCase(42); // Runtime hatası!
\`\`\`

TypeScript ile:
\`\`\`typescript
function toUpperCase(str: string): string {
  return str.toUpperCase();
}
toUpperCase(42); // Derleme hatası, runtime'a bile gelmez
\`\`\`

## 🔧 TypeScript ile Tip Güvenliği
1. **Temel Tipler:** number, string, boolean
2. **Interface ve Type Alias:** API sözleşmeleri
3. **Generic'ler:** Yeniden kullanılabilir kod`,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-20",
    readingTime: "18 min",
    category: "Programlama",
    tags: [
      "TypeScript",
      "JavaScript",
      "Tip Güvenliği",
      "Programlama",
      "Geliştirme",
    ],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    slug: "typescript-tip-guvenli-kod",
  },
  {
    id: 4,
    title:
      "Frontend’den Yazılım Test Mühendisliğine: Kariyer Yolculuğum ve Öğrendiklerim",
    excerpt:
      "Frontend geliştirici olarak başladığım kariyerimde yazılım test mühendisliğine geçiş sürecim, öğrendiklerim ve bu deneyimimin bana kattıkları.",
    content: `Yazılım dünyasında her gün yeni bir teknoloji, yeni bir trend ve yeni bir bakış açısı ortaya çıkıyor. Bu hızlı değişim içinde kariyer yolculuğum da farklı rollerden geçerek şekillendi. Üniversite yıllarımda frontend geliştirici olarak başladığım bu yolculuk, bugün yazılım test mühendisi olarak devam ediyor.

## Frontend Dünyasına İlk Adımlarım

Kariyerime ilk adımı attığımda, odak noktam kullanıcı arayüzü geliştirme idi. HTML, CSS ve JavaScript ile başladım. Zamanla React ve Next.js gibi modern frameworklerle çalıştım. Bu süreç bana şunları öğretti:

**Kullanıcı deneyiminin önemi:** Bir web sitesinin görsel olarak şık olması kadar, hızlı ve erişilebilir olması da kritik.

**Kod okunabilirliği:** Projelerde ekip çalışması için temiz ve sürdürülebilir kod yazmak şart.

**Responsive tasarım:** Kullanıcıların farklı cihazlarda sorunsuz deneyim yaşaması temel bir gereklilik.

Frontend tecrübem bana sadece teknik bilgi kazandırmadı; aynı zamanda kullanıcı gözüyle düşünme becerisi kazandırdı.

## Yazılım Test Mühendisliğine Geçiş

Frontend'de çalışırken fark ettim ki, geliştirdiğimiz özelliklerin sadece kodlanması değil, doğru çalışıp çalışmadığının garanti edilmesi de en az o kadar önemli. Bu farkındalık beni yazılım test mühendisliğine yönlendirdi.

Test mühendisliğine geçişimle birlikte yeni sorumluluklar üstlendim:

- **Manuel testler:** Kullanıcı senaryolarını adım adım test etmek
- **Otomasyon testleri:** Selenium, TestNG, Cucumber, Appium gibi araçlarla süreçleri otomatize etmek
- **API testleri:** Backend fonksiyonlarının doğru çalıştığından emin olmak
- **Test yaşam döngüsü:** Gereksinim analizi, test senaryosu yazımı, hata raporlama ve regression süreçleri

## Frontend Tecrübesinin Test Mühendisliğine Katkısı

Frontend geçmişim, test mühendisliği yolculuğumda büyük avantaj sağladı:

1. **UI testlerinde kolaylık:** Arayüz elementlerini tanımak ve doğru şekilde test etmek
2. **Geliştirici ile iletişim:** Frontend teknolojilerini bildiğim için ekiple verimli iletişim
3. **Kullanıcı odaklı bakış açısı:** Her testte "kullanıcı bu durumda ne görür?" diye düşünmek

## Öğrendiklerim ve Çıkarımlarım

- **Kodlama bilgisi test mühendisliği için büyük artı**
- **Test sadece hata bulmak değil, kaliteyi güvence altına almak**  
- **Takım çalışması olmazsa olmaz**
- **Sürekli öğrenmek şart**

Eğer sen de benzer bir kariyer yolculuğuna çıkmak istiyorsan, şunu unutma: Her rol birbirini besliyor. Bir alandaki tecrüben, diğerinde sana büyük avantaj sağlayabilir.`,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-14",
    readingTime: "8 min",
    category: "Career",
    tags: ["Kariyer", "Frontend", "Test Mühendisliği", "Deneyim", "Geçiş"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    slug: "frontend-den-test-muhendisligine-kariyer-yolculugu",
  },
];

const categories = [
  "Tümü",
  "Web Development",
  "Test Otomasyonu",
  "Programlama",
  "Career",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredPosts =
    selectedCategory === "Tümü"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="site-page page-width">
      <header className="page-heading">
        <span className="eyebrow">Notlar <span className="eyebrow-divider">/</span> Deneyimden kısa kayıtlar</span>
        <h1>Yazılar<span className="hero-period">.</span></h1>
        <p>Yazılım geliştirme, test otomasyonu ve kariyer yolculuğum boyunca öğrendiklerimi burada topluyorum.</p>
      </header>

      <div className="journal-filters" role="group" aria-label="Yazıları kategoriye göre filtrele">
        {categories.map((category) => (
          <button key={category} type="button" className={`filter-button${selectedCategory === category ? " is-selected" : ""}`} aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)}>{category}</button>
        ))}
      </div>

      {filteredPosts.length > 0 && (
        <>
          <Link className="journal-feature" href={`/blog/${filteredPosts[0].slug}`}>
            <div className="journal-feature-art">
              <Image src={filteredPosts[0].image} alt="" fill priority sizes="(max-width: 650px) 100vw, 55vw" />
            </div>
            <div className="journal-feature-copy">
              <div className="article-kicker"><span>ÖNE ÇIKAN</span><span>{filteredPosts[0].category}</span></div>
              <h2>{filteredPosts[0].title}</h2>
              <p>{filteredPosts[0].excerpt}</p>
              <div className="article-kicker"><Calendar size={14} /><span>{new Date(filteredPosts[0].publishedAt).toLocaleDateString("tr-TR")}</span></div>
              <span className="text-link" style={{ marginTop: 19 }}>Yazıyı oku <ArrowUpRight size={16} /></span>
            </div>
          </Link>

          <div className="journal-grid">
            {filteredPosts.slice(1).map((post) => (
              <Link className="journal-card" href={`/blog/${post.slug}`} key={post.id}>
                <div className="article-kicker"><span>{post.category}</span><span>{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span></div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="journal-card-bottom"><span>{post.tags.slice(0, 3).join(" · ")}</span><ArrowUpRight size={15} /></div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
