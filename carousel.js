$(document).ready(function(){

var carouselImages = [
  {
    image_url: 'https://i.pinimg.com/originals/2b/08/a4/2b08a4a3670da84889faf6f7a88ff5c9.jpg',
    title: 'Me Everyday',
    name: 'sc2018'
  },
  {
    image_url: 'http://66.media.tumblr.com/6b11ad6ea10edb56a444fec32c8699e6/tumblr_nl5whfDhya1twlo1uo1_500.jpg',
    title: 'Also me everyday',
    name: 'sc2018'
  },
  {
    image_url: 'https://i.imgflip.com/14axhv.jpg',
    title: 'Relatable',
    name: 'sc2018'
  }
]


var main = document.querySelector("#carouselC")

var htmlStr =""

carouselImages.forEach(function(pic){

  htmlStr += `

  <img class="image" src="${(pic.image_url)}"/>

  ${pic.title} 

  ${pic.name} 

  `
})

main.innerHTML = htmlStr




})
