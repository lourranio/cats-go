const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		var data = await fetch(BASE_URL);
		var json = await data.json();

    console.log( "dados do objeto");
    console.log( json);

    var idCats = json.id;
    var urlCats = json.url;
    var webpurl = json.webpurl;

    console.log("id da foto = " + idCats);
    console.log("url da foto = " + urlCats);


		return webpurl;
	} catch (e) {
		console.log(e.message);
	}
};



const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];



	img.src = await getCats();
  //console.log(img.src);
  console.log(" fim ");
  console.log(" ");




};

loadImg();


const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
