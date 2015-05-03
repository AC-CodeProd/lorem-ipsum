'use strict';
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {});
};
var btnCircle = document.querySelector('.btn-circle');
var btnClose = document.querySelector('.modal-close');
btnCircle.addEventListener('click', function(event) {
    var modal = document.querySelector('.modal');
    addClass(modal,'open');
    player.playVideo();
});
btnClose.addEventListener('click', function(event) {
    var modal = document.querySelector('.modal');
    removeClass(modal,'open');
    player.pauseVideo();
});
function hasClass(element, className) {
    if (element.className === '')
        return false;

    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};
function addClass(element, className) {
    if (!hasClass(element, className)) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }
};
function removeClass(element, className) {
    if (hasClass(element, className)) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};