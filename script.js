document.querySelectorAll('.view-certificate').forEach(link => {
    link.addEventListener('mouseover', function() {
        const imgSrc = this.getAttribute('data-img');
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.position = 'absolute';
        img.style.top = '50%';
        img.style.left = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        img.style.zIndex = '1000';
        img.style.width = '300px'; // Adjust size as needed
        document.body.appendChild(img);
        this.addEventListener('mouseout', function() {
            document.body.removeChild(img);
        });
    });
});
