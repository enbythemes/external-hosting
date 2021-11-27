// show tumblr controls on click by seyche
$(document).ready(function(){
$('.controls-button').click(function(){
$('body').toggleClass('controls-click');
});
});

// custom audio by annasthms
$(document).ready(function() {
customAudio({
post: ".posts",
default: false,
pauseAll: true,
playButton: "<i data-feather='play'></i>",
pauseButton: "<i data-feather='pause'></i>",
errorIcon: "<i data-feather='x'></i>",
hideInfoIfError: true,
callAfterLoad: () => {feather.replace();},
});
});

// dropdown links
$(document).ready(function(){
$('.links-click').click(function() {
$('.dropdown').slideToggle(500);
});
});

// photoset.css by annasthms and eggdesign
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

// video resize script by nouvae
function flexFrame() {
$(".caption").each(function() {
$(this).find("iframe").wrap("<div class='iframe-flex'></div>");
flexibleFrames($(".iframe-flex"));
});
flexibleFrames($(".video"));
}

$(document).ready(flexFrame);

feather.replace()
