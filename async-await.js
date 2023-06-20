const getNews = async () => {
  const API_KEY = "5f375c1125e94b1c83498440196553bf";
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  try {
    const res = await fetch(URL);
    //?error handling;
    if (!res.ok) {
      //otomatik olarak her response in içinde ok diye bir property olur. dolayısıyla respose nin içindeki ok okuyor. başarılı okunup okunmadığını anlıyoruz.
      //renderError(); bu fks olusturcaksan görunsun ıstıyorsan throw untune yaz yada asagıda catch e yaz

      throw new Error("News can not be fetched");
    }
    const data = await res.json(); //başarılı okunuyorsa gelen veriyi,aç,json lastır. DOM a basabiliriz.
    //console.log(data.articles);
    renderNews(data.articles);
  } catch (err) {
    //console.log(error);
    renderError(err); //12. satırdan gelen hata mesajı yazdırıyoruz.17 satıda yakaladık. bu fks ile içersine resim , metin vs de yazdırabiliyoruz
  }
};

const renderError = (err) => {
  const newsDiv = document.getElementById("news");
  //?yukardAN GELEN HATAYI EKRANA BASTIRMA ve ekrana hata resmi de bastırıyoruz;
  newsDiv.innerHTML = ` <h3>${err}</h3>
  <img src="./images/404.png" alt="404" />`;

  //   const newsH1 = document.getElementById("error_h1");
  //   newsH1.innerHTML = `<h1> ERROR</h1>`;
};

//?renderNews bize dizi döner, önce bastırcagın dom elementine inner html le bastıranılırsın. += ekleye ekleye devam etsin.dizinin içindeki 20 haberinde basılmasını ıstıyoruz. map le içinde dolaşıyoruz.
const renderNews = (news) => {
  console.log(news);
  const newsDiv = document.getElementById("news");
  news.map((item) => {
    console.log(item);
  });
};

window.addEventListener("load", () => {
  getNews();
});
