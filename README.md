# 170201075 Ali EKEN

cd MobilProgramlama/
npm install
npm audit fix
ionic serve

Kullanıcıların, uygulamada kayıtlı olan markalar üzerinde istek, öneri ve şikayet yapabildikleri bir uygulama. Aynı zamanda diğer kullanıcıların yorumlarına destek olabilmek için bunları da gösteren sosyalliği amaçlayan bir uygulama.
Uygulamada admin ve kullanıcılar olmak üzere iki tip giriş ve arayüz var.

İlk olarak login sayfası açılıyor. Eğer kayıt yoksa, register sayfasına gidip kayıt olunabilir. Kullanıcıları firebase firestore veritabanı ortamında tuttum.
Register işleminde aynı kullanıcı adıyla kayıt olmama kontrolünü firebase veritabanını okuyarak yaptım.

Başarılı bir şekilde giriş yapıldıktan sonra kullanıcı arayüzü açılıyor. 
Bu kısımda liste tabi açılıyor. Uygulamadaki markalar resimleriyle birlikte liste halinde ekrana basılıyor.
Üstteki text kısmından canlı bir şekilde arama yapılabiliyor. Bu kısmı input text kullanarak her bir harf girildiğinde liste yenilenecek ve tekrar basılacak şekilde ayarladım. 

İkinci tabi de mesaj olarak ayarladım.
Bu kısımda yine en yukarıda bir text var. Ancak bu kısımda resimlerle birlikte değil, sadece marka isimleri liste halinde geliyor. Listedeki bir elemanın üstüne tıklandığında text otomatik olarak tıklanan marka ismiyle doluyor.
Bu sayfa ek olarak konu texti, mesaj texti ve üç adet radyo butonu bulunmakta.
Gönder butonuna basılmasının ardından yukarıdaki elementlerin boş olup olmamasının kontrolünü yaptıktan sonra, boş değilse firebase üzerinden iki tabloya ekledim. Kullanıcıya özel tablo ve marka tablosu.

Üçüncü tabde kullanıcının kendisinin yaptığı yorumlar bulunmakta.
İlk olarak kullanıcının yaptığı yorumlar firebase'den çekiliyor.
Bir icon, bir başlık ve metin olmak üzere her liste üç kısımdan oluşuyor. İcon kısmı kullanıcının yorumunun ne durumda olduğunu gösteriyor.
Eğer alarm iconu varsa yorum bekleme halinde ve onaylanmaya gönderildi demek. Tik işaretli bir icon varsa yorum onaylandı, çarpı işareti varsa yorum bir sebepten dolayı silindi ya da iptal oldu anlamına gelmektedir.

Dördüncü tabde ise sosyal kısmı bulunmaktadır.
Burada amaçladığım şey ise diğer kullanıcıların yaptığı yorumları görebilmek ve destek olabilmek. 
Yenile butonuna basılmasının ardından firebase üzerinden yapılan tüm yorumları çekip gerekli kontrolleri yaptıktan sonra içlerinden random bir sayı üreterek en fazla on adet olacak şekilde çekip ekrana basıyorum.
Bu kısımda kullanıcının kendi yaptığı yorumları sosyal sayfasına düşürmemek için de kontrolleri yapıyorum.
Bunları bir liste halinde basıp yine en üstünde bir artı iconu koydum. Herhangi bir yorumun üzerindeki artı iconuna basılmasının ardından, kendi kullanıcı adıyla firebase üzerine ekleyip bunları geçmiş kısmına da ekliyorum.
Firebase tablo çekimlerinde bir gecikme olduğu için eklenen yorumunu görmesi için geçmiş sekmesindeki yenile butonuna basması gerekiyor.

Beşinci tabde ise bize ulaşın sayfası yaptım.
Textlerin boş kontrolünü yaptıktan sonra firebase de özel bir tablo açıp gelen mesajları bu tabloya ekliyorum.

Admin sayfasında yorum onaylama ve silme işlemleri bulunmakta.
Yenile butonuna basılmasının ardından bekleme durumunda olan bütün yorumlar admin sayfasına düşüyor.
Yine bir liste kullanarak yaptım ve başlık, kullanıcı, yorum, silme ve onaylama butonlarından oluşmakta.
Silme butonuna basılırsa, firebase üzerindeki tablolarda gerekli düzenlemeleri yaptım. Bu sayede silinen yorumları sosyal sekmesinde görülmeyecek şekilde ayarladım.
Onaylama butonuna basılırsa yorum durumu tik oluyor ve kullanıcının geçmiş sekmesinde onaylanmış şekilde görünüyor. Bu kısımda da yine firebase düzenlemeleri yaptım.

Admin kullanıcısı;
kullanıcı adı : alieken
şifre : alieken

Hali hazırda var olan kullanıcılar;
kullanıcı adı : aliee
şifre : ali

kullanıcı adı : ops
şifre : ops

kullanıcı adı : deneme
şifre : deneme
