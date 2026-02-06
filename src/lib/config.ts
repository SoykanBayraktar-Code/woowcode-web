// Site Configuration
export const siteConfig = {
  name: "WOOWCODE",
  description: "Veriyi Zekaya, Teknolojiyi Değere Dönüştürüyoruz. Endüstriyel yapay zeka, otonom sistemler ve dijital dönüşüm çözümleri.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://woowcode.com",
  ogImage: "/og-image.jpg",
  links: {
    linkedin: "https://linkedin.com/company/woowcode",
    github: "https://github.com/woowcode",
    twitter: "https://twitter.com/woowcode",
  },
  contact: {
    email: "info@woowcode.com",
    phone: "+90 XXX XXX XX XX",
  },
};

// Services Data
export const services = [
  {
    id: "autonomous-drones",
    title: "Otonom Drone Sistemleri",
    description: "Gökyüzünden veri toplamak, erişilmesi güç alanlara ulaşmak ve geniş bölgeleri dakikalar içinde taramak artık hayal değil. Drone'lar sizin için uçar, analiz eder ve raporlar.",
    icon: "drone",
    features: ["Gerçek zamanlı izleme", "AI destekli analiz", "Otomatik raporlama"],
  },
  {
    id: "industrial-ai",
    title: "Endüstriyel AI Eğitimi",
    description: "Makinelerin görmesini, anlamasını ve karar vermesini sağlayın. Yapay zeka artık bilim kurgu değil; işinizi dönüştürecek güce sahip bir araç.",
    icon: "brain",
    features: ["Özel model geliştirme", "Transfer learning", "Edge deployment"],
  },
  {
    id: "data-engineering",
    title: "Stratejik Veri Mühendisliği",
    description: "Dağınık verilerinizi anlamlı içgörülere dönüştürün. Her veri noktası bir hikaye anlatır; biz bu hikayeyi sizin için çözüyoruz.",
    icon: "database",
    features: ["ETL pipeline", "Data warehouse", "Real-time analytics"],
  },
  {
    id: "digital-twin",
    title: "Dijital İkiz ve İş Akışı Dijitalleştirme",
    description: "Gerçek dünyanın birebir dijital kopyasını oluşturun. Değişiklikleri önce sanal ortamda test edin, sonra güvenle uygulayın.",
    icon: "twin",
    features: ["3D modelleme", "Simülasyon", "Süreç optimizasyonu"],
  },
  {
    id: "saas-development",
    title: "SaaS Ürün Geliştirme",
    description: "Fikrinizi milyonlara ulaşan bir ürüne dönüştürün. Bulutta çalışan, her yerden erişilebilen ve sürekli büyüyen yazılımlar inşa ediyoruz.",
    icon: "cloud",
    features: ["Microservices", "Auto-scaling", "Multi-tenant"],
  },
  {
    id: "iot-sensors",
    title: "IoT & Sensör Teknolojileri",
    description: "Nesnelerinize hayat verin. Sensörler aracılığıyla çevrenizi dinleyin, anlayın ve akıllı kararlar almasını sağlayın.",
    icon: "sensor",
    features: ["Sensör entegrasyonu", "Edge computing", "Protokol desteği"],
  },
];

// Navigation
export const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetler", href: "/services" },
  { name: "Hakkımızda", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/contact" },
];

// Detailed Services Data
export const detailedServices = [
  {
    id: "autonomous-drones",
    title: "Otonom Drone Sistemleri",
    shortDescription: "Gökyüzünden veri toplamak, erişilmesi güç alanlara ulaşmak ve geniş bölgeleri dakikalar içinde taramak artık hayal değil.",
    longDescription: "Drone teknolojisi ile fiziksel sınırları aşın. Havadan veri toplama, haritalama ve izleme sistemlerimiz ile operasyonlarınızı bir üst seviyeye taşıyın. İnsan gücüyle yapılması saatler sürecek işleri dakikalara indirin.",
    icon: "drone",
    features: ["Gerçek zamanlı izleme", "AI destekli analiz", "Otomatik raporlama"],
    capabilities: [
      { title: "Havadan Haritalama", description: "Geniş alanları yüksek çözünürlüklü görüntülerle haritalayın" },
      { title: "Termal Görüntüleme", description: "Isı haritaları ile görünmeyen sorunları tespit edin" },
      { title: "3D Modelleme", description: "Arazilerin ve yapıların detaylı 3D modellerini oluşturun" },
      { title: "Otonom Uçuş", description: "Önceden programlanmış rotalarla tamamen otonom operasyonlar" },
    ],
    useCases: ["İnşaat sahası takibi", "Tarımsal analiz", "Enerji hattı denetimi", "Arama kurtarma operasyonları"],
  },
  {
    id: "industrial-ai",
    title: "Endüstriyel AI Eğitimi",
    shortDescription: "Makinelerin görmesini, anlamasını ve karar vermesini sağlayın.",
    longDescription: "Yapay zeka artık sadece büyük teknoloji şirketlerinin değil, her işletmenin ulaşabileceği bir güç. Verilerinizi akıllı kararlara dönüştüren özel AI modelleri geliştiriyoruz.",
    icon: "brain",
    features: ["Özel model geliştirme", "Transfer learning", "Edge deployment"],
    capabilities: [
      { title: "Bilgisayarlı Görü", description: "Görüntülerden otomatik analiz ve karar alma" },
      { title: "Doğal Dil İşleme", description: "Metinleri anlayan ve yanıtlayan sistemler" },
      { title: "Tahminleme Modelleri", description: "Gelecekteki trendleri öngören algoritmalar" },
      { title: "Anomali Tespiti", description: "Olağandışı durumları anında tespit eden sistemler" },
    ],
    useCases: ["Kalite kontrol otomasyonu", "Müşteri davranış analizi", "Bakım tahmini", "Süreç optimizasyonu"],
  },
  {
    id: "data-engineering",
    title: "Stratejik Veri Mühendisliği",
    shortDescription: "Dağınık verilerinizi anlamlı içgörülere dönüştürün.",
    longDescription: "Veri, 21. yüzyılın en değerli kaynağı. Ancak ham veri tek başına anlamsız. Biz verilerinizi temizler, yapılandırır ve işinizi büyütecek içgörülere dönüştürürüz.",
    icon: "database",
    features: ["ETL pipeline", "Data warehouse", "Real-time analytics"],
    capabilities: [
      { title: "Veri Entegrasyonu", description: "Farklı kaynaklardan gelen verileri birleştirin" },
      { title: "Gerçek Zamanlı Analitik", description: "Anlık kararlar için canlı veri akışları" },
      { title: "Veri Görselleştirme", description: "Karmaşık verileri anlaşılır görsellere dönüştürün" },
      { title: "Veri Kalitesi", description: "Temiz ve güvenilir veri altyapısı" },
    ],
    useCases: ["İş zekası raporları", "Performans takibi", "Müşteri segmentasyonu", "Finansal analiz"],
  },
  {
    id: "digital-twin",
    title: "Dijital İkiz ve İş Akışı Dijitalleştirme",
    shortDescription: "Gerçek dünyanın birebir dijital kopyasını oluşturun.",
    longDescription: "Fiziksel varlıklarınızın ve süreçlerinizin dijital ikizlerini oluşturun. Değişiklikleri önce sanal ortamda test edin, riskleri minimize edin ve optimum çözümleri keşfedin.",
    icon: "twin",
    features: ["3D modelleme", "Simülasyon", "Süreç optimizasyonu"],
    capabilities: [
      { title: "Sanal Simülasyon", description: "Gerçek dünya senaryolarını sanal ortamda test edin" },
      { title: "Süreç Modelleme", description: "İş akışlarınızı görselleştirin ve optimize edin" },
      { title: "Performans İzleme", description: "Gerçek zamanlı performans karşılaştırmaları" },
      { title: "Senaryo Analizi", description: "Farklı senaryoların etkilerini önceden görün" },
    ],
    useCases: ["Fabrika optimizasyonu", "Şehir planlaması", "Bina yönetimi", "Lojistik simülasyonu"],
  },
  {
    id: "saas-development",
    title: "SaaS Ürün Geliştirme",
    shortDescription: "Fikrinizi milyonlara ulaşan bir ürüne dönüştürün.",
    longDescription: "Bulut tabanlı yazılım çözümleri ile işinizi ölçeklendirin. Modern mimari, güvenli altyapı ve kullanıcı odaklı tasarım ile rakiplerinizden bir adım önde olun.",
    icon: "cloud",
    features: ["Microservices", "Auto-scaling", "Multi-tenant"],
    capabilities: [
      { title: "Ölçeklenebilir Mimari", description: "Kullanıcı sayınız arttıkça büyüyen sistemler" },
      { title: "Güvenli Altyapı", description: "Kurumsal düzeyde güvenlik standartları" },
      { title: "Sürekli Entegrasyon", description: "Hızlı ve güvenli güncellemeler" },
      { title: "Global Erişim", description: "Dünyanın her yerinden kesintisiz erişim" },
    ],
    useCases: ["B2B platformları", "E-ticaret çözümleri", "CRM sistemleri", "Proje yönetim araçları"],
  },
  {
    id: "iot-sensors",
    title: "IoT & Sensör Teknolojileri",
    shortDescription: "Nesnelerinize hayat verin.",
    longDescription: "Fiziksel dünyayı dijital dünya ile buluşturun. Sensörler aracılığıyla çevrenizi izleyin, anlayın ve akıllı kararlar alan sistemler oluşturun.",
    icon: "sensor",
    features: ["Sensör entegrasyonu", "Edge computing", "Protokol desteği"],
    capabilities: [
      { title: "Sensör Ağları", description: "Binlerce sensörü yöneten merkezi sistemler" },
      { title: "Edge Computing", description: "Verileri kaynağında işleyen akıllı cihazlar" },
      { title: "Uzaktan İzleme", description: "Her yerden erişilebilen kontrol panelleri" },
      { title: "Otomasyon", description: "Koşullara göre otomatik tepki veren sistemler" },
    ],
    useCases: ["Akıllı fabrikalar", "Enerji yönetimi", "Çevre izleme", "Akıllı binalar"],
  },
];
