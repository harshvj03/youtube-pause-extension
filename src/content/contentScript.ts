// Check if the video element exists on YouTube
const pauseYouTubeVideo = () => {
    const video = document.querySelector("video") as HTMLVideoElement | null;
    if (video && !document.hidden) {
      video.play(); // Resume when tab is active
    } else if (video && document.hidden) {
      video.pause(); // Pause when tab is inactive
    }
  };
  
  // Listen for visibility changes (tab active/inactive)
  document.addEventListener("visibilitychange", pauseYouTubeVideo);
  
  // Run once when the script loads
  pauseYouTubeVideo();
  