function openSidebar() {
    document.getElementById('sidebar').style.left = '0';
    document.getElementById('overlay').style.opacity = '1';
    document.getElementById('overlay').style.visibility = 'visible';
}

function closeSidebar() {
    document.getElementById('sidebar').style.left = '-300px';
    document.getElementById('overlay').style.opacity = '0';
    document.getElementById('overlay').style.visibility = 'hidden';
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, index * 200);
    });
});
