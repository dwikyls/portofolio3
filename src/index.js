import "./styles/style.css";
import $ from "jquery";

$('#projek1').on('click', () =>{
    $('#works').html('')

    $('#works').append(`
    <div class="card mb-3" style="width: 25rem;">
      <img class="card-img-top" src="./src/images/1.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Sebuah Website yang saya buat bersama team saya untuk mempermudah para         pelajar dalam mencari materi belajar di internet, terutama untuk para disabilitas. situs ini dilengkapi service worker yang mana bisa diakses secara offline dan bisa didownload
          di android.</p>
        <a href="https://study2gether.000webhostapp.com" class="btn btn-primary">See detail...</a>
      </div>
    </div>
    `);
  })

  $('#projek2').on('click', () =>{
    $('#works').html('')

    $('#works').append(`
    <div class="card mb-3" style="width: 25rem;">
      <img class="card-img-top" src="./src/images/2.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Ini merupakan website portofolio pertama yang saya buat saat mengikut workshop DSC UNAIR tentang PWA.
        saya membuatnya secara native.</p>
        <a href="https://dsc29feb.web.app" class="btn btn-primary">See detail...</a>
      </div>
    </div>
    `);
  })

  $('#projek3').on('click', () =>{
    $('#works').html('')

    $('#works').append(`
    <div class="card mb-3" style="width: 25rem;">
      <img class="card-img-top" src="./src/images/3.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Ini merupakan website portofolio kedua saya. saya membuat ini untuk memnuhi submission Dicoding.
        saya membuatnya dengan semantic HTML, dan layouting menggunakan flexbox.</p>
        <a href="https://dwikyls.github.io" class="btn btn-primary">See detail...</a>
      </div>
    </div>
    `);
  })

$.getJSON('https://www.googleapis.com/youtube/v3/channels?key=AIzaSyC28h1S_kId35V6n0wR749yLrndF0yZyXM&id=UCVwgoAo21UE-LoAo1nDLA-w&part=snippet', (result) =>{
  let data = result.items[0].snippet;
  $('#yucub').append(`
    <div class="row">
      <div class="col-4">
        <img src="${data.thumbnails.default.url}" alt="">
      </div>
      <div class="col-8">
        <h2>${data.title}</h2>
      </div>
    </div>
  `)
})
