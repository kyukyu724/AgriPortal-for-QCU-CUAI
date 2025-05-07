document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let query = document.getElementById('searchInput').value.toLowerCase();
    let crops = document.querySelectorAll('.crop-box');

    crops.forEach(crop => {
        let cropName = crop.querySelector('.crop-name').innerText.toLowerCase();
        crop.style.display = cropName.includes(query) ? 'block' : 'none';
    });
});
