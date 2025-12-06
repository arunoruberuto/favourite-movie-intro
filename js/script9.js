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