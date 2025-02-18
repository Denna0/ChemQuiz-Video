document.querySelectorAll("video").forEach(video => {
    video.addEventListener("click", function () {
        // Pause all other videos
        document.querySelectorAll("video").forEach(v => {
            if (v !== video) {
                v.pause();
                v.classList.remove("active");
            }
    });

    // Toggle active class and play/pause
    video.classList.toggle("active");

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});