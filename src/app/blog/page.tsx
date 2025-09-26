"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight } from "lucide-react";
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
  "API Testing",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredPosts =
    selectedCategory === "Tümü"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-24 sm:py-32 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Yazılım geliştirme, test otomasyonu ve teknoloji dünyasından
            deneyimlerimi, öğrendiklerimi ve görüşlerimi paylaştığım alan.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "primary" : "outline"}
              size="sm"
              className="mb-2"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <Image
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90" />
              <div className="relative z-10 max-w-4xl">
                <Badge
                  variant="secondary"
                  className="mb-4 text-white bg-white/20"
                >
                  Öne Çıkan Yazı
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {filteredPosts[0].title}
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-blue-200 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(filteredPosts[0].publishedAt).toLocaleDateString(
                      "tr-TR"
                    )}
                  </div>
                </div>
                <Link href={`/blog/${filteredPosts[0].slug}`}>
                  <Button variant="secondary" size="lg" className="group">
                    Yazıyı Oku
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(filteredPosts.length > 1
            ? filteredPosts.slice(1)
            : filteredPosts
          ).map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Post Image */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group p-0 h-auto"
                  >
                    Devamını Oku
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
