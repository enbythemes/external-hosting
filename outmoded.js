// LIGHT SWITCH
window.addEventListener("DOMContentLoaded", function() {
const btn = document.querySelector(".lightswitch");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
document.body.classList.add("night");
}

btn.addEventListener("click", function () {
document.body.classList.toggle("night");

let theme = "light";
if (document.body.classList.contains("night")) {
theme = "dark";
}
localStorage.setItem("theme", theme);
});
});

// PHOTOSETS BY ANNASTHMS AND EGGDESIGN
function gatherData(images, arr) {
for (let i = 0; i < images.length; i++) {
let currentData = {
"width": images[i].getAttribute('data-width'),
"height": images[i].getAttribute('data-height'),
"low_res": images[i].getAttribute('data-lowres'),
"high_res": images[i].getAttribute('data-highres')
};
arr.push(currentData);
}
}
function getIndex(elem) {
let i = 0;
while( (elem = elem.previousElementSibling) != null ) i++;
return i;
}
function lightbox(elem) {
let currentPhotoset = elem.parentNode;
let photosetPhotos = currentPhotoset.getElementsByTagName('div');
let data = [];
gatherData(photosetPhotos, data);
Tumblr.Lightbox.init(data, getIndex(elem) + 1);
}

// CUSTOM AUDIO BY ANNASTHMS
$(document).ready(function() {
customAudio({
post: ".posts",
wrappers: {
audio: ".custom_audio_wrapper",
buttons: ".custom_audio_buttons"
},
default: false,
pauseAll: true,
playButton: "<i class='ph-play'></i>",
pauseButton: "<i class='ph-pause'></i>",
errorIcon: "<i class='ph-x'></i>",
hideInfoIfError: true,
});
});

// MINIMAL SOUNDCLOUD BY SHYTHEMES
$(document).ready(function(){
var color = '{color:links}'; // color of play button (hex)
$('.soundcloud_audio_player').each(function(){
$(this).attr({ src: $(this).attr('src').split('&')[0] + '&amp;liking=false&amp;sharing=false&amp;auto_play=false&amp;show_comments=false&amp;continuous_play=false&amp;buying=false&amp;show_playcount=false&amp;show_artwork=true&amp;origin=tumblr&amp;color=' + color.split('#')[1], height: 116, width: '100%' });
});
});

// MOBILE NAVIGATION
$(document).ready(function(){
$('.links-click').click(function() {
$('nav').slideToggle(500);
});
});
