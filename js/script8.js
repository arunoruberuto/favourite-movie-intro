document.addEventListener('DOMContentLoaded', () => {
    const videoLink = document.querySelector('.video-link');
    let fullscreenVideo = null;

    videoLink.addEventListener('click', function() {
        if (!document.body.classList.contains('video-mode')) {
            const videoUrl = this.getAttribute('data-video-url');
            fullscreenVideo = document.createElement('div');
            fullscreenVideo.className = 'fullscreen-video';

            const iframe = document.createElement('iframe');
            iframe.src = videoUrl.replace('watch?v=', 'embed/') + '?autoplay=1&rel=0&modestbranding=1';
            iframe.allow = 'autoplay; encrypted-media';
            iframe.allowFullscreen = true;
            fullscreenVideo.appendChild(iframe);

            document.body.appendChild(fullscreenVideo);
            document.body.classList.add('video-mode');

            fullscreenVideo.addEventListener('click', closeVideo);
        }
    });

    function closeVideo(e) {
        if (e.target === fullscreenVideo || e.target === fullscreenVideo.querySelector('iframe')) {
            document.body.classList.remove('video-mode');
            fullscreenVideo.style.opacity = '0';
            fullscreenVideo.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                fullscreenVideo.remove();
                fullscreenVideo = null;
            }, 300);
        }
    }

    // click outside video to close-try
    document.addEventListener('click', function(e) {
        if (document.body.classList.contains('video-mode') && !fullscreenVideo.contains(e.target)) {
            closeVideo(e);
        }
    });

    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    toggleBtn.addEventListener('click', () => {
        const isExpanded = sidebar.classList.toggle('expanded');
        overlay.classList.toggle('visible', isExpanded);

        if (isExpanded) {
            toggleBtn.classList.add('hidden');
            menu.classList.remove('hidden');
            setTimeout(() => menu.classList.add('expanded'), 10); 
        } else {
            toggleBtn.classList.remove('hidden');
            menu.classList.remove('expanded');
            setTimeout(() => menu.classList.add('hidden'), 300); 
            overlay.classList.remove('visible');
        }
    });

    overlay.addEventListener('click', () => {
        if (sidebar.classList.contains('expanded')) {
            sidebar.classList.remove('expanded');
            menu.classList.remove('expanded');
            setTimeout(() => menu.classList.add('hidden'), 300); 
            overlay.classList.remove('visible');
            toggleBtn.classList.remove('hidden');
        }
    });
});