import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import $ from "jquery";

$('#projek1').on('click', () =>{
    $('#works').html('')

    $('#works').append(`
    <div class="card mb-3" style="width: 30rem;">
      <img class="card-img-top" src="./src/images/1.png">
      <div class="card-body">
        <h5 class="card-title">Belajar Bareng</h5>
        <p class="card-text">Sebuah Website yang saya buat bersama team saya untuk mempermudah para         pelajar dalam mencari materi belajar di internet, terutama untuk para disabilitas.</p>
        <a href="https://study2gether.000webhostapp.com" class="btn btn-link">See detail...</a>
      </div>
    </div>
    `);
  })

  $('#projek2').on('click', () =>{
    $('#works').html('')

    $('#works').append(`
    <div class="card mb-3" style="width: 30rem;">
      <img class="card-img-top" src="./src/images/2.png">
      <div class="card-body">
        <h5 class="card-title">Portofolio Pertama</h5>
        <p class="card-text">Ini merupakan website portofolio pertama yang saya buat saat mengikut workshop DSC UNAIR tentang PWA.
        saya membuatnya secara native.</p>
        <a href="https://dsc29feb.web.app" class="btn btn-link">See detail...</a>
      </div>
    </div>
    `);
  })

  $('#projek3').on('click', () =>{
    $('#works').html('')

    $('#works').append(`
    <div class="card mb-3" style="width: 30rem;">
      <img class="card-img-top" src="./src/images/3.png">
      <div class="card-body">
        <h5 class="card-title">Portofolio Kedua</h5>
        <p class="card-text">Ini merupakan website portofolio kedua saya. saya membuat ini untuk memnuhi submission Dicoding.
        saya membuatnya dengan semantic HTML, dan layouting menggunakan flexbox.</p>
        <a href="https://dwikyls.github.io" class="btn btn-link">See detail...</a>
      </div>
    </div>
    `);
  })

$.getJSON('https://www.googleapis.com/youtube/v3/channels?key=AIzaSyC28h1S_kId35V6n0wR749yLrndF0yZyXM&id=UCVwgoAo21UE-LoAo1nDLA-w&part=snippet,statistics', (result) =>{
  let data = result.items[0].snippet;
  let data2 = result.items[0].statistics;
  $('#thumb1').append(`
    <img src="${data.thumbnails.medium.url}" class="rounded-circle img-thumbnail">
  `)

  $('#title1').append(`
      <h2>${data.title}</h2>
      <p>Subscriber: ${data2.subscriberCount}</p>
  `)
})
$.getJSON('https://www.googleapis.com/youtube/v3/search?key=AIzaSyC28h1S_kId35V6n0wR749yLrndF0yZyXM&part=snippet&channelId=UCVwgoAo21UE-LoAo1nDLA-w&order=date&maxResults=1', (result) =>{
  let video = result.items[0].id.videoId;

  $('#embvideo').append(`
  <iframe width="100" height="100" src="https://www.youtube.com/embed/${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `)
})



