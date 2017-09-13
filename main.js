var imageGallery = [
  "images/gallery1.jpg",      
  "images/gallery2.jpg",
  "images/gallery3.jpg",
  "images/gallery4.jpg",
  "images/gallery5.jpg",
  "images/gallery6.jpg"
];

var count = 0;
var total = imageGallery.length - 1;

function next() {
 count++ ;
  if(count > total) count = 0
   
  document.getElementById("galleryjs").src = imageGallery[count] ;
}

function Play() {
  setInterval(next, 5000);
}

Play();

// Impalmenting the javascript to add squares
var h3 = document.createElement('h2');
var h4 = document.createElement('h2');
var p3 = document.createElement('p');
var p3 = document.createElement('p');

var h3node = document.createTextNode("A thing of wonder");
var h4node = document.createTextNode("Fashion axe selfies mumblecore gentrify, hella poutine affogato deep v migas.");
var p3node = document.createTextNode("Something amazing");
var p4node = document.createTextNode("Mumblecore gochujang tousled, next level deep v green juice put a bird on it.");

var load = document.getElementById("button")
load.addEventListener("click", loadMore)
