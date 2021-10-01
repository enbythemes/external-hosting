// DARK MODE 
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

// PHOTOSET.CSS BY ANNASTHMS AND EGGDESIGN
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

// VIDEO RESIZE SCRIPT BY NOUVAE
function flexFrame() {
$(".caption").each(function() {
$(this).find("iframe").wrap("<div class='iframe-flex'></div>");
flexibleFrames($(".iframe-flex"));
});
flexibleFrames($(".video"));
}

$(document).ready(flexFrame);
