document.querySelectorAll('.view-certificate').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const imgSrc = item.getAttribute('data-img');
        const modal = document.getElementById('certificate-modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = "block";
        modalImg.src = imgSrc;
    });
});

document.querySelector('.close').onclick = function() {
    document.getElementById('certificate-modal').style.display = "none";
}
