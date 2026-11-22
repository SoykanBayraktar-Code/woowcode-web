# DocuVault Gizlilik Politikası

**Yürürlük tarihi:** 22 Kasım 2026
**Veri sorumlusu:** WOOWCODE YAZILIM ve TİCARET A.Ş., Şirinyalı Mah. 1533. Sokak No:49/2, Muratpaşa/Antalya, Türkiye
**İletişim:** info@woowcode.com

DocuVault 2.0'da hesap yoktur ve DocuVault'un belgelerini tuttuğu bir sunucusu yoktur. Belgelerin cihazında işlenir ve yalnızca senin Apple iCloud hesabında saklanır. Bu sayfanın sonunda, eski sürümü (1.x) kullananlar için geçiş dönemi bilgileri yer alır.

## 1. Topladığımız Veriler (DocuVault 2.0)

- DocuVault 2.0 senden ad, e-posta, telefon ya da şifre istemez; hesap açılmaz.
- Belgelerini, okunan metinlerini, özetlerini, Acil Durum Kartını ve imzanı göremeyiz; bunlar bize hiç gönderilmez.
- Uygulamada analitik, reklam veya çökme raporu yazılımı (SDK) yoktur; kullanım istatistiği toplamayız.
- Tek istisna 1.x'ten taşımadır (aşağıda "Eski sürümden geçiş" bölümü).
- iPhone'unda "Uygulama geliştiricileriyle paylaş" ayarı açıksa Apple, kimliğini içermeyen çökme ve performans raporlarını bize iletebilir. Bu ayarı Ayarlar → Gizlilik ve Güvenlik → Analiz ve İyileştirmeler'den yönetebilirsin.

## 2. Belgelerin Nerede Saklanır

- Belgelerin, koleksiyonların ve belge setlerin senin iCloud hesabındaki özel CloudKit veritabanında saklanır ve aynı Apple hesabıyla giriş yaptığın cihazlarına eşitlenir.
- Bu veritabanına yalnızca sen erişebilirsin; DocuVault geliştiricisi içeriğini göremez.
- iCloud'a giriş yapılmamışsa belgeler yalnızca cihazında kalır.
- Depolama, şifreleme ve veri merkezleri Apple'ın iCloud koşullarına tabidir.

## 3. Metin Tanıma ve Yapay Zekâ

- Belgedeki yazı Apple'ın Vision çerçevesiyle cihazında okunur.
- Özet, öne çıkanlar, Belgeye Sor ve yapay zekâ ile belge seti, Apple'ın cihazdaki modeliyle (Apple Intelligence) çalışır.
- Belge içeriğin hiçbir yapay zekâ sunucusuna gönderilmez ve model eğitiminde kullanılmaz.
- Çeviri, Apple'ın cihazdaki çeviri motoruyla yapılır; dil paketi ilk kullanımda Apple'dan indirilir, belge metni çeviri için sunucuya gönderilmez.

## 4. Paylaşım Linkleri ve Aile Kasası

- Güvenli link oluşturduğunda belge cihazında şifrelenir (AES-GCM) ve yalnızca şifreli hâliyle Apple CloudKit'e yüklenir.
- Şifre çözme anahtarı yalnızca linkin içindedir ("#" işaretinden sonraki kısım) ve sunucuya gönderilmez; link.woowcode.com belgeyi tarayıcıda çözer. DocuVault içeriği okuyamaz.
- Linki iptal ettiğinde ya da süresi dolduğunda, uygulama şifreli kopyayı CloudKit'ten siler (süresi dolan linkler için uygulamanın bir sonraki açılışında).
- Aile Kasası'nda yalnızca senin seçtiğin belgeler, davet ettiğin kişilerle Apple'ın iCloud paylaşımı üzerinden paylaşılır. Paylaşımı istediğin zaman durdurabilirsin.

## 5. Cihazında Kalan Bilgiler

- Acil Durum Kartı iPhone'unda ve eşlenmiş Apple Watch'ında saklanır; DocuVault onu iCloud'a eşitlemez (iPhone'unun iCloud yedeği açıksa, cihaz yedeğinin bir parçası olarak şifreli biçimde yedeklenir).
- İmzan yalnızca bu cihazda saklanır, iCloud'a ve cihaz yedeklerine dahil edilmez.
- Hatırlatma bildirimleri cihazında planlanır; bildirim sunucusu kullanılmaz.
- Şifreli yedek dosyası senin belirlediğin parolayla cihazında şifrelenir ve senin seçtiğin yere kaydedilir; parolanı bilmeyiz ve kurtaramayız.

## 6. Abonelik

- Plus satın alımları Apple tarafından işlenir; ödeme bilgilerine erişimimiz yoktur.
- Ücretsiz plan kullanım sayaçları (örneğin bu ay sorulan soru sayısı) iCloud anahtar-değer deposunda tutulur; belge içeriği içermez.

## 7. Reklam ve İzleme

- Reklam göstermeyiz, reklam SDK'sı kullanmayız ve seni uygulamalar ya da web siteleri arasında izlemeyiz.
- Reklam kimliği (IDFA) talep etmeyiz; verilerini satmayız ve kimseyle paylaşmayız.

## 8. Verilerini Silmek

- Uygulamada sildiğin belge, iCloud üzerinden tüm cihazlarından da silinir ve o belgeyle oluşturduğun paylaşım linkleri iptal edilir.
- Tüm DocuVault verilerini silmek için: iPhone Ayarlar → Adın → iCloud → Depolamayı Yönet → DocuVault → Verileri Sil.
- Uygulamayı silmek cihazdaki verileri kaldırır; iCloud'daki veriler yukarıdaki adımla silinir.

## 9. Eski Sürümden (1.x) Geçiş

- DocuVault 1.x, belgeleri kendi sunucumuzda (Supabase, AB) saklıyordu ve e-postayla ya da Apple ile Giriş ile hesap kullanıyordu.
- 2.0'da "Eski hesaptan aktar" ile belgelerini bir kez taşıyabilirsin. Bu sırada e-posta ve şifren (ya da Apple ile Giriş bilgin) yalnızca eski sunucuya giriş için kullanılır; uygulama bunları saklamaz ve bize yeni veri gönderilmez.
- Hâlâ 1.x kullanıyorsan: 1.x e-posta adresini ve belgelerini bu sunucuda saklar; yapay zekâ özetleri için belge metninin bir kısmını üçüncü taraf bir yapay zekâ servisine (Google Gemini) gönderir; anonim kullanım ve çökme verisi (PostHog, Sentry) toplar; abonelikleri RevenueCat üzerinden doğrular.
- Eski sunucu, 2.0'ın yayınlanmasından yaklaşık 90 gün sonra kapatılacak ve üzerindeki tüm veriler silinecektir. Tarih uygulamada ve bu sayfada duyurulur.
- 1.x hesabının ve verilerinin daha önce silinmesini istersen info@woowcode.com adresine yaz.

## 10. KVKK ve GDPR Haklarınız

- Kişisel verilerinin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltme, silme ve işlemeye itiraz etme haklarına sahipsin.
- DocuVault 2.0'da senden kişisel veri tutmadığımız için bu talepler çoğunlukla 1.x verileriyle ilgilidir.
- Veri sorumlusu: WOOWCODE YAZILIM ve TİCARET A.Ş., Şirinyalı Mah. 1533. Sokak No:49/2, Muratpaşa / Antalya / Türkiye.
- Haklarını kullanmak için info@woowcode.com adresinden bize ulaş.

## 11. Web Sitesi ve Çerezler

- Uygulama çerez kullanmaz.
- Bu web sitesi, hizmet kalitesi için temel düzeyde analitik ve hata raporlama kullanabilir.
- link.woowcode.com paylaşım sayfası belgeyi tarayıcında çözer ve içeriğini kaydetmez.

## 12. Politika Değişiklikleri

- Bu politika zaman zaman güncellenebilir; güncel tarih sayfanın başında yer alır.
- Önemli değişiklikler uygulamada ve bu sayfada duyurulur.
