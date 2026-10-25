export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogSource = {
  title: string;
  href: string;
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: BlogSection[];
  author: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  image: string;
  sources?: BlogSource[];
};

export const blogCategories = [
  "Tümü",
  "Web geliştirme",
  "Test otomasyonu",
  "Programlama",
  "Kariyer",
] as const;

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Next.js Projesine Başlarken: Sağlam Bir Yapı Kurmak",
    slug: "nextjs-fullstack-yol-haritasi",
    excerpt:
      "Bir Next.js projesinde ilk kararları verirken gereksinimleri, sayfa yapısını, veri akışını ve kalite kontrollerini nasıl sıraya koyabileceğimize dair pratik bir çerçeve.",
    content: [
      {
        heading: "Önce ihtiyacı ve kapsamı netleştirin",
        paragraphs: [
          "Projeye paket seçerek değil, çözülecek problemi ve kullanıcıların izleyeceği akışları anlayarak başlamak daha sağlıklı. Hangi sayfalara ihtiyaç var, hangi bilgiler gösterilecek, kullanıcı nerede işlem yapacak? Bu soruların yanıtı ilk mimari kararları sadeleştirir.",
          "İlk sürümde gerekli olanları sonraki fikirlerden ayırın. Küçük ve anlaşılır bir kapsam, hem geliştirme süresini hem de test edilecek alanı yönetilebilir kılar.",
        ],
      },
      {
        heading: "Sayfaları ve bileşen sınırlarını belirleyin",
        paragraphs: [
          "App Router, sayfa ve ortak yerleşim dosyalarını klasör yapısı üzerinden düzenler. Tekrarlanan başlık, menü ve altbilgi gibi parçaları ortak bileşenlerde toplamak tutarlılığı korur; her sayfanın davranışını ise ihtiyaç duyduğu yerde ayrı tutar.",
          "Sunucu bileşenleri veri hazırlama ve sunucuda çalışması gereken işler için uygun bir başlangıçtır. Etkileşim, olay işleyicisi veya tarayıcı API'si gerektiğinde istemci bileşeni sınırını ekleyin. Bu sınırı dar tutmak, gereksiz JavaScript'in tarayıcıya taşınmasını önlemeye yardımcı olur.",
        ],
      },
      {
        heading: "Veri ve arayüz durumlarını birlikte düşünün",
        paragraphs: [
          "Bir ekran yalnızca veriler geldiğinde nasıl göründüğüyle tamamlanmış sayılmaz. Yüklenme, boş sonuç, hata ve başarılı işlem durumları da tasarımın parçasıdır. Formlarda hangi alanların zorunlu olduğunu, hata mesajının nerede gösterileceğini ve kullanıcının nasıl devam edeceğini baştan belirleyin.",
          "TypeScript, kod içindeki veri şekillerini anlatır; dış kaynaktan gelen verinin doğruluğunu tek başına garanti etmez. API yanıtlarını uygulamaya almadan önce doğrulayın ve gizli anahtarları sunucu tarafında tutun.",
        ],
      },
      {
        heading: "Yayın öncesi kaliteyi görünür kılın",
        paragraphs: [
          "Yayın öncesinde lint ve tip kontrollerini, üretim derlemesini ve kullanıcı açısından kritik akışların testlerini çalıştırın. Önizleme ortamında sayfaları dar ekranda, klavyeyle ve gerçek içerikle gözden geçirmek, yalnızca kodun derlenmesinin yakalayamayacağı sorunları ortaya çıkarır.",
          "Bu adımlar tek seferlik bir kontrol listesi olarak kalmamalı. Proje büyüdükçe yeni özelliklerin aynı kalite eşiğinden geçmesini sağlayan bir çalışma düzenine dönüşmelidir.",
        ],
      },
    ],
    author: "Yusuf Demirci",
    publishedAt: "2025-08-30",
    readingTime: "4 dk",
    category: "Web geliştirme",
    tags: ["Next.js", "React", "TypeScript", "Proje yapısı"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    sources: [
      { title: "Next.js App Router", href: "https://nextjs.org/docs/app" },
      {
        title: "Next.js Server ve Client Components",
        href: "https://nextjs.org/docs/app/getting-started/server-and-client-components",
      },
    ],
  },
  {
    id: 2,
    title: "Test Otomasyonunu CI/CD Akışına Yerleştirmek",
    slug: "test-otomasyon-cicd-surecleri",
    excerpt:
      "Bir CI/CD akışında testleri doğru sıraya koymak; hızlı geri bildirim, güvenilir sonuçlar ve kontrollü yayın için temel bir adımdır.",
    content: [
      {
        heading: "Pipeline'ın amacı hızlı ve güvenilir geri bildirimdir",
        paragraphs: [
          "Sürekli entegrasyon, kod değişikliklerinin ortak depoda sık aralıklarla birleştirilmesini ve bu değişikliklerin otomatik kontrollerden geçmesini sağlar. Sürekli teslimat, yayınlanmaya hazır bir sürüm üretmeyi hedefler; sürekli dağıtımda ise başarılı kontrollerden sonra üretime geçiş otomatik yapılır.",
          "Bu akışların değeri yalnızca otomatik dağıtım değildir. Sorunu değişikliğe yakın zamanda görünür kılar ve ekibin hangi adımın başarısız olduğunu anlamasını kolaylaştırır.",
        ],
      },
      {
        heading: "Testleri geri bildirim hızına göre sıralayın",
        paragraphs: [
          "Her kontrolü aynı anda çalıştırmak yerine, hızlı sonuç verenlerden başlayın. Kod biçimi ve tip kontrolleri ile birim testleri erken aşamada; servis ve API kontrollerini sonraki aşamada; kritik uçtan uca senaryoları ise uygulama ortamı hazır olduğunda çalıştırabilirsiniz.",
          "Hangi testlerin her değişiklikte, hangilerinin belirli aralıklarla çalışacağı projenin riskine ve test süresine göre belirlenmeli. Amaç test sayısını artırmak değil, önemli hataları yayın öncesinde yakalamaktır.",
        ],
        bullets: [
          "Hızlı statik kontroller ve birim testleri",
          "Servisler arası ilişkileri doğrulayan entegrasyon ve API testleri",
          "Kullanıcının temel akışlarını kontrol eden seçilmiş uçtan uca senaryolar",
        ],
      },
      {
        heading: "Kararsız testleri azaltın",
        paragraphs: [
          "Aynı kodda bazen geçen, bazen kalan bir test ekibin sonuçlara güvenini düşürür. Test verisini ve başlangıç durumunu kontrol altında tutun; elementin hazır olmasını bekleyin, sabit süreli beklemelere yaslanmayın ve testlerin birbirinin durumuna bağlı kalmasını önleyin.",
          "Başarısızlıkta ekran görüntüsü, günlük veya test raporu gibi kanıtları saklamak teşhisi hızlandırır. Gizli bilgileri bu çıktılara yazdırmamak da aynı sürecin parçasıdır.",
        ],
      },
      {
        heading: "Yayını bir karar noktası olarak ele alın",
        paragraphs: [
          "Tüm kontroller geçtiğinde ekip, değişikliğin incelemeye veya yayına hazır olduğuna dair net bir sinyal alır. Üretime geçiş otomatik değilse onay adımını açıkça tanımlayın; geçişten sonra da temel akışların çalıştığını doğrulayın.",
          "İyi bir pipeline; sonucu, başarısız adımı ve sonraki adımı anlaşılır biçimde gösterir. Böylece otomasyon, yalnızca işleri çalıştıran değil, ekibin karar vermesine yardımcı olan bir araca dönüşür.",
        ],
      },
    ],
    author: "Yusuf Demirci",
    publishedAt: "2025-08-26",
    readingTime: "4 dk",
    category: "Test otomasyonu",
    tags: ["CI/CD", "Test otomasyonu", "Jenkins", "GitHub Actions"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    sources: [
      {
        title: "GitHub Actions ile sürekli entegrasyon",
        href: "https://docs.github.com/en/actions/get-started/continuous-integration",
      },
      {
        title: "GitHub Actions ile sürekli dağıtım",
        href: "https://docs.github.com/en/actions/get-started/continuous-deployment",
      },
    ],
  },
  {
    id: 3,
    title: "TypeScript ile Daha Güvenilir Kod Yazmak",
    slug: "typescript-tip-guvenli-kod",
    excerpt:
      "TypeScript'in tür sistemi, veri şekillerini görünür kılar ve birçok hatayı çalıştırmadan önce yakalamaya yardımcı olur. Etkili kullanım için birkaç temel yaklaşım.",
    content: [
      {
        heading: "Türleri kodun sözleşmesi olarak kullanın",
        paragraphs: [
          "TypeScript, JavaScript kodunu çalıştırmadan önce denetler ve beklenmeyen tür kullanımlarını görünür hâle getirir. Fonksiyonların hangi girdileri beklediği ve ne döndürdüğü açık olduğunda, kodu okuyan kişi de değişiklik yapan ekip arkadaşı da daha sağlam bir başlangıç noktası bulur.",
          "Değişkenlerin çoğunda türü tekrar yazmak gerekmez; TypeScript değeri bağlamından çıkarabilir. Tür tanımlarını özellikle fonksiyon sınırlarında, API modellerinde ve birden fazla yerde kullanılan veri yapılarında belirginleştirmek daha yararlıdır.",
        ],
      },
      {
        heading: "Belirsizliği modelleyin",
        paragraphs: [
          "Gerçek uygulamalarda veri her zaman tek biçimde gelmez. Bir alan bulunmayabilir, işlem başarısız olabilir ya da durum birkaç olasılıktan birinde olabilir. Bu durumları türlerde açıkça temsil etmek, her ekranda ayrı ayrı varsayım yapmaktan daha güvenlidir.",
          "Dış kaynaktan gelen veriyi başlangıçta bilinmiyor kabul edin. TypeScript türleri derleme sırasında silindiğinden, bir API yanıtını yalnızca tür tanımıyla çalışma zamanında doğrulamış olmazsınız. Gerekli alanları uygulamanın sınırında kontrol edin.",
        ],
      },
      {
        heading: "any kullanımını bilinçli sınırlayın",
        paragraphs: [
          "any, tür denetimini o noktada devre dışı bırakır. Geçiş sürecinde veya dış bir kütüphaneyle çalışırken gerekebilir; ancak yaygın kullanımı hataları yeniden görünmez kılar. Veri hakkında henüz yeterli bilgi yoksa unknown kullanıp, kullanmadan önce türünü daraltmak daha güvenli bir yaklaşımdır.",
          "Öte yandan her değere karmaşık bir tür yazmak da kodu gereksiz yere zorlaştırabilir. Tür sistemi, gerçek veri yapısını ve iş kurallarını açıklamalı; yalnızca derleyiciyi susturmaya yönelik bir katmana dönüşmemelidir.",
        ],
      },
      {
        heading: "Tür değişikliklerini testlerle destekleyin",
        paragraphs: [
          "Tür denetimi, kodun belirlenen şekillerle tutarlı olup olmadığını kontrol eder. Kullanıcı akışının doğru çalıştığını, API'nin beklenen yanıtı verdiğini veya bir formun doğru mesaj gösterdiğini tek başına kanıtlamaz. Bu nedenle derleme ve tür kontrollerini birim, entegrasyon ya da uçtan uca testlerle tamamlayın.",
          "İyi tanımlanmış türler, testlerin yerine geçmez; test edilecek davranışın sınırlarını daha anlaşılır hâle getirir.",
        ],
      },
    ],
    author: "Yusuf Demirci",
    publishedAt: "2025-08-20",
    readingTime: "4 dk",
    category: "Programlama",
    tags: ["TypeScript", "JavaScript", "Tür güvenliği"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    sources: [
      {
        title: "TypeScript: Yeni başlayanlar için",
        href: "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch",
      },
    ],
  },
  {
    id: 4,
    title: "React Performansını Ölçerek İyileştirmek",
    slug: "react-performance-optimization",
    excerpt:
      "Yavaşlığın kaynağını ölçerek bulmak; gereksiz optimizasyonlardan kaçınmaya ve kullanıcıların hissettiği performansa odaklanmaya yardımcı olur.",
    content: [
      {
        heading: "Önce kullanıcının yaşadığı sorunu tanımlayın",
        paragraphs: [
          "Bir ekranın yavaş hissettirmesinin nedeni her zaman React bileşenlerinin yeniden çizilmesi değildir. Ağ isteği, büyük bir liste, ağır bir görsel veya tarayıcıdaki düzen hesaplamaları da gecikmeye yol açabilir. Optimizasyona başlamadan önce sorunun hangi etkileşimde ve hangi koşulda ortaya çıktığını belirleyin.",
          "React Profiler, bileşen ağacının çizim süresini incelemeye yardımcı olur. Tarayıcı geliştirici araçları ve gerçek kullanıcı ölçümleri ise ağ, JavaScript ve sayfa yüklenmesi gibi diğer etkenleri ayırmayı sağlar.",
        ],
      },
      {
        heading: "Önce en basit yapısal iyileştirmeleri deneyin",
        paragraphs: [
          "Bir durum yalnızca tek bir bölüm tarafından kullanılıyorsa onu o bölüme yakın tutmak, ilgisiz alanların güncellenmesini azaltabilir. Gereksiz veri isteklerini, büyük görselleri ve çok sayıda öğeyi aynı anda ekrana basmayı da kontrol edin.",
          "Büyük listelerde yalnızca görünür öğeleri çizmek veya veriyi sayfalara bölmek fayda sağlayabilir. Hangi yaklaşımın uygun olduğu listenin boyutuna, kullanım biçimine ve erişilebilirlik gereksinimlerine bağlıdır.",
        ],
      },
      {
        heading: "Memoization'ı ölçümden sonra kullanın",
        paragraphs: [
          "React.memo, useMemo ve useCallback bazı tekrar hesaplamaları veya çizimleri önleyebilir; ancak her bileşene eklenmeleri performansı kendiliğinden artırmaz. Ek bağımlılıklar ve karşılaştırmalar kodu karmaşıklaştırabilir.",
          "Önce Profiler veya tekrarlanabilir bir ölçümle maliyetli işlemi belirleyin. Optimizasyonu uyguladıktan sonra aynı etkileşimi benzer koşullarda yeniden ölçün. İyileşme yoksa ek karmaşıklığın karşılığını vermiyor olabilir.",
        ],
      },
      {
        heading: "Sonucu gerçekçi koşullarda doğrulayın",
        paragraphs: [
          "Geliştirme ortamındaki ölçümler üretim deneyimini her zaman yansıtmaz. Gerçek kullanıcıya yakın cihaz ve ağ koşullarında, aynı sayfa ve etkileşim üzerinden önce-sonra karşılaştırması yapın.",
          "Başarıyı yalnızca daha az render sayısıyla değil, kullanıcının işi daha rahat tamamlamasıyla değerlendirin. Performans çalışmasının hedefi ölçüm değerlerini iyileştirmek kadar, arayüzü daha akıcı ve güvenilir kılmaktır.",
        ],
      },
    ],
    author: "Yusuf Demirci",
    publishedAt: "2025-08-14",
    readingTime: "4 dk",
    category: "Web geliştirme",
    tags: ["React", "Performans", "Profiler"],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
    sources: [
      { title: "React Profiler", href: "https://react.dev/reference/react/Profiler" },
      { title: "React useMemo", href: "https://react.dev/reference/react/useMemo" },
    ],
  },
  {
    id: 5,
    title: "Frontend Deneyiminden Test Otomasyonuna Uzanan Yolculuğum",
    slug: "frontend-den-test-muhendisligine-kariyer-yolculugu",
    excerpt:
      "Frontend geliştirmeyle başlayan kariyerim, test mühendisliği ve otomasyon deneyimiyle genişledi. Bu iki alanın bugünkü çalışma biçimime nasıl yön verdiğini anlatıyorum.",
    content: [
      {
        heading: "Kariyerime frontend geliştirmeyle başladım",
        paragraphs: [
          "Profesyonel yolculuğum Arute Solutions'ta Frontend Developer Intern olarak başladı. Kasım 2023 ile Aralık 2023 arasındaki staj dönemimin ardından aynı şirkette Frontend Developer olarak çalışmaya devam ettim ve bu görevim Ağustos 2024'e kadar sürdü.",
          "Bu dönemde arayüzlerin nasıl kurulduğunu, bileşenlerin nasıl bir araya geldiğini ve farklı ekran boyutlarında tutarlı bir deneyim oluşturmanın neden önemli olduğunu öğrendim. Geliştirme süreci, kullanıcıların bir özelliği hangi adımlarla kullandığını yakından görmemi sağladı.",
        ],
      },
      {
        heading: "Test mühendisliğiyle bakış açım genişledi",
        paragraphs: [
          "Eylül 2024'te Sisal Hub Türkiye'de QA Tester olarak çalışmaya başladım. Ocak 2026'da Test Specialist rolüne geçtim. Bu görevlerde yazılım kalitesine, özelliklerin beklenen davranışı karşılaması ve kullanıcı akışlarının farklı koşullarda tutarlı çalışması açısından yaklaşıyorum.",
          "Test otomasyonu, tekrar eden kontrolleri daha düzenli yürütmeye yardımcı oluyor. Bununla birlikte, otomasyondan önce neyin ve neden test edildiğini netleştirmek gerekiyor. Doğru senaryo; gereksinimi, gerçek kullanıcı davranışını ve olası hata durumlarını birlikte düşünmekle ortaya çıkıyor.",
        ],
      },
      {
        heading: "İki deneyim birbirini tamamlıyor",
        paragraphs: [
          "Frontend geçmişim arayüz davranışını ve teknik bileşenleri daha iyi anlamama yardımcı oluyor. Test çalışmaları ise özelliklere yalnızca kod düzeyinde değil, uçtan uca kullanıcı akışı olarak bakmamı sağlıyor.",
          "Bu bakış, bir sorunu daha anlaşılır tarif etmeyi ve geliştirme ile kalite adımlarını aynı konuşmanın parçası hâline getirmeyi kolaylaştırıyor. Benim için geliştirme ve test, birbirinden kopuk aşamalar değil; aynı ürünün güvenilirliğine katkı veren çalışmalar.",
        ],
      },
      {
        heading: "Bugünkü odağım",
        paragraphs: [
          "Bugün web geliştirme, mobil uygulama geliştirme ve test otomasyonu alanlarında çalışıyorum. Bu alanların kesiştiği nokta benim için açık: kullanıcı ihtiyacını anlayan, beklenen şekilde çalışan ve değişikliklerden sonra da güvenle kullanılabilen ürünler geliştirmek.",
          "Kariyerimdeki farklı roller, tek bir uzmanlık alanına kapanmak yerine yazılımın farklı aşamalarını anlamanın değerini gösterdi. Öğrenmeye ve bu deneyimleri daha güçlü ürünler ortaya çıkarmak için bir araya getirmeye devam ediyorum.",
        ],
      },
    ],
    author: "Yusuf Demirci",
    publishedAt: "2025-08-14",
    readingTime: "4 dk",
    category: "Kariyer",
    tags: ["Kariyer", "Frontend", "Test otomasyonu", "Yazılım mühendisliği"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
];
