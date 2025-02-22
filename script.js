document.querySelectorAll('.view-certificate').forEach(link => {
    link.addEventListener('mouseover', function() {
        const imgSrc = this.getAttribute('data-img');
        const modal = document.getElementById('certificate-modal');
        const modalImg = document.getElementById('modal-img');
        modal.style.display = "block";
        modalImg.src = imgSrc;
    });

    link.addEventListener('mouseout', function() {
        const modal = document.getElementById('certificate-modal');
        modal.style.display = "none";
    });
});

document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('certificate-modal');
    modal.style.display = "none";
});
