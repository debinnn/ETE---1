document.getElementById('fetchButton').addEventListener('click', function() {
//url for the cat api
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    //fetching data and storing the response
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        
            const catImageUrl = data[0].url;

            //set source to display the image
            document.getElementById('catImage').src = catImageUrl;
        })
        .catch(error => {
        console.error('Error fetching the cat image:', error);
        });
});

