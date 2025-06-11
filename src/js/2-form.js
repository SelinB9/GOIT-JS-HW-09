const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');

// Sayfa yüklendiğinde localStorage'dan veriyi almak ve forma doldurmak
//Bu fonksiyon çağrısı, sayfa yüklendiğinde formu önceki girilen verilere göre önceden doldurur.
//Yani, kullanıcı sayfayı yenilerse veya tekrar gelirse, yazdıkları veriler kaybolmaz, tekrar görünür olur.
//Görevdeki bu isteği karşılar "Sayfa yüklendiğinde depo durumunu kontrol et, eğer kayıtlı veri varsa, form alanlarını bu verilerle doldur."
populateForm();
form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);

function onFormInput(evt) {
    //güncel form verisini alalım.
    const formData = {
        email: form.email.value.trim(),
        message: form.message.value.trim(),//trim boşlukları baştan ve sondan kırpar.
    };
    // localstorage e kaydedelim (json string olarak)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault(); //yeni syf açmasını önler artık öğrrendik.,

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!email || !message) {
        alert("lütfen email ve mesaj alanlarını doldurun.");
        return;
    }
    //consola nesne olarak yazdırmak
    console.log({ email, message });
    //formu temizliyelim
    form.reset();
    //localstorage den veriyi silelim.
    localStorage.removeItem(STORAGE_KEY);
}

function populateForm() { //Amacı: LocalStorage'dan daha önce kaydedilmiş form verilerini alıp formu doldurmak.
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;//Eğer savedData boş (null veya undefined) ise fonksiyon hemen sona erer (return), çünkü dolduracak veri yoktur.
  
    try {      //try bloğu açılıyor. Çünkü JSON.parse() sırasında hata çıkabilir.Bu yüzden hataya karşı koruma amaçlı.
      const { email, message } = JSON.parse(savedData);    //savedData JSON formatından gerçek bir JavaScript objesine çevriliyor (parse).
                                                           //Bu obje içinde email ve message alanları varsa bunlar destructure edilip değişkenlere atanıyor.
      if (email) form.email.value = email;   //GİRDİ VARSA ,input alanına atanır
      if (message) form.message.value = message;   //GİRDİ VARSA, textarea alanına atanır.
    } catch (error) {    //Eğer JSON.parse() veya diğer kodlarda hata olursa, buraya düşer.
      console.error("localStorage verisi okunamadı", error);
    }
  }