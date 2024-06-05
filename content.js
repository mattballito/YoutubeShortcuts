chrome.runtime.onMessage.addListener(function(request) {
    var video = document.querySelector('video');
    if (video) {
        if (request.command === 'toggle-play-pause') {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
        else if (request.command === 'rewind') {
            video.currentTime -= 5;
        }
        else if (request.command === 'forward') {
            video.currentTime += 5;
        }
    }
  });