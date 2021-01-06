$(document).ready(function(){
  $('.slick-it').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
  });
});


const COVER = document.querySelectorAll('.music-img img');
const TITLE = document.querySelectorAll('.music-name h6');
const ARTIST = document.querySelectorAll('.music-name p');

console.log(COVER);
console.log(ARTIST);
console.log(TITLE);


//  create song image array function
function imageCache(base, firstNum, lastNum) {
    this.cache = [];
    var img;
    for (var i = firstNum; i <= lastNum; i++) {
        img = new Image();
        img.src = base + i +".jpg";
        this.cache.push(img);
    }
}
// Creating producer objects

function Producer(images, tracks, credit){
  this.images = images;
  this.tracks = tracks;
  this.credit = credit;
}

var chrillCache = new imageCache('extras/MUNCH-400',1,7);

var chrill = new Producer(chrillCache, ['green','blue','yellow','red','purple','black','orange'], 'Chrill');
var drabeats = new Producer(chrillCache, ['green','white','yellow','red','purple','black','orange'], 'drabeats');
var vizzyPrime = new Producer(chrillCache, ['green','red','yellow','red','purple','black','orange'], 'vizzyPrime');
var hotBoyz = new Producer(chrillCache, ['green','blue','yellow','red','purple','black','orange'], 'hotBoyz');
var will = new Producer(chrillCache, ['green','purple','yellow','red','purple','black','orange'], 'will');
var ivan = new Producer(chrillCache, ['green','black','yellow','red','purple','black','orange'], 'ivan');
var tylerGoldChainz = new Producer(chrillCache, ['dese','blue','yellow','red','purple','black','orange'], 'tylerGoldChainz');

var besHotBoyz = [chrill,drabeats,vizzyPrime,hotBoyz,will,ivan,tylerGoldChainz];

// set producer to number

var kount = 0;
var shnext = document.querySelector('.hi-next');
var back = document.querySelector('.hi-prev');

back.addEventListener("click", function() {
  if (kount <=0 ) {
    kount = 6;
    change();
  }
  else {
    kount--;
    change();
  }
  console.log(besHotBoyz[kount]);
})
shnext.addEventListener("click", function() {
  if (kount == 6 ) {
    kount = 0;
    change();
  }
  else {
    kount++;
    change();
  }
  console.log(besHotBoyz[kount]);
  })

// change ul items
  // when the count equals a certain number select array item
  // with corresponding number then set change items accordingly


 var change = function(){
   var coverImg = Array.from(COVER);
   var trackName = Array.from(TITLE);
   var artistName = Array.from(ARTIST);






   for (var i = 0; i < coverImg.length; i++) {

     coverImg[i].src = besHotBoyz[kount].images.cache[i].src;
     trackName[i].innerHTML = besHotBoyz[kount].tracks[i];
     artistName[i].innerHTML = besHotBoyz[kount].credit;
   }


 }
change();


// create  obects for each Artists
  // music lists & song image
//grab correct TRACKS childnodes
//on click update TRACKS childnodes
