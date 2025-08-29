// Script to handle loading and playing video when a topic is clicked

function loadVideo(src) {
  const video = document.getElementById('mainVideo');
  const container = document.getElementById('videoContainer');

  video.src = src;
  video.load();
  container.classList.remove('video-hidden');
  container.classList.add('video-visible');
}

function showVideo(videoId) {
  const wrappers = document.querySelectorAll('.video-wrapper');
  wrappers.forEach(wrapper => {
    wrapper.style.display = "none";
    const video = wrapper.querySelector('video');
    video.pause();
    video.currentTime = 0;
  });

  document.getElementById("video-player").style.display = "block";
  document.getElementById(`${videoId}-wrapper`).style.display = "block";
}

function makeFullScreen(videoId) {
  const video = document.getElementById(videoId);
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { // Safari
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { // IE11
    video.msRequestFullscreen();
  }
}


// Script to toggle fullscreen for the video
function toggleFullScreen() {
  const video = document.getElementById('mainVideo');
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

// Attach event listener to fullscreen button (once DOM is ready)
document.addEventListener('DOMContentLoaded', () => {
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', toggleFullScreen);
  }
});

