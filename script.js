document.querySelectorAll('.view-certificate').forEach(item => {
    item.addEventListener('mouseover', event => {
        const imgSrc = item.getAttribute('data-img');
        const modal = document.getElementById('certificate-modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = "block";
        modalImg.src = imgSrc;
    });

    item.addEventListener('mouseout', event => {
        const modal = document.getElementById('certificate-modal');
        modal.style.display = "none";
    });
});

document.querySelector('.close').onclick = function() {
    const modal = document.getElementById('certificate-modal');
    modal.style.display = "none";
}
