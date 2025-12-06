document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        const imgSrc = item.getAttribute('data-img');
        item.style.backgroundImage = `url('${imgSrc}')`;
        const caption = item.getAttribute('data-caption');

        item.addEventListener('click', function() {
            if (!document.body.classList.contains('fullscreen-mode')) {
                document.body.classList.add('fullscreen-mode');
                createFullscreenImage(imgSrc, caption);
            } else {
                removeFullscreenImage();
            }
        });
    });

    function createFullscreenImage(src, caption) {
        const fullscreenContainer = document.createElement('div');
        fullscreenContainer.className = 'fullscreen-container';
        
        const img = new Image();
        img.src = src;
        img.onload = () => {
            img.className = 'fullscreen-image';
            img.style.opacity = 0; 
            fullscreenContainer.appendChild(img);

            const captionElement = document.createElement('div');
            captionElement.className = 'fullscreen-caption';
            captionElement.textContent = caption;
            fullscreenContainer.appendChild(captionElement);
            
            document.body.appendChild(fullscreenContainer);

            setTimeout(() => {
                img.style.opacity = 1;
                img.style.transform = 'scale(1)';
            }, 10);
        };
    }

    function removeFullscreenImage() {
        const fullscreenContainer = document.querySelector('.fullscreen-container');
        if (fullscreenContainer) {
            fullscreenContainer.querySelector('img').style.opacity = 0;
            fullscreenContainer.querySelector('img').style.transform = 'scale(0.8)'; 
            setTimeout(() => {
                fullscreenContainer.remove();
                document.body.classList.remove('fullscreen-mode');
            }, 300); 
        }
    }

    document.body.addEventListener('click', function(e) {
        if (e.target === document.querySelector('.fullscreen-container')) {
            removeFullscreenImage();
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