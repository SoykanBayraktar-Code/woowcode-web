export type Language = "TR" | "EN";

export const translations = {
  TR: {
    // Navigation
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      services: "Hizmetler",
      projects: "Projelerimiz",
      blog: "Blog",
      contact: "İletişim",
    },
    
    // Hero Section
    hero: {
      badge: "Stratejik Teknoloji Ortağınız",
      badgeScalable: "Ölçeklenebilir Çözümler",
      badgeAdvantage: "Rekabet Avantajı",
      title: "Veriyi Zekaya,",
      titleHighlight: "Teknolojiyi Değere",
      titleEnd: "Dönüştürüyoruz",
      description: "Endüstriyel yapay zeka, otonom sistemler ve stratejik veri mühendisliği ile işletmenizin dijital dönüşümünü hızlandırıyoruz. Karmaşık problemlere zarif çözümler.",
      ctaServices: "Hizmetlerimizi İncele",
      ctaConsultation: "Ücretsiz Danışmanlık",
      scrollText: "Daha Fazlasını Keşfet",
      stats: {
        projects: "Tamamlanan Proje",
        clients: "Kurumsal Müşteri",
        uptime: "Uptime Garantisi",
        support: "Teknik Destek",
      },
    },
    
    // Services Section
    services: {
      badge: "Hizmetlerimiz",
      title: "Teknoloji",
      titleHighlight: "Çözümlerimiz",
      description: "Her sektöre özel, ölçeklenebilir ve sürdürülebilir teknoloji çözümleri sunuyoruz.",
      viewDetails: "Detayları İncele",
      items: {
        "autonomous-drones": {
          title: "Otonom Drone Sistemleri",
          description: "Gökyüzünden veri toplamak, erişilmesi güç alanlara ulaşmak ve geniş bölgeleri dakikalar içinde taramak artık hayal değil.",
          features: ["Gerçek zamanlı izleme", "AI destekli analiz", "Otomatik raporlama"],
        },
        "industrial-ai": {
          title: "Endüstriyel AI Eğitimi",
          description: "Makinelerin görmesini, anlamasını ve karar vermesini sağlayın. Yapay zeka işinizi dönüştürecek güce sahip bir araç.",
          features: ["Özel model geliştirme", "Transfer learning", "Edge deployment"],
        },
        "data-engineering": {
          title: "Stratejik Veri Mühendisliği",
          description: "Dağınık verilerinizi anlamlı içgörülere dönüştürün. Her veri noktası bir hikaye anlatır.",
          features: ["ETL pipeline", "Data warehouse", "Real-time analytics"],
        },
        "digital-twin": {
          title: "Dijital İkiz ve İş Akışı Dijitalleştirme",
          description: "Gerçek dünyanın birebir dijital kopyasını oluşturun. Değişiklikleri önce sanal ortamda test edin.",
          features: ["3D modelleme", "Simülasyon", "Süreç optimizasyonu"],
        },
        "saas-development": {
          title: "SaaS Ürün Geliştirme",
          description: "Fikrinizi pazara en hızlı şekilde taşıyın. Ölçeklenebilir altyapı, güvenli mimari.",
          features: ["Cloud-native", "Microservices", "CI/CD otomasyonu"],
        },
        "iot-automation": {
          title: "IoT ve Endüstriyel Otomasyon",
          description: "Makineleriniz artık birbiriyle konuşsun. Sensörlerden buluta, uçtan uca çözümler.",
          features: ["Sensör entegrasyonu", "Edge computing", "SCADA sistemleri"],
        },
        "mobile-web-apps": {
          title: "Mobil & Web Uygulama",
          description: "iOS, Android ve web platformları için modern, kullanıcı odaklı uygulamalar geliştiriyoruz.",
          features: ["Cross-platform", "Responsive tasarım", "API entegrasyonu"],
        },
      },
    },
    
    // Blog Preview
    blog: {
      badge: "Blog",
      title: "Son",
      titleHighlight: "Yazılarımız",
      description: "Teknoloji dünyasındaki gelişmeleri, sektör trendlerini ve projelerimizden edindiğimiz deneyimleri paylaşıyoruz.",
      viewAll: "Tüm Yazıları Gör",
      readTime: "okuma",
    },
    
    // Footer
    footer: {
      description: "Veriyi zekaya, teknolojiyi değere dönüştürüyoruz. Endüstriyel yapay zeka ve dijital dönüşüm çözümleri.",
      quickLinks: "Hızlı Bağlantılar",
      services: "Hizmetlerimiz",
      contact: "İletişim",
      allRightsReserved: "Tüm hakları saklıdır.",
      companyInfo: {
        title: "WOOWCODE YAZILIM ve TİCARET A.Ş.",
        taxNo: "Vergi No",
        address: "Şirinyalı Mah. İsmet Gökşen Cad.\nÖzdilek AVM, E Blok, K:9, D:37\nMuratpaşa / Antalya",
      },
    },
    
    // Contact Page
    contact: {
      hero: {
        badge: "7/24 Yanıtlıyoruz",
        title: "Bizimle",
        titleHighlight: "İletişime Geçin",
        description: "Projeleriniz, sorularınız veya iş birliği teklifleriniz için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.",
      },
      form: {
        title: "İletişim Formu",
        firstName: "İsim",
        lastName: "Soyisim",
        name: "Ad Soyad",
        email: "E-posta",
        phone: "Telefon",
        subject: "Konu",
        selectSubject: "Proje türü seçin",
        message: "Açıklama",
        messagePlaceholder: "Projeniz hakkında detaylı bilgi verin...",
        send: "Mesaj Gönder",
        sending: "Gönderiliyor...",
        success: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
        error: "Bir hata oluştu. Lütfen tekrar deneyin.",
        subjects: {
          general: "Genel Bilgi",
          consultation: "Ücretsiz Danışmanlık",
          project: "Proje Teklifi",
          partnership: "İş Birliği",
          support: "Teknik Destek",
          consultancy: "Danışmanlık",
          other: "Diğer",
        },
        validation: {
          firstNameRequired: "İsim alanı zorunludur",
          lastNameRequired: "Soyisim alanı zorunludur",
          emailRequired: "E-posta alanı zorunludur",
          emailInvalid: "Geçerli bir e-posta adresi giriniz",
          phoneRequired: "Telefon alanı zorunludur",
          phoneInvalid: "Geçerli bir telefon numarası giriniz",
          subjectRequired: "Konu alanı zorunludur",
          messageRequired: "Açıklama alanı zorunludur",
          messageMin: "Açıklama en az 20 karakter olmalıdır",
        },
      },
      info: {
        title: "Şirket Bilgileri",
        companyTitle: "Şirket Ünvanı",
        companyName: "WOOWCODE YAZILIM ve TİCARET A.Ş.",
        taxNo: "Vergi Numarası",
        address: "Adres",
        addressLine: "Şirinyalı Mah. 1533. Sokak No:49/2\nMuratpaşa/Antalya\nTürkiye",
        quickResponse: "Hızlı Yanıt",
        quickResponseDesc: "24 saat içinde dönüş",
        workingHours: "Çalışma Saatleri",
        workingHoursDesc: "Pazartesi - Cuma: 09:00 - 18:00",
      },
    },
    
    // About Page
    about: {
      hero: {
        badge: "Hakkımızda",
        title: "Teknolojiyle Geleceği",
        titleHighlight: "Şekillendiriyoruz",
        description: "WOOWCODE, kurumsal teknoloji çözümleri alanında faaliyet gösteren, yenilikçi ve çözüm odaklı bir teknoloji şirketidir. Endüstriyel yapay zeka, otonom sistemler ve dijital dönüşüm projelerinde işletmelere stratejik değer katıyoruz.",
        features: ["Kurumsal Çözüm Ortağı", "Uçtan Uca Destek", "Yenilikçi Yaklaşım"],
      },
      mission: {
        title: "Misyonumuz",
        description: "İşletmelerin dijital dönüşüm yolculuğunda güvenilir teknoloji ortağı olmak. Yapay zeka, otonom sistemler ve ileri veri analitiği çözümlerimizle müşterilerimizin operasyonel verimliliğini artırmak, maliyetlerini düşürmek ve rekabet avantajlarını güçlendirmek.",
        items: [
          "Karmaşık iş problemlerine yenilikçi çözümler sunmak",
          "Veri odaklı karar alma süreçlerini desteklemek",
          "Ölçeklenebilir ve sürdürülebilir teknolojiler geliştirmek",
        ],
      },
      vision: {
        title: "Vizyonumuz",
        description: "Türkiye'nin ve bölgenin en güvenilir endüstriyel teknoloji çözüm ortağı olmak. Geliştirdiğimiz yapay zeka ve otonom sistemlerle global pazarda söz sahibi bir teknoloji şirketi konumuna ulaşmak ve sektöre yön veren inovasyonlar üretmek.",
        items: [
          "Bölgesel liderlikten global etkiye",
          "Sürekli Ar-Ge ve inovasyon odaklı büyüme",
          "Endüstri standartlarını belirleyen çözümler",
        ],
      },
      story: {
        title: "Hikayemiz",
        description: "WOOWCODE, teknoloji tutkunu bir ekip tarafından 2024 yılında kuruldu. Amacımız, işletmelerin dijital dünyada rekabet gücünü artıracak yenilikçi çözümler sunmak ve Türkiye'nin teknoloji ihracatına katkıda bulunmak.",
        description2: "Kuruluşumuzdan bu yana, farklı sektörlerden onlarca kurumsal müşteriye hizmet verdik, yapay zeka tabanlı projeler geliştirdik ve dijital dönüşüm süreçlerinde rehberlik ettik.",
      },
      values: {
        title: "Temel Değerlerimiz",
        subtitle: "Çalışma kültürümüzü ve müşteri ilişkilerimizi şekillendiren ilkeler",
        items: [
          { title: "Yenilikçilik", description: "Sürekli öğrenme ve araştırma kültürümüzle en güncel teknolojileri takip ediyor, müşterilerimize yenilikçi çözümler sunuyoruz." },
          { title: "Güvenilirlik", description: "Şeffaf iletişim, zamanında teslimat ve kalite odaklı yaklaşımımızla uzun vadeli iş ortaklıkları kuruyoruz." },
          { title: "İşbirliği", description: "Müşterilerimizi iş ortağımız olarak görüyor, birlikte düşünüyor, birlikte üretiyor ve başarıyı paylaşıyoruz." },
          { title: "Çeviklik", description: "Değişen ihtiyaçlara hızlı adapte olabilen esnek yapımızla projeleri zamanında ve bütçe dahilinde teslim ediyoruz." },
          { title: "Sonuç Odaklılık", description: "Her projede somut ve ölçülebilir sonuçlar hedefliyor, müşterilerimize gerçek değer katmayı önceliklendiriyoruz." },
          { title: "Sürekli Gelişim", description: "Ar-Ge yatırımlarımız ve ekip eğitimlerimizle teknolojik yetkinliklerimizi sürekli geliştiriyor ve genişletiyoruz." },
        ],
      },
      cta: {
        title: "Projenizi Birlikte Hayata Geçirelim",
        description: "Dijital dönüşüm yolculuğunuzda yanınızda olmak istiyoruz. İhtiyaçlarınızı anlayalım ve size özel çözümler geliştirelim.",
        button: "İletişime Geçin",
      },
      team: {
        title: "Ekibimiz &",
        titleHighlight: "Uzmanlık Alanlarımız",
        description: "Deneyimli mühendisler ve uzmanlardan oluşan ekibimizle en karmaşık teknoloji projelerini hayata geçiriyoruz",
        stats: {
          projects: "Tamamlanan Proje",
          clients: "Kurumsal Müşteri",
          team: "Uzman Ekip",
          experience: "Yıllık Deneyim",
        },
        expertise: {
          ai: { title: "Yapay Zeka & ML", skills: ["Computer Vision", "NLP", "Predictive Analytics", "Deep Learning"] },
          data: { title: "Veri Mühendisliği", skills: ["ETL/ELT", "Data Warehouse", "Real-time Analytics", "BI"] },
          autonomous: { title: "Otonom Sistemler", skills: ["Drone Yazılımı", "Robotik", "Edge AI", "Kontrol Sistemleri"] },
          software: { title: "Yazılım Geliştirme", skills: ["SaaS", "API Geliştirme", "Cloud Native", "DevOps"] },
        },
        philosophy: {
          quote: "Teknoloji sadece bir araçtır. Asıl değer, onu doğru problemi çözmek için kullanan insan zekası ve deneyimindedir.",
          author: "WOOWCODE Ekip Felsefesi",
        },
      },
    },
    
    // Services Page
    servicesPage: {
      hero: {
        badge: "Kapsamlı Teknoloji Çözümleri",
        title: "İşinizi",
        titleHighlight: "Geleceğe",
        titleEnd: "Taşıyan Hizmetler",
        description: "En son teknolojileri kullanarak işletmenizin dijital dönüşümünü gerçekleştiriyoruz. Her projede yenilikçi çözümler, ölçeklenebilir sistemler ve uzun vadeli başarı için stratejik ortaklık sunuyoruz.",
      },
      cta: {
        title: "Projenizi",
        titleHighlight: "Hayata Geçirelim",
        description: "İhtiyaçlarınızı dinlemek ve size özel çözümler sunmak için sabırsızlanıyoruz. İlk adımı atın, birlikte büyük işler başaralım.",
        button: "Bizimle İletişime Geçin",
        stats: {
          projects: "Tamamlanan Proje",
          expertise: "Uzmanlık Alanı",
          satisfaction: "Müşteri Memnuniyeti",
          support: "Teknik Destek",
        },
      },
      process: {
        title: "Nasıl",
        titleHighlight: "Çalışıyoruz?",
        description: "Projelerinizi başarıya taşımak için izlediğimiz sistematik süreç",
        steps: [
          { step: "01", title: "Keşif & Analiz", description: "İhtiyaçlarınızı derinlemesine analiz ediyor, mevcut süreçlerinizi inceliyor ve hedeflerinizi belirliyoruz." },
          { step: "02", title: "Strateji & Planlama", description: "Veriye dayalı bir strateji oluşturuyor, teknoloji yol haritası çıkarıyor ve proje planını hazırlıyoruz." },
          { step: "03", title: "Geliştirme & Test", description: "Agile metodoloji ile iteratif geliştirme yapıyor, sürekli test ve kalite kontrol uyguluyoruz." },
          { step: "04", title: "Uygulama & Entegrasyon", description: "Çözümü mevcut sistemlerinize sorunsuz entegre ediyor, kullanıcı eğitimlerini tamamlıyoruz." },
          { step: "05", title: "Destek & Optimizasyon", description: "7/24 teknik destek sağlıyor, performans izliyor ve sürekli iyileştirmeler yapıyoruz." },
        ],
      },
      getQuote: "Teklif Al",
      useCases: "Kullanım Alanları",
      capabilities: "Yetenekler",
      detailedServices: {
        "autonomous-drones": {
          title: "Otonom Drone Sistemleri",
          shortDescription: "Gökyüzünden veri toplamak, erişilmesi güç alanlara ulaşmak ve geniş bölgeleri dakikalar içinde taramak artık hayal değil.",
          longDescription: "Drone teknolojisi ile fiziksel sınırları aşın. Havadan veri toplama, haritalama ve izleme sistemlerimiz ile operasyonlarınızı bir üst seviyeye taşıyın. İnsan gücüyle yapılması saatler sürecek işleri dakikalara indirin.",
          features: ["Gerçek zamanlı izleme", "AI destekli analiz", "Otomatik raporlama"],
          capabilities: [
            { title: "Havadan Haritalama", description: "Geniş alanları yüksek çözünürlüklü görüntülerle haritalayın" },
            { title: "Termal Görüntüleme", description: "Isı haritaları ile görünmeyen sorunları tespit edin" },
            { title: "3D Modelleme", description: "Arazilerin ve yapıların detaylı 3D modellerini oluşturun" },
            { title: "Otonom Uçuş", description: "Önceden programlanmış rotalarla tamamen otonom operasyonlar" },
          ],
          useCases: ["İnşaat sahası takibi", "Tarımsal analiz", "Enerji hattı denetimi", "Arama kurtarma operasyonları"],
        },
        "industrial-ai": {
          title: "Endüstriyel AI Eğitimi",
          shortDescription: "Makinelerin görmesini, anlamasını ve karar vermesini sağlayın.",
          longDescription: "Yapay zeka artık sadece büyük teknoloji şirketlerinin değil, her işletmenin ulaşabileceği bir güç. Verilerinizi akıllı kararlara dönüştüren özel AI modelleri geliştiriyoruz.",
          features: ["Özel model geliştirme", "Transfer learning", "Edge deployment"],
          capabilities: [
            { title: "Bilgisayarlı Görü", description: "Görüntülerden otomatik analiz ve karar alma" },
            { title: "Doğal Dil İşleme", description: "Metinleri anlayan ve yanıtlayan sistemler" },
            { title: "Tahminleme Modelleri", description: "Gelecekteki trendleri öngören algoritmalar" },
            { title: "Anomali Tespiti", description: "Olağandışı durumları anında tespit eden sistemler" },
          ],
          useCases: ["Kalite kontrol otomasyonu", "Müşteri davranış analizi", "Bakım tahmini", "Süreç optimizasyonu"],
        },
        "data-engineering": {
          title: "Stratejik Veri Mühendisliği",
          shortDescription: "Dağınık verilerinizi anlamlı içgörülere dönüştürün.",
          longDescription: "Veri, 21. yüzyılın en değerli kaynağı. Ancak ham veri tek başına anlamsız. Biz verilerinizi temizler, yapılandırır ve işinizi büyütecek içgörülere dönüştürürüz.",
          features: ["ETL pipeline", "Data warehouse", "Real-time analytics"],
          capabilities: [
            { title: "Veri Entegrasyonu", description: "Farklı kaynaklardan gelen verileri birleştirin" },
            { title: "Gerçek Zamanlı Analitik", description: "Anlık kararlar için canlı veri akışları" },
            { title: "Veri Görselleştirme", description: "Karmaşık verileri anlaşılır görsellere dönüştürün" },
            { title: "Veri Kalitesi", description: "Temiz ve güvenilir veri altyapısı" },
          ],
          useCases: ["İş zekası raporları", "Performans takibi", "Müşteri segmentasyonu", "Finansal analiz"],
        },
        "digital-twin": {
          title: "Dijital İkiz ve İş Akışı Dijitalleştirme",
          shortDescription: "Gerçek dünyanın birebir dijital kopyasını oluşturun.",
          longDescription: "Fiziksel varlıklarınızın ve süreçlerinizin dijital ikizlerini oluşturun. Değişiklikleri önce sanal ortamda test edin, riskleri minimize edin ve optimum çözümleri keşfedin.",
          features: ["3D modelleme", "Simülasyon", "Süreç optimizasyonu"],
          capabilities: [
            { title: "Sanal Simülasyon", description: "Gerçek dünya senaryolarını sanal ortamda test edin" },
            { title: "Süreç Modelleme", description: "İş akışlarınızı görselleştirin ve optimize edin" },
            { title: "Performans İzleme", description: "Gerçek zamanlı performans karşılaştırmaları" },
            { title: "Senaryo Analizi", description: "Farklı senaryoların etkilerini önceden görün" },
          ],
          useCases: ["Fabrika optimizasyonu", "Şehir planlaması", "Bina yönetimi", "Lojistik simülasyonu"],
        },
        "saas-development": {
          title: "SaaS Ürün Geliştirme",
          shortDescription: "Fikrinizi milyonlara ulaşan bir ürüne dönüştürün.",
          longDescription: "Bulut tabanlı yazılım çözümleri ile işinizi ölçeklendirin. Modern mimari, güvenli altyapı ve kullanıcı odaklı tasarım ile rakiplerinizden bir adım önde olun.",
          features: ["Microservices", "Auto-scaling", "Multi-tenant"],
          capabilities: [
            { title: "Ölçeklenebilir Mimari", description: "Kullanıcı sayınız arttıkça büyüyen sistemler" },
            { title: "Güvenli Altyapı", description: "Kurumsal düzeyde güvenlik standartları" },
            { title: "Sürekli Entegrasyon", description: "Hızlı ve güvenli güncellemeler" },
            { title: "Global Erişim", description: "Dünyanın her yerinden kesintisiz erişim" },
          ],
          useCases: ["B2B platformları", "E-ticaret çözümleri", "CRM sistemleri", "Proje yönetim araçları"],
        },
        "iot-sensors": {
          title: "IoT & Sensör Teknolojileri",
          shortDescription: "Nesnelerinize hayat verin.",
          longDescription: "Fiziksel dünyayı dijital dünya ile buluşturun. Sensörler aracılığıyla çevrenizi izleyin, anlayın ve akıllı kararlar alan sistemler oluşturun.",
          features: ["Sensör entegrasyonu", "Edge computing", "Protokol desteği"],
          capabilities: [
            { title: "Sensör Ağları", description: "Binlerce sensörü yöneten merkezi sistemler" },
            { title: "Edge Computing", description: "Verileri kaynağında işleyen akıllı cihazlar" },
            { title: "Uzaktan İzleme", description: "Her yerden erişilebilen kontrol panelleri" },
            { title: "Otomasyon", description: "Koşullara göre otomatik tepki veren sistemler" },
          ],
          useCases: ["Akıllı fabrikalar", "Enerji yönetimi", "Çevre izleme", "Akıllı binalar"],
        },
        "mobile-web-apps": {
          title: "Mobil & Web Uygulama Geliştirme",
          shortDescription: "Fikrinizi tüm platformlarda hayata geçirin.",
          longDescription: "iOS, Android ve web platformları için modern, performanslı ve kullanıcı deneyimi odaklı uygulamalar geliştiriyoruz. Tek kod tabanıyla tüm cihazlara ulaşın.",
          features: ["Cross-platform", "Responsive", "PWA"],
          capabilities: [
            { title: "Native Performans", description: "iOS ve Android'de yerel uygulama hızında çalışır" },
            { title: "Responsive Tasarım", description: "Her ekran boyutuna uyumlu arayüzler" },
            { title: "Offline Destek", description: "Internet bağlantısı olmadan da çalışan uygulamalar" },
            { title: "Push Bildirimler", description: "Kullanıcıları anlık olarak bilgilendirin" },
          ],
          useCases: ["Kurumsal mobil uygulamalar", "E-ticaret platformları", "Müşteri sadakat uygulamaları", "Saha ekibi yönetimi"],
        },
      },
    },
    
    // Projects Page
    projectsPage: {
      hero: {
        badge: "Ar-Ge Projelerimiz",
        title: "Projelerimiz &",
        titleHighlight: "Vaka Analizleri",
        description: "Ar-Ge aşamasındaki projelerimiz ile müşterilerimizin karmaşık problemlerine nasıl yenilikçi çözümler geliştirdiğimizi keşfedin.",
        stats: {
          activeProjects: "Aktif Proje",
          successRate: "Ar-Ge Aşamasında",
          technology: "İleri Teknoloji",
        },
      },
      list: {
        title: "Vaka",
        titleHighlight: "Analizlerimiz",
        description: "Her proje, benzersiz zorlukları ve yenilikçi çözüm yaklaşımları ile Ar-Ge sürecimizin bir parçasıdır.",
      },
      labels: {
        technologies: "Kullanılan Teknolojiler",
        challenge: "Problem & Zorluk",
        features: "Temel Özellikler",
      },
      projects: {
        "cattle-feed-vision": {
          title: "Cattle Feed Vision",
          category: "Görüntü İşleme & Yapay Zeka",
          description: "Hayvancılık sektöründe beslenme süreçlerini devrim niteliğinde dönüştüren yapay görme platformu. Yem türü tanıma, hassas miktar oranlama ve günlük rasyon kontrolü ile verimlilik ve hayvan sağlığını optimize eder.",
          challenge: "Hayvancılık işletmelerinde farklı yem türlerinin doğru tanımlanması, hassas oranlarda karıştırılması ve günlük beslenme rasyonlarının doğru hazırlanıp hazırlanmadığının kontrolü uzman bağımlı ve hata payı yüksek bir süreçti.",
          technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Edge AI"],
          features: [
            "Otomatik yem türü tanıma ve sınıflandırma",
            "Hassas yem miktarı oranlama ve ölçüm",
            "Gerçek zamanlı stok takibi ve uyarı sistemi",
            "Günlük beslenme rasyonu doğrulama",
            "Kalite analizi ve taze/bayat tespiti",
            "Mobil uygulama ve bulut entegrasyonu",
          ],
        },
        "smart-waste-container": {
          title: "Akıllı Çöp Konteynırı",
          category: "IoT & Akıllı Şehir",
          description: "Belediyelerin çöp toplama operasyonlarını akıllandıran IoT tabanlı çözüm. Kamu bütçelerinde tasarruf sağlarken, çöp araçlarının gereksiz trafik yoğunluğu yaratmasını önler ve %35'e kadar yakıt-zaman tasarrufu sağlar.",
          challenge: "Belediye çöp toplama araçları sabit rotalarla çalışarak boş konteynırlara gereksiz seferler düzenliyor, bu da hem yakıt israfına hem de şehir trafiğine ek yük oluşturuyordu.",
          technologies: ["LoRaWAN", "Özel RF Protokol", "Node.js", "PostgreSQL", "React"],
          features: [
            "Ultrasonik doluluk sensörleri",
            "Düşük güç tüketimli uzun menzilli haberleşme",
            "Dinamik rota optimizasyonu ile yakıt tasarrufu",
            "Gerçek zamanlı doluluk takip paneli",
            "Trafik yoğunluğunu azaltan akıllı planlama",
            "Belediye sistemleri ile tam entegrasyon",
          ],
        },
        "guilty-detect-vision": {
          title: "Guilty Detect Vision",
          category: "AI & Güvenlik",
          description: "Derin öğrenme tabanlı görüntü işleme modeli ile güvenlik kamerası görüntülerinden şüpheli kişileri ve anormal davranışları tespit eden gelişmiş güvenlik sistemi.",
          challenge: "Güvenlik personelinin tüm kameraları eş zamanlı izlemesi imkansızdı. Şüpheli davranışlar çoğu zaman fark edilmeden geçiyor ve olaylar sonradan tespit ediliyordu.",
          technologies: ["PyTorch", "YOLO", "OpenCV", "CUDA", "FastAPI"],
          features: [
            "Gerçek zamanlı davranış analizi",
            "Yüz tanıma ve takip",
            "Anormal hareket tespiti",
            "Çoklu kamera desteği",
            "Anlık alarm ve bildirim sistemi",
          ],
        },
        "roomstyle-ai": {
          title: "RoomStyle AI",
          category: "SaaS Girişimi",
          description: "Boş oda fotoğraflarını yapay zeka ile dönüştüren SaaS platformu. Kullanıcının seçtiği iç mimari tarza göre odaya uygun mobilya yerleşimi ve dekorasyon önerileri sunar.",
          challenge: "Emlak sektöründe boş daireler potansiyel alıcılara cazip görünmüyor. Fiziksel home staging maliyetli ve zaman alıcı. Müşteriler boş mekanda yaşam alanını hayal etmekte zorlanıyor.",
          technologies: ["Generative AI", "Stable Diffusion", "ControlNet", "Deep Learning", "Computer Vision"],
          features: [
            "Tek tıkla boş oda dönüştürme",
            "10+ farklı iç mimari stil seçeneği",
            "Oda tipine özel mobilya yerleşimi",
            "Yüksek çözünürlüklü gerçekçi görseller",
            "Emlakçı ve inşaat firmaları için API",
            "Toplu görsel işleme desteği",
          ],
        },
      },
      cta: {
        title: "Sizin Projeniz",
        titleHighlight: "Bir Sonraki Başarı Hikayemiz Olabilir",
        description: "Karmaşık problemlerinize yenilikçi çözümler üretmek için sabırsızlanıyoruz. İhtiyaçlarınızı paylaşın, birlikte harika işler başaralım.",
        button: "Projenizi Konuşalım",
        features: {
          consultation: "Ücretsiz Danışmanlık",
          customSolution: "Özel Çözüm Tasarımı",
          support: "7/24 Teknik Destek",
        },
      },
    },

    // Blog Page
    blogPage: {
      hero: {
        badge: "Blog & İçgörüler",
        title: "Teknoloji",
        titleHighlight: "& İnovasyon",
        description: "Otonom sistemler, yapay zeka, dijital ikiz ve veri mühendisliği hakkında en güncel bilgiler, rehberler ve sektör analizleri.",
      },
      filters: {
        all: "Tümü",
        allPosts: "Tüm Yazılar",
        search: "Yazılarda ara...",
      },
      noResults: "Aradığınız kriterlere uygun yazı bulunamadı.",
      relatedPosts: "İlgili Yazılar",
      backToBlog: "Blog'a Dön",
      share: "Paylaş",
    },
  },
  
  EN: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    
    // Hero Section
    hero: {
      badge: "Your Strategic Technology Partner",
      badgeScalable: "Scalable Solutions",
      badgeAdvantage: "Competitive Advantage",
      title: "Transforming Data into Intelligence,",
      titleHighlight: "Technology into Value",
      titleEnd: "",
      description: "We accelerate your digital transformation with industrial AI, autonomous systems, and strategic data engineering. Elegant solutions for complex problems.",
      ctaServices: "Explore Our Services",
      ctaConsultation: "Free Consultation",
      scrollText: "Discover More",
      stats: {
        projects: "Completed Projects",
        clients: "Enterprise Clients",
        uptime: "Uptime Guarantee",
        support: "Technical Support",
      },
    },
    
    // Services Section
    services: {
      badge: "Our Services",
      title: "Technology",
      titleHighlight: "Solutions",
      description: "We provide scalable and sustainable technology solutions tailored for every industry.",
      viewDetails: "View Details",
      items: {
        "autonomous-drones": {
          title: "Autonomous Drone Systems",
          description: "Collecting data from the sky, reaching inaccessible areas, and scanning vast regions in minutes is no longer a dream.",
          features: ["Real-time monitoring", "AI-powered analysis", "Automated reporting"],
        },
        "industrial-ai": {
          title: "Industrial AI Training",
          description: "Enable machines to see, understand, and make decisions. AI is a powerful tool that will transform your business.",
          features: ["Custom model development", "Transfer learning", "Edge deployment"],
        },
        "data-engineering": {
          title: "Strategic Data Engineering",
          description: "Transform your scattered data into meaningful insights. Every data point tells a story.",
          features: ["ETL pipeline", "Data warehouse", "Real-time analytics"],
        },
        "digital-twin": {
          title: "Digital Twin & Workflow Digitalization",
          description: "Create an exact digital copy of the real world. Test changes in virtual environment first.",
          features: ["3D modeling", "Simulation", "Process optimization"],
        },
        "saas-development": {
          title: "SaaS Product Development",
          description: "Bring your idea to market as fast as possible. Scalable infrastructure, secure architecture.",
          features: ["Cloud-native", "Microservices", "CI/CD automation"],
        },
        "iot-automation": {
          title: "IoT & Industrial Automation",
          description: "Let your machines communicate with each other. End-to-end solutions from sensors to cloud.",
          features: ["Sensor integration", "Edge computing", "SCADA systems"],
        },
        "mobile-web-apps": {
          title: "Mobile & Web Apps",
          description: "We develop modern, user-centric applications for iOS, Android, and web platforms.",
          features: ["Cross-platform", "Responsive design", "API integration"],
        },
      },
    },
    
    // Blog Preview
    blog: {
      badge: "Blog",
      title: "Latest",
      titleHighlight: "Articles",
      description: "We share developments in the technology world, industry trends, and experiences from our projects.",
      viewAll: "View All Articles",
      readTime: "read",
    },
    
    // Footer
    footer: {
      description: "Transforming data into intelligence, technology into value. Industrial AI and digital transformation solutions.",
      quickLinks: "Quick Links",
      services: "Our Services",
      contact: "Contact",
      allRightsReserved: "All rights reserved.",
      companyInfo: {
        title: "WOOWCODE SOFTWARE and TRADE Inc.",
        taxNo: "Tax No",
        address: "Şirinyalı Mah. İsmet Gökşen Cad.\nÖzdilek Mall, Block E, Floor 9, No:37\nMuratpaşa / Antalya, Turkey",
      },
    },
    
    // Contact Page
    contact: {
      hero: {
        badge: "24/7 Response",
        title: "Get in",
        titleHighlight: "Touch with Us",
        description: "You can contact us for your projects, questions, or collaboration proposals. We will get back to you as soon as possible.",
      },
      form: {
        title: "Contact Form",
        firstName: "First Name",
        lastName: "Last Name",
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        selectSubject: "Select project type",
        message: "Description",
        messagePlaceholder: "Provide detailed information about your project...",
        send: "Send Message",
        sending: "Sending...",
        success: "Your message was sent successfully. We will get back to you as soon as possible.",
        error: "An error occurred. Please try again.",
        subjects: {
          general: "General Information",
          consultation: "Free Consultation",
          project: "Project Proposal",
          partnership: "Partnership",
          support: "Technical Support",
          consultancy: "Consultancy",
          other: "Other",
        },
        validation: {
          firstNameRequired: "First name is required",
          lastNameRequired: "Last name is required",
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email address",
          phoneRequired: "Phone is required",
          phoneInvalid: "Please enter a valid phone number",
          subjectRequired: "Subject is required",
          messageRequired: "Description is required",
          messageMin: "Description must be at least 20 characters",
        },
      },
      info: {
        title: "Company Information",
        companyTitle: "Company Name",
        companyName: "WOOWCODE SOFTWARE and TRADE Inc.",
        taxNo: "Tax Number",
        address: "Address",
        addressLine: "Şirinyalı Mah. 1533. Sokak No:49/2\nMuratpaşa/Antalya\nTurkey",
        quickResponse: "Quick Response",
        quickResponseDesc: "Response within 24 hours",
        workingHours: "Working Hours",
        workingHoursDesc: "Monday - Friday: 09:00 - 18:00",
      },
    },
    
    // About Page
    about: {
      hero: {
        badge: "About Us",
        title: "Shaping the Future",
        titleHighlight: "with Technology",
        description: "WOOWCODE is an innovative and solution-oriented technology company operating in the field of corporate technology solutions. We add strategic value to businesses in industrial AI, autonomous systems, and digital transformation projects.",
        features: ["Enterprise Solutions Partner", "End-to-End Support", "Innovative Approach"],
      },
      mission: {
        title: "Our Mission",
        description: "To be a trusted technology partner in businesses' digital transformation journey. To increase our customers' operational efficiency, reduce costs, and strengthen competitive advantages with our AI, autonomous systems, and advanced data analytics solutions.",
        items: [
          "Provide innovative solutions to complex business problems",
          "Support data-driven decision making processes",
          "Develop scalable and sustainable technologies",
        ],
      },
      vision: {
        title: "Our Vision",
        description: "To be the most trusted industrial technology solutions partner in Turkey and the region. To reach a position as a technology company that has a say in the global market with the AI and autonomous systems we develop and produce innovations that shape the industry.",
        items: [
          "From regional leadership to global impact",
          "Continuous R&D and innovation-focused growth",
          "Solutions that set industry standards",
        ],
      },
      story: {
        title: "Our Story",
        description: "WOOWCODE was founded in 2024 by a technology-passionate team. Our goal is to offer innovative solutions that will increase businesses' competitive power in the digital world and contribute to Turkey's technology exports.",
        description2: "Since our establishment, we have served dozens of corporate clients from different sectors, developed AI-based projects, and provided guidance in digital transformation processes.",
      },
      values: {
        title: "Our Core Values",
        subtitle: "Principles that shape our work culture and customer relationships",
        items: [
          { title: "Innovation", description: "We follow the latest technologies with our culture of continuous learning and research, offering innovative solutions to our customers." },
          { title: "Reliability", description: "We establish long-term business partnerships with our transparent communication, timely delivery, and quality-focused approach." },
          { title: "Collaboration", description: "We see our customers as our business partners, think together, produce together, and share success." },
          { title: "Agility", description: "We deliver projects on time and within budget with our flexible structure that can quickly adapt to changing needs." },
          { title: "Results-Oriented", description: "We aim for concrete and measurable results in every project, prioritizing adding real value to our customers." },
          { title: "Continuous Improvement", description: "We continuously develop and expand our technological competencies with our R&D investments and team trainings." },
        ],
      },
      cta: {
        title: "Let's Bring Your Project to Life Together",
        description: "We want to be by your side on your digital transformation journey. Let us understand your needs and develop customized solutions for you.",
        button: "Get in Touch",
      },
      team: {
        title: "Our Team &",
        titleHighlight: "Areas of Expertise",
        description: "We bring the most complex technology projects to life with our team of experienced engineers and experts",
        stats: {
          projects: "Completed Projects",
          clients: "Enterprise Clients",
          team: "Expert Team",
          experience: "Years of Experience",
        },
        expertise: {
          ai: { title: "AI & Machine Learning", skills: ["Computer Vision", "NLP", "Predictive Analytics", "Deep Learning"] },
          data: { title: "Data Engineering", skills: ["ETL/ELT", "Data Warehouse", "Real-time Analytics", "BI"] },
          autonomous: { title: "Autonomous Systems", skills: ["Drone Software", "Robotics", "Edge AI", "Control Systems"] },
          software: { title: "Software Development", skills: ["SaaS", "API Development", "Cloud Native", "DevOps"] },
        },
        philosophy: {
          quote: "Technology is just a tool. The real value lies in the human intelligence and experience that uses it to solve the right problem.",
          author: "WOOWCODE Team Philosophy",
        },
      },
    },
    
    // Services Page
    servicesPage: {
      hero: {
        badge: "Comprehensive Technology Solutions",
        title: "Services That",
        titleHighlight: "Transform",
        titleEnd: "Your Business",
        description: "We bring your business's digital transformation to life using the latest technologies. In every project, we offer innovative solutions, scalable systems, and strategic partnership for long-term success.",
      },
      cta: {
        title: "Let's Bring Your",
        titleHighlight: "Project to Life",
        description: "We're eager to listen to your needs and offer customized solutions. Take the first step, let's achieve great things together.",
        button: "Contact Us",
        stats: {
          projects: "Completed Projects",
          expertise: "Areas of Expertise",
          satisfaction: "Customer Satisfaction",
          support: "Technical Support",
        },
      },
      process: {
        title: "How We",
        titleHighlight: "Work?",
        description: "The systematic process we follow to bring your projects to success",
        steps: [
          { step: "01", title: "Discovery & Analysis", description: "We deeply analyze your needs, examine your current processes, and define your goals." },
          { step: "02", title: "Strategy & Planning", description: "We create a data-driven strategy, develop a technology roadmap, and prepare the project plan." },
          { step: "03", title: "Development & Testing", description: "We do iterative development with Agile methodology, applying continuous testing and quality control." },
          { step: "04", title: "Deployment & Integration", description: "We seamlessly integrate the solution into your existing systems and complete user training." },
          { step: "05", title: "Support & Optimization", description: "We provide 24/7 technical support, monitor performance, and make continuous improvements." },
        ],
        },
      },
      getQuote: "Get Quote",
      useCases: "Use Cases",
      capabilities: "Capabilities",
      detailedServices: {
        "autonomous-drones": {
          title: "Autonomous Drone Systems",
          shortDescription: "Collecting data from the sky, reaching inaccessible areas, and scanning vast regions in minutes is no longer a dream.",
          longDescription: "Transcend physical boundaries with drone technology. Elevate your operations with our aerial data collection, mapping, and monitoring systems. Reduce tasks that would take hours with human labor to just minutes.",
          features: ["Real-time monitoring", "AI-powered analysis", "Automated reporting"],
          capabilities: [
            { title: "Aerial Mapping", description: "Map large areas with high-resolution imagery" },
            { title: "Thermal Imaging", description: "Detect invisible problems with heat maps" },
            { title: "3D Modeling", description: "Create detailed 3D models of terrains and structures" },
            { title: "Autonomous Flight", description: "Fully autonomous operations with pre-programmed routes" },
          ],
          useCases: ["Construction site monitoring", "Agricultural analysis", "Power line inspection", "Search and rescue operations"],
        },
        "industrial-ai": {
          title: "Industrial AI Training",
          shortDescription: "Enable machines to see, understand, and make decisions.",
          longDescription: "Artificial intelligence is now a power accessible to every business, not just big tech companies. We develop custom AI models that transform your data into smart decisions.",
          features: ["Custom model development", "Transfer learning", "Edge deployment"],
          capabilities: [
            { title: "Computer Vision", description: "Automatic analysis and decision-making from images" },
            { title: "Natural Language Processing", description: "Systems that understand and respond to text" },
            { title: "Predictive Models", description: "Algorithms that forecast future trends" },
            { title: "Anomaly Detection", description: "Systems that instantly detect unusual situations" },
          ],
          useCases: ["Quality control automation", "Customer behavior analysis", "Predictive maintenance", "Process optimization"],
        },
        "data-engineering": {
          title: "Strategic Data Engineering",
          shortDescription: "Transform your scattered data into meaningful insights.",
          longDescription: "Data is the most valuable resource of the 21st century. But raw data alone is meaningless. We clean, structure, and transform your data into insights that will grow your business.",
          features: ["ETL pipeline", "Data warehouse", "Real-time analytics"],
          capabilities: [
            { title: "Data Integration", description: "Combine data from different sources" },
            { title: "Real-Time Analytics", description: "Live data streams for instant decisions" },
            { title: "Data Visualization", description: "Transform complex data into understandable visuals" },
            { title: "Data Quality", description: "Clean and reliable data infrastructure" },
          ],
          useCases: ["Business intelligence reports", "Performance tracking", "Customer segmentation", "Financial analysis"],
        },
        "digital-twin": {
          title: "Digital Twin & Workflow Digitalization",
          shortDescription: "Create an exact digital copy of the real world.",
          longDescription: "Create digital twins of your physical assets and processes. Test changes in virtual environments first, minimize risks, and discover optimal solutions.",
          features: ["3D modeling", "Simulation", "Process optimization"],
          capabilities: [
            { title: "Virtual Simulation", description: "Test real-world scenarios in virtual environments" },
            { title: "Process Modeling", description: "Visualize and optimize your workflows" },
            { title: "Performance Monitoring", description: "Real-time performance comparisons" },
            { title: "Scenario Analysis", description: "Preview the effects of different scenarios" },
          ],
          useCases: ["Factory optimization", "City planning", "Building management", "Logistics simulation"],
        },
        "saas-development": {
          title: "SaaS Product Development",
          shortDescription: "Transform your idea into a product reaching millions.",
          longDescription: "Scale your business with cloud-based software solutions. Stay ahead of your competitors with modern architecture, secure infrastructure, and user-focused design.",
          features: ["Microservices", "Auto-scaling", "Multi-tenant"],
          capabilities: [
            { title: "Scalable Architecture", description: "Systems that grow as your user base increases" },
            { title: "Secure Infrastructure", description: "Enterprise-grade security standards" },
            { title: "Continuous Integration", description: "Fast and secure updates" },
            { title: "Global Access", description: "Uninterrupted access from anywhere in the world" },
          ],
          useCases: ["B2B platforms", "E-commerce solutions", "CRM systems", "Project management tools"],
        },
        "iot-sensors": {
          title: "IoT & Sensor Technologies",
          shortDescription: "Bring your objects to life.",
          longDescription: "Connect the physical world with the digital world. Monitor, understand, and create systems that make smart decisions through sensors.",
          features: ["Sensor integration", "Edge computing", "Protocol support"],
          capabilities: [
            { title: "Sensor Networks", description: "Central systems managing thousands of sensors" },
            { title: "Edge Computing", description: "Smart devices that process data at the source" },
            { title: "Remote Monitoring", description: "Control panels accessible from anywhere" },
            { title: "Automation", description: "Systems that automatically respond to conditions" },
          ],
          useCases: ["Smart factories", "Energy management", "Environmental monitoring", "Smart buildings"],
        },
        "mobile-web-apps": {
          title: "Mobile & Web App Development",
          shortDescription: "Bring your idea to life on all platforms.",
          longDescription: "We develop modern, high-performance, user experience-focused applications for iOS, Android, and web platforms. Reach all devices with a single codebase.",
          features: ["Cross-platform", "Responsive", "PWA"],
          capabilities: [
            { title: "Native Performance", description: "Runs at native app speed on iOS and Android" },
            { title: "Responsive Design", description: "Interfaces that adapt to every screen size" },
            { title: "Offline Support", description: "Apps that work without internet connection" },
            { title: "Push Notifications", description: "Keep users informed instantly" },
          ],
          useCases: ["Enterprise mobile apps", "E-commerce platforms", "Customer loyalty apps", "Field team management"],
        },
      },
    },
    
    // Projects Page
    projectsPage: {
      hero: {
        badge: "R&D Projects",
        title: "Our Projects &",
        titleHighlight: "Case Studies",
        description: "Discover how we develop innovative solutions for our clients' complex problems through our R&D stage projects.",
        stats: {
          activeProjects: "Active Projects",
          successRate: "In R&D Stage",
          technology: "Advanced Tech",
        },
      },
      list: {
        title: "Case",
        titleHighlight: "Studies",
        description: "Each project is part of our R&D process with unique challenges and innovative solution approaches.",
      },
      labels: {
        technologies: "Technologies Used",
        challenge: "Problem & Challenge",
        features: "Key Features",
      },
      projects: {
        "cattle-feed-vision": {
          title: "Cattle Feed Vision",
          category: "Computer Vision & AI",
          description: "A revolutionary AI vision platform transforming feeding processes in the livestock industry. Optimizes efficiency and animal health through feed type recognition, precise quantity measurement, and daily ration verification.",
          challenge: "In livestock operations, accurately identifying different feed types, mixing them in precise proportions, and verifying that daily feeding rations were prepared correctly was an expert-dependent process with high error margins.",
          technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Edge AI"],
          features: [
            "Automatic feed type recognition and classification",
            "Precise feed quantity measurement and proportioning",
            "Real-time stock tracking and alert system",
            "Daily feeding ration verification",
            "Quality analysis and freshness detection",
            "Mobile app and cloud integration",
          ],
        },
        "smart-waste-container": {
          title: "Smart Waste Container",
          category: "IoT & Smart City",
          description: "An IoT-based solution that makes municipal waste collection operations smarter. Saves on public budgets while preventing garbage trucks from creating unnecessary traffic congestion, achieving up to 35% fuel and time savings.",
          challenge: "Municipal garbage trucks operated on fixed routes, making unnecessary trips to empty containers, resulting in both fuel waste and additional burden on city traffic.",
          technologies: ["LoRaWAN", "Custom RF Protocol", "Node.js", "PostgreSQL", "React"],
          features: [
            "Ultrasonic fill level sensors",
            "Long-range low power communication",
            "Dynamic route optimization for fuel savings",
            "Real-time fill level monitoring dashboard",
            "Smart scheduling to reduce traffic congestion",
            "Full integration with municipal systems",
          ],
        },
        "guilty-detect-vision": {
          title: "Guilty Detect Vision",
          category: "AI & Security",
          description: "An advanced security system that detects suspicious individuals and abnormal behaviors from security camera footage using deep learning-based image processing.",
          challenge: "It was impossible for security personnel to monitor all cameras simultaneously. Suspicious behaviors often went unnoticed and incidents were detected after the fact.",
          technologies: ["PyTorch", "YOLO", "OpenCV", "CUDA", "FastAPI"],
          features: [
            "Real-time behavior analysis",
            "Face recognition and tracking",
            "Abnormal movement detection",
            "Multi-camera support",
            "Instant alarm and notification system",
          ],
        },
        "roomstyle-ai": {
          title: "RoomStyle AI",
          category: "SaaS Startup",
          description: "A SaaS platform that transforms empty room photos using AI. Provides furniture placement and decoration suggestions tailored to the user's selected interior design style.",
          challenge: "In the real estate sector, empty apartments don't appeal to potential buyers. Physical home staging is costly and time-consuming. Customers struggle to visualize living spaces in empty rooms.",
          technologies: ["Generative AI", "Stable Diffusion", "ControlNet", "Deep Learning", "Computer Vision"],
          features: [
            "One-click empty room transformation",
            "10+ different interior design style options",
            "Room type-specific furniture placement",
            "High-resolution realistic visuals",
            "API for realtors and construction companies",
            "Batch image processing support",
          ],
        },
      },
      cta: {
        title: "Your Project Could Be",
        titleHighlight: "Our Next Success Story",
        description: "We're eager to create innovative solutions for your complex problems. Share your needs with us, and let's achieve great things together.",
        button: "Let's Discuss Your Project",
        features: {
          consultation: "Free Consultation",
          customSolution: "Custom Solution Design",
          support: "24/7 Technical Support",
        },
      },
    },

    // Blog Page
    blogPage: {
      hero: {
        badge: "Blog & Insights",
        title: "Technology",
        titleHighlight: "& Innovation",
        description: "Latest information, guides, and industry analyses on autonomous systems, artificial intelligence, digital twins, and data engineering.",
      },
      filters: {
        all: "All",
        allPosts: "All Posts",
        search: "Search posts...",
      },
      noResults: "No posts found matching your criteria.",
      relatedPosts: "Related Posts",
      backToBlog: "Back to Blog",
      share: "Share",
    },
  },
};

export type Translations = typeof translations.TR;
