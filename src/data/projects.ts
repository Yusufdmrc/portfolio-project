export type ProjectGroup = "web" | "automation";
export type ProjectVisualKind = "web" | "test" | "mobile" | "api";

export const projects = [
  {
    id: "tavol-turkiye",
    title: "Tavol Türkiye",
    href: "https://tavolturkiye.com/",
    group: "web",
    category: "Web geliştirme",
    visual: "web",
  },
  {
    id: "afd-elektronik",
    title: "AFD Elektronik",
    href: "https://afdelektronik.com/",
    group: "web",
    category: "Web geliştirme",
    visual: "web",
  },
  {
    id: "huminex-website",
    title: "Huminex Website",
    href: "https://website-g69i.vercel.app/tr",
    group: "web",
    category: "Web geliştirme",
    visual: "web",
  },
  {
    id: "sebat-havalandirma",
    title: "Sebat Havalandırma",
    href: "https://sebathavalandirma.com/",
    group: "web",
    category: "Web geliştirme",
    visual: "web",
  },
  {
    id: "eke-tr",
    title: "EKE TR",
    href: "https://eketr.com/",
    group: "web",
    category: "Web geliştirme",
    visual: "web",
  },
  {
    id: "selenium-cucumber",
    title: "Selenium Cucumber Test Automation",
    href: "https://github.com/Yusufdmrc/selenium-project",
    group: "automation",
    category: "Web test otomasyonu",
    visual: "test",
    description: "Selenium ve Cucumber ile test otomasyonu projesi.",
    technologies: ["Selenium", "Cucumber"],
  },
  {
    id: "appium-test-automation",
    title: "Appium Test Automation",
    href: "https://github.com/Yusufdmrc/mlp-appium-project",
    group: "automation",
    category: "Mobil test otomasyonu",
    visual: "mobile",
    description: "Appium ile mobil test otomasyonu projesi.",
    technologies: ["Appium"],
  },
  {
    id: "postman-api-test",
    title: "Postman API Test Project",
    href: "https://github.com/Yusufdmrc/postman-api-project",
    group: "automation",
    category: "API test otomasyonu",
    visual: "api",
    description: "Postman ile API testleri için proje.",
    technologies: ["Postman", "API testleri"],
  },
] as const;

export const selectedProjectIds = [
  "tavol-turkiye",
  "afd-elektronik",
  "appium-test-automation",
] as const;
