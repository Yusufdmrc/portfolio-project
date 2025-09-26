import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  User,
  Tag,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "Next.js ile Full-Stack Web Projesi Oluşturma Yol Haritası",
    slug: "nextjs-fullstack-yol-haritasi",
    excerpt:
      "Sıfırdan Next.js ile modern full-stack web uygulaması geliştirme sürecinin detaylı rehberi. Database entegrasyonu, authentication, deployment ve best practices.",
    content: `
      <h2>Next.js ile Full-Stack Development: Modern Web Uygulamalarının Geleceği</h2>
      <p>Next.js, React ekosisteminde sunucu tarafı görselleştirme, statik site oluşturma ve API rotaları gibi güçlü özelliklerle tam yığın web uygulamaları geliştirmek için en tercih edilen çatı haline geldi. Bu kapsamlı rehberde, sıfırdan profesyonel bir Next.js projesi oluşturma sürecini detaylı olarak ele alacağız.</p>
      
      <h3>🚀 Proje Kurulumu ve İlk Adımlar</h3>
      <p>Next.js projesi oluşturmak için modern geliştirme yığını ile başlıyoruz. TypeScript desteği, Tailwind CSS entegrasyonu ve ESLint yapılandırması ile profesyonel bir geliştirme ortamı kuruyoruz:</p>
      <pre><code>npx create-next-app@latest my-project --typescript --tailwind --eslint --app</code></pre>
      <p>App Router yapısı ile birlikte gelen yeni özellikler, yönlendirme sistemini daha esnek ve performanslı hale getiriyor. Layout dosyaları, yükleme durumları ve hata sınırları ile kullanıcı deneyimini optimize edebiliyoruz.</p>
      
      <h3>📦 Temel Paketler ve Kütüphaneler</h3>
      <p>Modern bir tam yığın projede ihtiyaç duyacağımız temel paketleri entegre ediyoruz:</p>
      <ul>
        <li><strong>Prisma ORM:</strong> Tip güvenli veritabanı sorguları ve göç yönetimi</li>
        <li><strong>NextAuth.js:</strong> Güvenli kimlik doğrulama ve oturum yönetimi</li>
        <li><strong>Tailwind CSS:</strong> Hızlı stillemek için yardımcı öncelikli CSS çatısı</li>
        <li><strong>Framer Motion:</strong> Pürüzsüz animasyonlar ve mikro etkileşimler</li>
        <li><strong>Zustand/Redux Toolkit:</strong> İstemci tarafı durum yönetimi</li>
        <li><strong>React Hook Form:</strong> Performanslı form işleme ve doğrulama</li>
        <li><strong>Zod:</strong> Çalışma zamanı tip doğrulama ve şema tanımı</li>
      </ul>
      
      <h3>🗃️ Veritabanı Mimarisi ve Prisma Entegrasyonu</h3>
      <p>Modern web uygulamalarında veri katmanının doğru tasarlanması kritik öneme sahiptir. Prisma ORM ile PostgreSQL veya MySQL veritabanını entegre ederek tip güvenli ve ölçeklenebilir bir veri yönetim sistemi kuruyoruz. Şema tasarım desenleri, ilişkiler ve indeksleme stratejileri ile performanslı veritabanı sorguları oluşturuyoruz.</p>
      <p>Göç sistemleri ve veri ekme süreçleri ile geliştirme ve üretim ortamları arasında tutarlılık sağlıyoruz. Veritabanı bağlantı havuzlama ve sorgu optimizasyon teknikleri ile uygulama performansını maksimize ediyoruz.</p>
      
      <h3>🔐 Kimlik Doğrulama ve Yetkilendirme Sistemi</h3>
      <p>NextAuth.js ile kapsamlı kimlik doğrulama sistemi oluşturuyoruz. OAuth sağlayıcıları (Google, GitHub, Discord), JWT tokenları ve oturum yönetimi ile güvenli kullanıcı kimlik doğrulaması sağlıyoruz. Rol tabanlı erişim kontrolü (RBAC) ve izin sistemleri ile yetkilendirme katmanını uyguluyoruz.</p>
      <p>Güvenlik en iyi uygulamaları, CSRF koruması ve güvenli çerez işleme ile uygulama güvenliğini güçlendiriyoruz. Parola şifreleme, hız sınırlama ve hesap doğrulama süreçleri ile kullanıcı hesaplarını koruyoruz.</p>
      
      <h3>🎨 UI/UX Tasarım ve Bileşen Mimarisi</h3>
      <p>Duyarlı tasarım prensipleri ve modern arayüz desenleri ile kullanıcı dostu arayüzler tasarlıyoruz. Bileşen odaklı geliştirme yaklaşımı ile yeniden kullanılabilir ve sürdürülebilir UI bileşenleri oluşturuyoruz. Tasarım sistemleri ve stil kılavuzları ile tutarlı kullanıcı deneyimi sağlıyoruz.</p>
      
      <h3>⚡ Performans Optimizasyonu</h3>
      <p>Next.js'in sunduğu görüntü optimizasyonu, otomatik kod bölme ve önbellekleme mekanizmaları ile uygulama performansını optimize ediyoruz. Tembel yükleme, ön getirme ve paket analizi ile sayfa yükleme sürelerini minimize ediyoruz.</p>
      
      <h3>🚀 Üretim Dağıtımı ve DevOps</h3>
      <p>Vercel platformu ile sorunsuz dağıtım hattı oluşturuyoruz. Ortam değişkenleri, ön izleme dağıtımları ve otomatik ölçekleme ile üretime hazır uygulamayı dağıtıyoruz. İzleme, günlük kaydı ve hata takibi ile uygulama sağlığını sürekli takip ediyoruz.</p>
    `,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-30",
    readingTime: "15 min",
    category: "Web Development",
    tags: ["Next.js", "React", "Full-Stack", "TypeScript", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: 2,
    title: "Test Otomasyon Projelerindeki CI/CD Süreçleri",
    slug: "test-otomasyon-cicd-surecleri",
    excerpt:
      "Modern test otomasyon projelerinde CI/CD pipeline'ları nasıl kurulur ve optimize edilir? GitHub Actions, Jenkins ve Docker entegrasyonu.",
    content: `
      <h2>Test Otomasyon Projelerindeki CI/CD Süreçleri</h2>
      <h3>Giriş</h3>
      <p>Yazılım geliştirme dünyasında hız, güvenilirlik ve kalite artık vazgeçilmez üçlü haline geldi. Özellikle büyük ve kurumsal projelerde, kullanıcıya hatasız ürün sunmak için sadece geliştirme değil, test süreçlerinin de modern yöntemlerle yönetilmesi gerekiyor. İşte bu noktada CI/CD (Continuous Integration / Continuous Deployment) süreçleri devreye giriyor.</p>
      <p>Bu yazıda, test otomasyon projelerinin CI/CD süreçlerine nasıl entegre edildiğini, hangi araçların kullanıldığını ve doğru uygulama stratejilerini ele alacağız.</p>
      
      <h3>CI/CD Nedir?</h3>
      <h4>Continuous Integration (Sürekli Entegrasyon)</h4>
      <ul>
        <li>Geliştiriciler kodlarını sık sık ortak bir repoya push eder.</li>
        <li>Her commit sonrası proje otomatik build edilir ve testler çalıştırılır.</li>
        <li>Amaç: Hataları erken tespit etmek ve entegrasyon sorunlarını minimuma indirmek.</li>
      </ul>
      
      <h4>Continuous Deployment (Sürekli Dağıtım)</h4>
      <ul>
        <li>Başarılı build ve testlerden sonra uygulama staging veya production ortamına otomatik deploy edilir.</li>
        <li>Amaç: Teslimatı hızlandırmak, insan hatasını azaltmak ve sürekli olarak güncel sürüm sunmaktır.</li>
      </ul>
      
      <h3>Test Otomasyonunun CI/CD Süreçlerindeki Rolü</h3>
      <p>Test otomasyonu, CI/CD süreçlerinde kalite güvencesinin bel kemiğidir. Pipeline içinde farklı seviyelerde testler koşulur:</p>
      <ul>
        <li><strong>Unit Testler</strong> → Kodun en küçük parçalarının doğruluğunu kontrol eder.</li>
        <li><strong>Integration Testler</strong> → Servislerin veya modüllerin birlikte çalışabilirliğini test eder.</li>
        <li><strong>API Testleri</strong> → Backend endpointlerinin doğru yanıt verdiğinden emin olunur.</li>
        <li><strong>UI / E2E Testleri</strong> → Gerçek kullanıcı senaryolarını uçtan uca simüle eder.</li>
      </ul>
      <p>👉 Bu testlerin otomatik çalıştırılması sayesinde, kod her değiştiğinde yazılımın güvenilirliği korunur.</p>
      
      <h3>Kullanılan CI/CD Araçları</h3>
      <ul>
        <li><strong>Jenkins</strong> → En yaygın açık kaynak CI/CD aracı, büyük organizasyonlarda tercih edilir.</li>
        <li><strong>GitHub Actions</strong> → GitHub reposuna entegre, hızlı kurulum ve kullanım kolaylığı sağlar.</li>
        <li><strong>GitLab CI/CD</strong> → GitLab kullanıcıları için entegre pipeline çözümü.</li>
        <li><strong>CircleCI, TravisCI, Azure DevOps</strong> → Alternatif modern çözümler.</li>
      </ul>
      
      <h3>Test Araçları ile Entegrasyon</h3>
      <ul>
        <li><strong>Selenium, Cypress, Playwright</strong> → UI otomasyon testleri.</li>
        <li><strong>JUnit, TestNG, Jest, Mocha</strong> → Unit test framework'leri.</li>
        <li><strong>Postman/Newman, RestAssured</strong> → API testleri.</li>
        <li><strong>Appium</strong> → Mobil uygulama test otomasyonu.</li>
        <li><strong>Allure Report, ExtentReports</strong> → Test raporlama ve analiz araçları.</li>
      </ul>
      
      <h3>Örnek CI/CD Pipeline Senaryosu</h3>
      <h4>1. Kod Push</h4>
      <p>Geliştirici kodu GitHub'a gönderir.</p>
      
      <h4>2. Build</h4>
      <p>Proje otomatik build edilir (mvn clean install, npm run build vb.).</p>
      
      <h4>3. Test Çalıştırma</h4>
      <ul>
        <li>Unit testler → hızlı geri bildirim sağlar.</li>
        <li>API ve UI testleri → smoke veya regression setleri çalıştırılır.</li>
      </ul>
      
      <h4>4. Raporlama</h4>
      <ul>
        <li>Allure veya ExtentReports ile test sonuçları görselleştirilir.</li>
        <li>Başarısız testlerde pipeline durur.</li>
      </ul>
      
      <h4>5. Deploy</h4>
      <p>Testler geçtiyse staging veya production ortamına otomatik dağıtım yapılır.</p>
      
      <h3>Test Otomasyonu + CI/CD'nin Sağladığı Avantajlar</h3>
      <ul>
        <li>🚀 <strong>Hızlı geri bildirim</strong> → Hatalar dakikalar içinde fark edilir.</li>
        <li>✅ <strong>Kalite güvencesi</strong> → Her build belirli test setlerinden geçer.</li>
        <li>🔄 <strong>Sürdürülebilirlik</strong> → Tekrarlanabilir ve standart süreçler.</li>
        <li>👨‍👩‍👧‍👦 <strong>Ekip verimliliği</strong> → Geliştirici ve test ekibi arasında sorunsuz entegrasyon.</li>
        <li>🔒 <strong>Risk azaltma</strong> → Canlıya çıkan sürümlerde beklenmeyen hataların azalması.</li>
      </ul>
      
      <h3>Dikkat Edilmesi Gereken Noktalar</h3>
      <ul>
        <li><strong>Test Süresi:</strong> Uzun süren regression testler pipeline'ı yavaşlatabilir → smoke testler ayrılmalı.</li>
        <li><strong>Paralel Test Çalıştırma:</strong> Özellikle UI testlerinde zaman kazandırır.</li>
        <li><strong>Ortam Yönetimi:</strong> Test ortamları production'a mümkün olduğunca benzer olmalı.</li>
        <li><strong>Flaky Testler:</strong> Stabil olmayan testler pipeline güvenilirliğini zedeler, öncelikle çözülmeli.</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>Test otomasyon projelerinin CI/CD süreçlerine entegrasyonu, modern yazılım geliştirme kültürünün temel taşıdır.</p>
      <ul>
        <li>Hataları erken yakalar,</li>
        <li>Teslimatı hızlandırır,</li>
        <li>Kaliteyi sürekli hale getirir.</li>
      </ul>
      <p>Doğru araç seçimi, pipeline optimizasyonu ve iyi yapılandırılmış test stratejileri ile ekipler hem güvenilir hem de hızlı yazılım teslim edebilir.</p>
    `,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-26",
    readingTime: "12 min",
    category: "Test Automation",
    tags: ["CI/CD", "Testing", "GitHub Actions", "Jenkins", "Docker"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 3,
    title: "TypeScript ile Tip Güvenli Kod Yazımı",
    slug: "typescript-tip-guvenli-kod",
    excerpt:
      "TypeScript'in sunduğu type safety özellikleri ile daha güvenilir ve maintainable kod yazma teknikleri.",
    content: `
      <h2>TypeScript ile Tip Güvenli Kod Yazımı</h2>
      <h3>Giriş</h3>
      <p>JavaScript, esnekliği sayesinde dünyanın en popüler programlama dillerinden biri haline geldi. Ancak bu esneklik, büyük ölçekli projelerde ciddi sorunlara yol açabiliyor: beklenmeyen runtime hataları, zor bakım süreçleri ve düşük kod güvenilirliği. İşte bu noktada TypeScript devreye giriyor.</p>
      <p>Microsoft tarafından geliştirilen TypeScript, JavaScript'in bir superset'i olup, statik tip kontrolü ekleyerek geliştiricilere tip güvenliği sağlıyor. Bu sayede daha tahmin edilebilir, sürdürülebilir ve hatalara karşı dayanıklı kod yazmak mümkün hale geliyor.</p>
      
      <h3>🎯 Tip Güvenliği (Type Safety) Nedir?</h3>
      <p>Tip güvenliği, bir değişkenin ya da fonksiyonun alabileceği değerlerin önceden tanımlanması ve derleme sırasında kontrol edilmesi anlamına gelir.</p>
      <p>Örneğin JavaScript'te:</p>
      <pre><code>function toUpperCase(str) {
  return str.toUpperCase();
}

toUpperCase(42); // Runtime hatası!</code></pre>
      
      <p>Aynı kodu TypeScript ile yazdığımızda:</p>
      <pre><code>function toUpperCase(str: string): string {
  return str.toUpperCase();
}

toUpperCase(42); // Derleme hatası, runtime'a bile gelmez</code></pre>
      
      <p>👉 Görüldüğü gibi hatayı daha kod çalışmadan yakalamış oluyoruz.</p>
      
      <h3>🏗️ Tip Güvenli Kod Yazmanın Avantajları</h3>
      <ul>
        <li><strong>Hataları erken yakalar</strong> → Runtime yerine compile-time'da.</li>
        <li><strong>Kod okunabilirliğini artırır</strong> → Fonksiyon imzaları ve tipler, bir nevi dokümantasyon işlevi görür.</li>
        <li><strong>Refactoring'i kolaylaştırır</strong> → IDE desteği sayesinde güvenle kodu değiştirebilirsiniz.</li>
        <li><strong>Takım iş birliğini geliştirir</strong> → API sözleşmeleri net bir şekilde tanımlanır.</li>
        <li><strong>Bakımı kolaylaştırır</strong> → Uzun vadeli projelerde sürdürülebilirlik sağlar.</li>
      </ul>
      
      <h3>🔧 TypeScript ile Tip Güvenliği Nasıl Sağlanır?</h3>
      <h4>1. Temel Tipler</h4>
      <pre><code>let age: number = 25;
let name: string = "Yusuf";
let isActive: boolean = true;</code></pre>
      
      <h4>2. Array ve Object Tipleri</h4>
      <pre><code>let numbers: number[] = [1, 2, 3];
let user: { id: number; name: string } = { id: 1, name: "Yusuf" };</code></pre>
      
      <h4>3. Interface ve Type Alias</h4>
      <pre><code>interface User {
  id: number;
  name: string;
  email?: string; // opsiyonel
}

const user: User = { id: 1, name: "Yusuf" };</code></pre>
      
      <h4>4. Union ve Literal Tipler</h4>
      <pre><code>type Status = "pending" | "success" | "error";

let currentStatus: Status = "pending";</code></pre>
      
      <h4>5. Generic'ler</h4>
      <pre><code>function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(5);
let str = identity<string>("hello");</code></pre>
      
      <h4>6. Type Guard'lar</h4>
      <pre><code>function printLength(value: string | string[]) {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log(value.length);
  }
}</code></pre>
      
      <h3>🌐 Gerçek Hayat Senaryoları</h3>
      <h4>API Response Tipi</h4>
      <pre><code>interface ApiResponse<T> {
  data: T;
  error?: string;
}

function fetchUser(): ApiResponse<{ id: number; name: string }> {
  return { data: { id: 1, name: "Yusuf" } };
}</code></pre>
      
      <h4>React Component Props</h4>
      <pre><code>interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);</code></pre>
      
      <h3>🧪 Test Otomasyonunda TypeScript Kullanımı</h3>
      <p>Test otomasyonu yazarken de tip güvenliği büyük avantaj sağlar:</p>
      <ul>
        <li>Cypress ve Playwright entegrasyonlarında tipli API'ler ile daha az hata.</li>
        <li>Mock veriler için tip tanımları sayesinde yanlış veriyle test çalıştırma engellenir.</li>
        <li>Test fonksiyonlarının giriş ve çıkış tipleri net şekilde tanımlanır.</li>
      </ul>
      
      <h3>⚙️ Best Practices</h3>
      <ul>
        <li><strong>strict</strong> modunu daima aktif edin (tsconfig.json içinde).</li>
        <li><strong>any</strong> tipinden kaçının, gerekiyorsa <strong>unknown</strong> kullanın.</li>
        <li><strong>Utility types</strong> (Partial, Pick, Omit, Record) ile tip tekrarını azaltın.</li>
        <li>API tiplerini ayrı bir dosyada saklayın → <strong>types/</strong> klasörü.</li>
        <li>Kod incelemelerinde tip kontrolüne önem verin.</li>
      </ul>
      
      <h3>Sonuç</h3>
      <p>TypeScript ile tip güvenli kod yazmak, modern yazılım geliştirmede kaliteyi ve güvenilirliği artıran en önemli adımlardan biridir.</p>
      <ul>
        <li>Hataları önceden yakalar,</li>
        <li>Kodun sürdürülebilirliğini artırır,</li>
        <li>Takım içinde net iletişim sağlar.</li>
      </ul>
      <p>Kısacası, küçük projelerden enterprise seviyedeki uygulamalara kadar TypeScript tip güvenliği, hem developer experience'ı hem de kullanıcı deneyimini doğrudan iyileştirir.</p>
    `,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-20",
    readingTime: "10 min",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Type Safety", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    id: 4,
    title: "React Performance Optimization: Advanced Techniques",
    slug: "react-performance-optimization",
    excerpt:
      "React uygulamalarında performance bottlenecks'i identify etmek ve advanced optimization techniques ile user experience'ı improve etmek için comprehensive guide.",
    content: `
      <h2>React Performance Optimization: Scalable Application'lar için Advanced Strategy'ler</h2>
      <p>Modern React application'ların complexity artışı ile birlikte performance optimization critical bir skill haline geldi. Large-scale application'larda user experience'ı maintain ederken scalability ve maintainability achieve etmek için comprehensive performance strategy'leri implement etmek gerekiyor. Bu detailed guide'da React ekosisteminde advanced performance optimization technique'leri ve best practice'leri ele alacağız.</p>
      
      <h3>🔍 Performance Profiling ve Bottleneck Detection</h3>
      <p>React DevTools Profiler ile component rendering performance'ını analyze ediyoruz. Flame graph'ları, ranked chart'ları ve interaction tracking ile performance bottleneck'leri identify ediyoruz. Chrome DevTools Performance tab ile JavaScript execution time, layout thrashing ve paint operation'ları monitor ediyoruz.</p>
      <p>Web Vitals metric'leri (LCP, FID, CLS) ile real user performance tracking implement ediyoruz. Lighthouse audit'leri, PageSpeed Insights ve synthetic monitoring ile continuous performance measurement sağlıyoruz. Performance budget'ları ve alerting system'leri ile performance regression'ları prevent ediyoruz.</p>
      
      <h3>⚡ Memoization Strategy'leri ve Rendering Optimization'ları</h3>
      <p>React.memo, useMemo ve useCallback hook'ları ile unnecessary re-render'ları prevent ediyoruz. Referential equality, dependency array'leri ve memoization pattern'ları ile optimal component behavior achieve ediyoruz. Higher-order component'leri ve render props pattern'ları ile reusable optimization logic oluşturuyoruz.</p>
      <p>Component composition pattern'ları ile prop drilling minimize edip, context usage'ını optimize ediyoruz. State colocation ve state splitting strategy'leri ile component isolation ve performance improve ediyoruz. Virtual scrolling ve windowing technique'leri ile large list'leri efficiently render ediyoruz.</p>
      
      <h3>🎛️ State Management Performance</h3>
      <p>Redux Toolkit ile normalized state structure'ları ve selector optimization implement ediyoruz. Reselect library ile memoized selector'lar oluşturup, expensive computation'ları cache ediyoruz. State update pattern'ları ve immutability best practice'leri ile predictable state management sağlıyoruz.</p>
      <p>Zustand, Jotai gibi lightweight state management solution'ları ile over-engineering prevent ediyoruz. Server state ve client state separation ile appropriate caching strategy'leri implement ediyoruz. Optimistic update'ler ve background synchronization ile responsive user interaction'ları sağlıyoruz.</p>
      
      <h3>📦 Code Splitting ve Lazy Loading</h3>
      <p>Dynamic import'ları ve React.lazy ile route-based code splitting implement ediyoruz. Webpack bundle analysis ile chunk size'ları optimize ediyoruz. Preloading strategy'leri ve resource hint'leri ile critical resource'ları prioritize ediyoruz.</p>
      <p>Component-level code splitting ile granular loading control sağlıyoruz. Suspense boundary'leri ve error boundary'leri ile graceful loading state'leri handle ediyoruz. Module federation ile micro-frontend architecture'ları enable ediyoruz.</p>
      
      <h3>🖼️ Asset Optimization ve Resource Management</h3>
      <p>Image optimization technique'leri (WebP, AVIF format'ları, responsive image'lar) ile visual content'i efficiently deliver ediyoruz. SVG optimization, icon system'leri ve sprite sheet'leri ile graphics performance improve ediyoruz. Font loading strategy'leri ve FOUT/FOIT prevention ile typography performance optimize ediyoruz.</p>
      <p>CDN integration, cache header'ları ve compression technique'leri ile asset delivery optimize ediyoruz. Service worker'ları ile offline capability'leri ve background asset caching implement ediyoruz.</p>
      
      <h3>🌐 Network Performance ve Data Fetching</h3>
      <p>React Query, SWR ile intelligent data fetching ve caching strategy'leri implement ediyoruz. Request deduplication, background update'ler ve stale-while-revalidate pattern'ları ile optimal data synchronization sağlıyoruz. GraphQL federation ve query optimization ile API performance improve ediyoruz.</p>
      <p>Prefetching strategy'leri, request prioritization ve connection pooling ile network efficiency maximize ediyoruz. Error recovery pattern'ları ve retry mechanism'ları ile resilient data fetching implement ediyoruz.</p>
      
      <h3>🔧 Build Tool Optimization'ları</h3>
      <p>Webpack optimization'ları (tree shaking, dead code elimination, module concatenation) ile bundle size minimize ediyoruz. Vite, esbuild gibi next-generation tool'ları ile development ve build performance improve ediyoruz. Source map optimization'ları ve debugging configuration'ları ile development experience enhance ediyoruz.</p>
      
      <h3>📱 Mobile Performance ve Progressive Enhancement</h3>
      <p>Mobile-first performance strategy'leri ve touch interaction'ları optimize ediyoruz. Progressive Web App feature'ları ile native-like experience'lar oluşturuyoruz. Adaptive loading ve feature detection ile device capability'lere göre optimization sağlıyoruz.</p>
      
      <h3>📊 Monitoring ve Continuous Optimization</h3>
      <p>Real User Monitoring (RUM) ile production performance tracking implement ediyoruz. A/B testing ile performance improvement'ları validate ediyoruz. Performance regression detection ve automated alert'ler ile continuous optimization maintain ediyoruz.</p>
    `,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-14",
    readingTime: "18 min",
    category: "React",
    tags: [
      "React",
      "Performance",
      "Optimization",
      "JavaScript",
      "Web Development",
    ],
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
  },
  {
    id: 5,
    title:
      "Frontend'den Yazılım Test Mühendisliğine: Kariyer Yolculuğum ve Öğrendiklerim",
    slug: "frontend-den-test-muhendisligine-kariyer-yolculugu",
    excerpt:
      "Frontend geliştirici olarak başladığım kariyerimde yazılım test mühendisliğine geçiş sürecim, öğrendiklerim ve bu deneyimimin bana kattıkları.",
    content: `
      <h2>Yazılım dünyasında her gün yeni bir teknoloji, yeni bir trend ve yeni bir bakış açısı ortaya çıkıyor</h2>
      <p>Bu hızlı değişim içinde kariyer yolculuğum da farklı rollerden geçerek şekillendi. Üniversite yıllarımda frontend geliştirici olarak başladığım bu yolculuk, bugün yazılım test mühendisi olarak devam ediyor.</p>

      <h3>🎯 Frontend Dünyasına İlk Adımlarım</h3>
      <p>Kariyerime ilk adımı attığımda, odak noktam kullanıcı arayüzü geliştirme idi. HTML, CSS ve JavaScript ile başladım. Zamanla React ve Next.js gibi modern frameworklerle çalıştım. Bu süreç bana şunları öğretti:</p>

      <p><strong>Kullanıcı deneyiminin önemi:</strong> Bir web sitesinin görsel olarak şık olması kadar, hızlı ve erişilebilir olması da kritik.</p>

      <p><strong>Kod okunabilirliği:</strong> Projelerde ekip çalışması için temiz ve sürdürülebilir kod yazmak şart.</p>

      <p><strong>Responsive tasarım:</strong> Kullanıcıların farklı cihazlarda sorunsuz deneyim yaşaması temel bir gereklilik.</p>

      <p>Frontend tecrübem bana sadece teknik bilgi kazandırmadı; aynı zamanda kullanıcı gözüyle düşünme becerisi kazandırdı.</p>

      <h3>🚀 Yazılım Test Mühendisliğine Geçiş</h3>
      <p>Frontend'de çalışırken fark ettim ki, geliştirdiğimiz özelliklerin sadece kodlanması değil, doğru çalışıp çalışmadığının garanti edilmesi de en az o kadar önemli. Bu farkındalık beni yazılım test mühendisliğine yönlendirdi.</p>

      <p>Test mühendisliğine geçişimle birlikte yeni sorumluluklar üstlendim:</p>

      <ul>
        <li><strong>Manuel testler:</strong> Kullanıcı senaryolarını adım adım test etmek</li>
        <li><strong>Otomasyon testleri:</strong> Selenium, TestNG, Cucumber, Appium gibi araçlarla süreçleri otomatize etmek</li>
        <li><strong>API testleri:</strong> Backend fonksiyonlarının doğru çalıştığından emin olmak</li>
        <li><strong>Test yaşam döngüsü:</strong> Gereksinim analizi, test senaryosu yazımı, hata raporlama ve regression süreçleri</li>
      </ul>

      <h3>💡 Frontend Tecrübesinin Test Mühendisliğine Katkısı</h3>
      <p>Frontend geçmişim, test mühendisliği yolculuğumda büyük avantaj sağladı:</p>

      <ol>
        <li><strong>UI testlerinde kolaylık:</strong> Arayüz elementlerini tanımak ve doğru şekilde test etmek</li>
        <li><strong>Geliştirici ile iletişim:</strong> Frontend teknolojilerini bildiğim için ekiple verimli iletişim</li>
        <li><strong>Kullanıcı odaklı bakış açısı:</strong> Her testte "kullanıcı bu durumda ne görür?" diye düşünmek</li>
      </ol>

      <h3>📚 Öğrendiklerim ve Çıkarımlarım</h3>
      <ul>
        <li><strong>Kodlama bilgisi test mühendisliği için büyük artı</strong></li>
        <li><strong>Test sadece hata bulmak değil, kaliteyi güvence altına almak</strong></li>
        <li><strong>Takım çalışması olmazsa olmaz</strong></li>
        <li><strong>Sürekli öğrenmek şart</strong></li>
      </ul>

      <p>Eğer sen de benzer bir kariyer yolculuğuna çıkmak istiyorsan, şunu unutma: Her rol birbirini besliyor. Bir alandaki tecrüben, diğerinde sana büyük avantaj sağlayabilir.</p>
    `,
    author: "Yusuf Demirci",
    publishedAt: "2025-08-14",
    readingTime: "8 min",
    category: "Career",
    tags: ["Career", "Personal", "Journey", "Testing", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
];

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  // İlgili yazıları bul (aynı kategori veya tag'ler)
  const relatedPosts = blogPosts
    .filter(
      (otherPost) =>
        otherPost.id !== post.id &&
        (otherPost.category === post.category ||
          otherPost.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, 2);

  return (
    <div className="py-24 sm:py-32 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Blog&apos;a Dön
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
            </div>

            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              {post.category}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Article Image */}
        <div className="mb-12 relative h-64 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div
            className="text-gray-700 dark:text-gray-300 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:dark:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:dark:text-gray-200 [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:space-y-2 [&>pre]:bg-gray-100 [&>pre]:dark:bg-gray-800 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>code]:bg-gray-100 [&>code]:dark:bg-gray-800 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Bu yazıyı beğendiniz mi?
            </h4>
            <Button variant="outline" size="sm" className="group">
              <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Paylaş
            </Button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              İlgili Yazılar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                >
                  <div>
                    <Badge variant="secondary" className="mb-3 text-xs">
                      {relatedPost.category}
                    </Badge>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(relatedPost.publishedAt).toLocaleDateString(
                          "tr-TR"
                        )}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {relatedPost.readingTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
