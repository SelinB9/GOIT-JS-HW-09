
// gude
// Kullanılacak kısmın import edilmesi
import SimpleLightbox from "simplelightbox";
// Ek stillerin eklenmesi
import "simplelightbox/dist/simple-lightbox.min.css";
//gude
/*preview — galeri kartı için resmin küçük bir versiyonuna bağlantı
original — modal pencere için görüntünün büyük bir versiyonuna bağlantı
description — küçük resmin alt niteliği ve modaldeki büyük resmin başlığı için resmin metin açıklaması.
2 Görüntü dizisi oluşturma aşaması */

const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
  
  const container = document.querySelector(".gallery");  //container ismiyle querySelector sayesinde index.html deki gallery sınıfını yakaladık.
  container.innerHTML = createMarkup(images);  //yakaladıktan sonra ilk objenin geliş anını innerHTML le,syf yüklenir yüklenmez createMarkup fonk ile objelerin ilk hallerini ekrana bastık.yanisyf yüklenince görseller eklenicek.
  
  function createMarkup(arr) { //şimdi createMarkup fonksiyonunu arr parametresi vererek oluşturalım.şimdi gelen arrayi mapleyerek ihtiyacımız olan özellikleri alalım.
    return arr.map(({ preview, original, description }) => `
    <li class="gallery-item">
	<a class="gallery-link" href="${original}">
		<img 
			class="gallery-image" 
			src="${preview}" 
			alt="${description}" 
			/>
	</a>
</li>
`).join('');
  }
const lightbox = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionDelay: 250, });

  /*li nin esas yapısı
  li class="gallery-item">  <!--Liste öğesidir. Her bir görseli temsil eder. gallery-item sınıfı sayesinde her öğeye özel stil veya davranış uygulanabilir.-->
              <a class="gallery-link" href="large-image.jpg">  <!--Her resim bir link (anchor tag) içinde bulunuyor.class="gallery-link" ile stil veya JS erişimi sağlanabilir.-->
                  <img class="gallery-image" src="small-image.jpg" data-source="large-image.jpg" alt="Image description" />
              </a>
          </li>*/
