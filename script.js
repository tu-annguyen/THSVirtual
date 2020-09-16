var NUMSLIDES = 7;
var NUMINFO = 7;
var slideIndex = 1;
var mapVisible = false;
var lightboxVisible = false;
showSlides(slideIndex);
/**
 * Goes forward or backward one slide.
 * 
 * @param n  + or - 1 indicating forward or backward motion.
 */
function plusSlides(n) {
	showSlides(slideIndex += n);
}
/**
 * Switches slide according to specified slide number.
 * 
 * @param n  slide number
 */
function currentSlide(n) {
	showSlides(slideIndex = n);
}
/**
 * Toggles visibility of slides according to current
 * slide number.
 * 
 * @param n  slide index
 */
function showSlides(n) {
	var i;
	var j;
	var slides = document.getElementsByClassName("showcase");
	var previews = document.getElementsByClassName("preview");
	var blurbs = document.getElementsByClassName("blurbs");
	var titles = document.getElementsByClassName("site_titles");
	var info = document.getElementsByClassName("info_container");
	var maps = document.getElementsByClassName("map");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for(j = 0; j < NUMINFO; j++){
		info[j].style.display = "none";
	}
	if (slideIndex === 2) {
		info[0].style.display = "block";
	}
	if (slideIndex === 3) {
		info[1].style.display = "block";
		info[2].style.display = "block";
	}
	if (slideIndex === 5) {
		info[3].style.display = "block";
	}
	if (slideIndex === 6) {
		info[4].style.display = "block";
		info[5].style.display = "block";
	}
	if (slideIndex === 7) {
		info[6].style.display = "block";
	}
	for(i = 0; i < NUMSLIDES; i++) {
		slides[i].style.display = "none";
		maps[i].style.display = "none";
		blurbs[i].style.display = "none";
		titles[i].style.display = "none";
		previews[i].style.opacity = "0.5";
	}
	slides[slideIndex-1].style.display = "block";
	maps[slideIndex-1].style.display = "block";
	titles[slideIndex-1].style.display = "block";
	blurbs[slideIndex-1].style.display = "block";
	previews[slideIndex-1].style.opacity = "1.0";
}

function toggleVis() {
	var maps = document.getElementsByClassName("map");
	if(mapVisible) {
		document.getElementById("map_container").style.backgroundColor = "rgba(29, 29, 29, 1)";
		document.getElementById("map_container").style.height = "34.6%";
		document.getElementById("map_container").style.top = "-38.06%";
		showSlides(slideIndex);
		document.getElementById("visibility_container").style.backgroundColor = "rgba(29, 29, 29, 1)";
	}
	else {
		document.getElementById("map_container").style.backgroundColor = "rgba(0, 0, 0, 0)";
		document.getElementById("map_container").style.top = "-01.73%";
		for(i = 0; i < NUMSLIDES; i++) {maps[i].style.display = "none";}
		document.getElementById("visibility_container").style.backgroundColor = "rgba(29, 29, 29, 0.5)";
	}
	mapVisible = !mapVisible;
}

function toggleLightbox() {
	if(lightboxVisible) {
		document.getElementById("lightbox").style.display = "none";
	}
	else {
		document.getElementById("lightbox").style.display = "block";
	}
	lightboxVisible = !lightboxVisible;
}

function toggleSiteExpand() {
	document.getElementById("expandedSite_container").style.display = "block";
	var sites = document.getElementsByClassName("expandedSites");
	for(i = 0; i < NUMSLIDES; i++) {sites[i].style.display = "none";}
	sites[slideIndex-1].style.display = "block";
}

function showClassroom(n) {
	document.getElementById("classroom_container").style.display = "block";
	var classrooms = document.getElementsByClassName("classrooms");
	var cblurbs = document.getElementsByClassName("cblurbs_container");
	for(i = 0; i < NUMINFO; i++) {
		classrooms[i].style.display = "none";
		cblurbs[i].style.display = "none";
	}
	classrooms[n].style.display = "block";
	cblurbs[n].style.display = "block";
}

function disappear() {
	document.getElementById("classroom_container").style.display = "none";
	document.getElementById("expandedSite_container").style.display = "none";
}
<! --
// Maintain showcase images' ratio
var imgs = document.getElementsByClassName('showcase')
for(var i = 0; i < imgs.length; i++) {
	img = imgs.item(i);
	img.onload = function() {
    if(img.height > img.width) {
        img.height = '100%';
        img.width = 'auto';
		}
	}
}
-->
