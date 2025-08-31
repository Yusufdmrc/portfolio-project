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
      <p>Next.js, React ekosisteminde server-side rendering, static site generation ve API routes gibi güçlü özelliklerle full-stack web uygulamaları geliştirmek için en tercih edilen framework haline geldi. Bu kapsamlı rehberde, sıfırdan professional bir Next.js projesi oluşturma sürecini detaylı olarak ele alacağız.</p>
      
      <h3>🚀 Proje Kurulumu ve İlk Adımlar</h3>
      <p>Next.js projesi oluşturmak için modern development stack'i ile başlıyoruz. TypeScript desteği, Tailwind CSS entegrasyonu ve ESLint konfigürasyonu ile professional bir geliştirme ortamı kuruyoruz:</p>
      <pre><code>npx create-next-app@latest my-project --typescript --tailwind --eslint --app</code></pre>
      <p>App Router yapısı ile birlikte gelen yeni özellikler, routing sistemini daha esnek ve performanslı hale getiriyor. Layout dosyaları, loading states ve error boundaries ile kullanıcı deneyimini optimize edebiliyoruz.</p>
      
      <h3>📦 Essential Paketler ve Kütüphaneler</h3>
      <p>Modern bir full-stack projede ihtiyaç duyacağımız temel paketleri entegre ediyoruz:</p>
      <ul>
        <li><strong>Prisma ORM:</strong> Type-safe database queries ve migration management</li>
        <li><strong>NextAuth.js:</strong> Secure authentication ve session management</li>
        <li><strong>Tailwind CSS:</strong> Utility-first CSS framework ile rapid styling</li>
        <li><strong>Framer Motion:</strong> Smooth animations ve micro-interactions</li>
        <li><strong>Zustand/Redux Toolkit:</strong> Client-side state management</li>
        <li><strong>React Hook Form:</strong> Performant form handling ve validation</li>
        <li><strong>Zod:</strong> Runtime type validation ve schema definition</li>
      </ul>
      
      <h3>🗃️ Database Architecture ve Prisma Entegrasyonu</h3>
      <p>Modern web uygulamalarında data layer'ın doğru tasarlanması kritik öneme sahiptir. Prisma ORM ile PostgreSQL veya MySQL database'i entegre ederek type-safe ve scalable bir veri yönetim sistemi kuruyoruz. Schema design patterns, relations ve indexing stratejileri ile performanslı database queries oluşturuyoruz.</p>
      <p>Migration sistemleri ve seeding processes ile development ve production ortamları arasında consistency sağlıyoruz. Database connection pooling ve query optimization teknikleri ile application performance'ını maximize ediyoruz.</p>
      
      <h3>🔐 Authentication ve Authorization Sistemi</h3>
      <p>NextAuth.js ile comprehensive authentication sistemi oluşturuyoruz. OAuth providers (Google, GitHub, Discord), JWT tokens ve session management ile secure user authentication sağlıyoruz. Role-based access control (RBAC) ve permission systems ile authorization layer'ı implement ediyoruz.</p>
      <p>Security best practices, CSRF protection ve secure cookie handling ile application security'sini güçlendiriyoruz. Password hashing, rate limiting ve account verification süreçleri ile user accounts'ı koruyoruz.</p>
      
      <h3>🎨 UI/UX Design ve Component Architecture</h3>
      <p>Responsive design principles ve modern UI patterns ile kullanıcı dostu interface'ler tasarlıyoruz. Component-driven development approach ile reusable ve maintainable UI components oluşturuyoruz. Design systems ve style guides ile consistent user experience sağlıyoruz.</p>
      
      <h3>⚡ Performance Optimization</h3>
      <p>Next.js'in sunduğu Image optimization, automatic code splitting ve caching mechanisms ile application performance'ını optimize ediyoruz. Lazy loading, prefetching ve bundle analysis ile page load times'ı minimize ediyoruz.</p>
      
      <h3>🚀 Production Deployment ve DevOps</h3>
      <p>Vercel platformu ile seamless deployment pipeline oluşturuyoruz. Environment variables, preview deployments ve automatic scaling ile production-ready application deploy ediyoruz. Monitoring, logging ve error tracking ile application health'ini sürekli takip ediyoruz.</p>
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
      <h2>Test Otomasyon ve CI/CD: Modern Yazılım Geliştirmede Kalite Assurance</h2>
      <p>Test otomasyonu ve CI/CD süreçleri, modern yazılım geliştirme döngüsünün ayrılmaz parçaları haline geldi. Continuous integration ve continuous deployment practices ile yazılım kalitesini artırmak, deployment süreçlerini hızlandırmak ve human error'ları minimize etmek mümkün hale geliyor. Bu kapsamlı rehberde, enterprise-level test otomasyon projelerinde CI/CD pipeline'larının nasıl kurulacağını ve optimize edileceğini detaylı olarak ele alacağız.</p>
      
      <h3>🔧 GitHub Actions ile Modern CI/CD Pipeline</h3>
      <p>GitHub Actions, kod repository'sinde gerçekleşen her değişiklikte otomatik olarak tetiklenen workflow'lar oluşturmamızı sağlar. Test otomasyon projelerinde, pull request'ler açıldığında, main branch'e merge edildiğinde veya scheduled intervals'larda otomatik test çalıştırma süreçlerini yapılandırıyoruz.</p>
      <p>Matrix strategies kullanarak farklı operating systems, browser versions ve test environments'ta paralel test execution sağlıyoruz. Workflow artifacts ile test results, screenshots ve logs'ları preserve edip, team members'ların kolayca access edebileceği şekilde organize ediyoruz.</p>
      <p>Environment-specific configurations ile development, staging ve production environments için farklı test strategies implement ediyoruz. Secrets management ile API keys, database credentials ve sensitive data'yı secure şekilde handle ediyoruz.</p>
      
      <h3>🐳 Docker Containerization ve Environment Management</h3>
      <p>Docker containers kullanarak test environments'ın standardizasyonunu ve isolation'ını sağlıyoruz. Multi-stage Docker builds ile efficient container images oluşturup, test execution time'ını optimize ediyoruz. Container orchestration ile scalable test infrastructure kuruyoruz.</p>
      <p>Docker Compose ile complex application stacks'i (database, message queues, external services) local development environment'ta replicate ediyoruz. Volume mounting ve networking configurations ile realistic test scenarios oluşturuyoruz.</p>
      <p>Selenium Grid ve Docker integration ile cross-browser testing capabilities sağlıyoruz. Headless browsers ve visual regression testing için optimized container configurations implement ediyoruz.</p>
      
      <h3>🚀 Jenkins Enterprise Integration</h3>
      <p>Jenkins ile enterprise-level CI/CD automation kuruyoruz. Pipeline as Code approach ile Jenkinsfile'lar oluşturup, version control altında pipeline definitions'ları manage ediyoruz. Multi-branch pipelines ile feature branches için automatic test execution sağlıyoruz.</p>
      <p>Jenkins plugins ecosystem'i kullanarak third-party tools integration (JIRA, Slack, email notifications) gerçekleştiriyoruz. Build triggers, scheduled executions ve manual deployment approvals ile flexible release management implement ediyoruz.</p>
      
      <h3>📊 Advanced Test Reporting ve Analytics</h3>
      <p>Allure Framework ile comprehensive test reporting sistemi kuruyoruz. Test execution trends, failure analysis ve performance metrics ile data-driven insights elde ediyoruz. Historical test data analizi ile flaky tests identification ve stability improvements sağlıyoruz.</p>
      <p>ExtentReports ile customizable HTML reports oluşturup, stakeholders için executive summaries hazırlıyoruz. Screenshots, video recordings ve step-by-step execution logs ile detailed failure investigation capabilities sağlıyoruz.</p>
      <p>Test metrics dashboards ile real-time monitoring ve alerting systems kuruyoruz. Code coverage reports ve quality gates ile minimum quality standards enforce ediyoruz.</p>
      
      <h3>⚡ Parallel Execution ve Performance Optimization</h3>
      <p>Test Suite'lerin parallel execution ile test cycle time'ını dramatically reduce ediyoruz. TestNG, JUnit veya pytest ile test parallelization strategies implement ediyoruz. Load balancing ve resource optimization ile maximum efficiency achieve ediyoruz.</p>
      <p>Test data management ve isolation strategies ile parallel execution'da data conflicts'i prevent ediyoruz. Dynamic test distribution algorithms ile optimal resource utilization sağlıyoruz.</p>
      
      <h3>🔒 Security Testing Integration</h3>
      <p>OWASP security testing practices'i CI/CD pipeline'a integrate ediyoruz. Vulnerability scanning, dependency checking ve security code analysis ile proactive security measures implement ediyoruz. Compliance requirements ve security standards'ı automated testing ile ensure ediyoruz.</p>
      
      <h3>📈 Monitoring ve Continuous Improvement</h3>
      <p>Application Performance Monitoring (APM) tools ile production environment'ta real-time metrics collect ediyoruz. Error tracking, user behavior analysis ve performance benchmarks ile continuous feedback loop oluşturuyoruz. A/B testing ve feature flags ile safe deployment strategies implement ediyoruz.</p>
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
      <h2>TypeScript ile Modern Development: Type Safety ve Developer Experience Revolution</h2>
      <p>TypeScript, JavaScript'in superset'i olarak Microsoft tarafından geliştirilen, static type checking özelliği kazandırarak modern web development'ta paradigm shift yaratmış bir programlama dilidir. Large-scale applications'da maintainability, developer productivity ve code quality açısından sağladığı avantajlar, onu enterprise-level projeler için vazgeçilmez hale getirmiştir. Bu comprehensive guide'da TypeScript'in advanced features'larını ve best practices'lerini detaylı olarak ele alacağız.</p>
      
      <h3>🎯 Type Safety ve Compile-Time Error Detection</h3>
      <p>TypeScript'in temel avantajı compile-time type checking ile runtime hatalarını minimize etmesidir. Type annotations, interface definitions ve generics kullanarak code reliability'sini dramatically improve ediyoruz. Null safety, undefined checks ve strict type enforcement ile robust applications geliştirebiliyoruz.</p>
      <p>Type guards, discriminated unions ve conditional types ile complex data structures'ı safely handle ediyoruz. Type narrowing techniques ile runtime type checking'i minimize edip, performance optimizations sağlıyoruz. Exhaustiveness checking ile switch statements ve pattern matching'de comprehensive coverage ensure ediyoruz.</p>
      
      <h3>🏗️ Advanced Interface ve Type System Architecture</h3>
      <p>Interface definitions ile clean API contracts oluşturup, team collaboration'ı improve ediyoruz. Extending interfaces, intersection types ve mapped types ile flexible type hierarchies design ediyoruz. Declaration merging ve module augmentation ile third-party libraries'i extend edebiliyoruz.</p>
      <p>Utility types (Partial, Required, Pick, Omit, Record) ile type transformations gerçekleştirip, code duplication'ı prevent ediyoruz. Template literal types ile string manipulation'ları type-safe şekilde handle ediyoruz. Branded types ile primitive types'a semantic meaning kazandırıyoruz.</p>
      
      <h3>🔧 Generics ve Advanced Type Patterns</h3>
      <p>Generic programming ile reusable ve type-safe kod yazıyoruz. Type parameters, constraints ve default generic types ile flexible APIs design ediyoruz. Higher-order types ve type-level programming ile complex type relationships model ediyoruz.</p>
      <p>Conditional types ile type-level logic implement ediyoruz. Infer keyword ile type extraction ve transformation patterns oluşturuyoruz. Recursive types ile nested data structures'ı elegantly handle ediyoruz.</p>
      
      <h3>🌐 React ve TypeScript Integration Best Practices</h3>
      <p>React components için comprehensive type definitions yazıyoruz. Props interfaces, event handlers ve ref types ile component contracts define ediyoruz. Generic components ile reusable UI libraries oluşturuyoruz.</p>
      <p>Context API, custom hooks ve state management için type-safe patterns implement ediyoruz. React Query, Redux Toolkit gibi libraries ile TypeScript integration optimize ediyoruz. JSX element types ve component composition patterns ile maintainable component architectures oluşturuyoruz.</p>
      
      <h3>� Node.js Backend Development ile TypeScript</h3>
      <p>Express.js, Fastify gibi frameworks ile type-safe backend APIs geliştiriyoruz. Request/response types, middleware definitions ve error handling patterns ile robust server applications oluşturuyoruz. Database ORMs (Prisma, TypeORM) ile type-safe database operations implement ediyoruz.</p>
      <p>API route handlers, authentication middleware ve validation schemas için comprehensive type coverage sağlıyoruz. Dependency injection patterns ve service layer architectures ile scalable backend systems design ediyoruz.</p>
      
      <h3>🧪 Testing Strategies ve Type Safety</h3>
      <p>Jest, Vitest gibi testing frameworks ile TypeScript integration optimize ediyoruz. Type-safe mocks, test utilities ve assertion helpers oluşturuyoruz. End-to-end testing tools (Playwright, Cypress) ile TypeScript support enable ediyoruz.</p>
      <p>Test data generators, factory patterns ve type-safe test scenarios ile comprehensive test coverage achieve ediyoruz. Property-based testing ve generative testing approaches ile edge cases discover ediyoruz.</p>
      
      <h3>⚙️ Build Tools ve Development Environment</h3>
      <p>TypeScript compiler options optimize edip, build performance improve ediyoruz. ESLint, Prettier integrations ile code quality standards enforce ediyoruz. Path mapping, module resolution ve declaration files ile development experience enhance ediyoruz.</p>
      <p>Webpack, Vite, esbuild gibi bundlers ile TypeScript compilation optimize ediyoruz. Source maps, debug configurations ve development server setups ile efficient debugging workflows oluşturuyoruz.</p>
      
      <h3>📚 Migration Strategies ve Gradual Adoption</h3>
      <p>Existing JavaScript codebases'i TypeScript'e migrate etmek için step-by-step strategies implement ediyoruz. allowJs, checkJs configurations ile gradual migration enable ediyoruz. Type declaration files (.d.ts) ile legacy code'u type-safe şekilde integrate ediyoruz.</p>
      <p>Team onboarding, training materials ve best practices documentation ile TypeScript adoption facilitate ediyoruz. Code review guidelines ve style guides ile consistent TypeScript usage ensure ediyoruz.</p>
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
      <h2>React Performance Optimization: Scalable Applications için Advanced Strategies</h2>
      <p>Modern React applications complexity artışı ile birlikte performance optimization critical bir skill haline geldi. Large-scale applications'da user experience'ı maintain ederken scalability ve maintainability achieve etmek için comprehensive performance strategies implement etmek gerekiyor. Bu detailed guide'da React ecosystem'inde advanced performance optimization techniques'leri ve best practices'leri ele alacağız.</p>
      
      <h3>🔍 Performance Profiling ve Bottleneck Detection</h3>
      <p>React DevTools Profiler ile component rendering performance'ını analyze ediyoruz. Flame graphs, ranked charts ve interaction tracking ile performance bottlenecks'i identify ediyoruz. Chrome DevTools Performance tab ile JavaScript execution time, layout thrashing ve paint operations monitor ediyoruz.</p>
      <p>Web Vitals metrics (LCP, FID, CLS) ile real user performance tracking implement ediyoruz. Lighthouse audits, PageSpeed Insights ve synthetic monitoring ile continuous performance measurement sağlıyoruz. Performance budgets ve alerting systems ile performance regressions prevent ediyoruz.</p>
      
      <h3>⚡ Memoization Strategies ve Rendering Optimizations</h3>
      <p>React.memo, useMemo ve useCallback hooks ile unnecessary re-renders prevent ediyoruz. Referential equality, dependency arrays ve memoization patterns ile optimal component behavior achieve ediyoruz. Higher-order components ve render props patterns ile reusable optimization logic oluşturuyoruz.</p>
      <p>Component composition patterns ile prop drilling minimize edip, context usage optimize ediyoruz. State colocation ve state splitting strategies ile component isolation ve performance improve ediyoruz. Virtual scrolling ve windowing techniques ile large lists efficiently render ediyoruz.</p>
      
      <h3>🎛️ State Management Performance</h3>
      <p>Redux Toolkit ile normalized state structures ve selector optimization implement ediyoruz. Reselect library ile memoized selectors oluşturup, expensive computations cache ediyoruz. State update patterns ve immutability best practices ile predictable state management sağlıyoruz.</p>
      <p>Zustand, Jotai gibi lightweight state management solutions ile over-engineering prevent ediyoruz. Server state ve client state separation ile appropriate caching strategies implement ediyoruz. Optimistic updates ve background synchronization ile responsive user interactions sağlıyoruz.</p>
      
      <h3>📦 Code Splitting ve Lazy Loading</h3>
      <p>Dynamic imports ve React.lazy ile route-based code splitting implement ediyoruz. Webpack bundle analysis ile chunk sizes optimize ediyoruz. Preloading strategies ve resource hints ile critical resources prioritize ediyoruz.</p>
      <p>Component-level code splitting ile granular loading control sağlıyoruz. Suspense boundaries ve error boundaries ile graceful loading states handle ediyoruz. Module federation ile micro-frontend architectures enable ediyoruz.</p>
      
      <h3>🖼️ Asset Optimization ve Resource Management</h3>
      <p>Image optimization techniques (WebP, AVIF formats, responsive images) ile visual content efficiently deliver ediyoruz. SVG optimization, icon systems ve sprite sheets ile graphics performance improve ediyoruz. Font loading strategies ve FOUT/FOIT prevention ile typography performance optimize ediyoruz.</p>
      <p>CDN integration, cache headers ve compression techniques ile asset delivery optimize ediyoruz. Service workers ile offline capabilities ve background asset caching implement ediyoruz.</p>
      
      <h3>🌐 Network Performance ve Data Fetching</h3>
      <p>React Query, SWR ile intelligent data fetching ve caching strategies implement ediyoruz. Request deduplication, background updates ve stale-while-revalidate patterns ile optimal data synchronization sağlıyoruz. GraphQL federation ve query optimization ile API performance improve ediyoruz.</p>
      <p>Prefetching strategies, request prioritization ve connection pooling ile network efficiency maximize ediyoruz. Error recovery patterns ve retry mechanisms ile resilient data fetching implement ediyoruz.</p>
      
      <h3>🔧 Build Tool Optimizations</h3>
      <p>Webpack optimizations (tree shaking, dead code elimination, module concatenation) ile bundle size minimize ediyoruz. Vite, esbuild gibi next-generation tools ile development ve build performance improve ediyoruz. Source map optimizations ve debugging configurations ile development experience enhance ediyoruz.</p>
      
      <h3>📱 Mobile Performance ve Progressive Enhancement</h3>
      <p>Mobile-first performance strategies ve touch interactions optimize ediyoruz. Progressive Web App features ile native-like experiences oluşturuyoruz. Adaptive loading ve feature detection ile device capabilities'e göre optimization sağlıyoruz.</p>
      
      <h3>📊 Monitoring ve Continuous Optimization</h3>
      <p>Real User Monitoring (RUM) ile production performance tracking implement ediyoruz. A/B testing ile performance improvements validate ediyoruz. Performance regression detection ve automated alerts ile continuous optimization maintain ediyoruz.</p>
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
