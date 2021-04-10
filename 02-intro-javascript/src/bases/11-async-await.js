const getImage = async () => {
    try {
        const apiKey = '26RKQcSxa3Q0RF96C0MHt555yH43C9E6';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();
        
        const { url } = data.images.original;
        
        const img = document.createElement('img');

        img.src = url;
        document.body.append( img );
    } catch (error) {
        // manejo del error
        console.error(error);
    }
}

getImage();