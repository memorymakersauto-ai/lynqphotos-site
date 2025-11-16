async function lookupCode() {
    const code = document.getElementById("codeInput").value.trim();
    const resultsDiv = document.getElementById("results");
    
    resultsDiv.innerHTML = "<p>Searching...</p>";

    // Replace this after you send me your Function URL
    const url = `YOUR_FUNCTION_URL_HERE?code=${code}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data || data.length === 0) {
            resultsDiv.innerHTML = "<p>No photos found.</p>";
            return;
        }

        resultsDiv.innerHTML = "";

        data.forEach(photo => {
            const img = document.createElement("img");
            img.src = `data:image/jpeg;base64,${photo.PhotoBinary}`;
            resultsDiv.appendChild(img);
        });

    } catch (error) {
        resultsDiv.innerHTML = "<p>Error fetching photos.</p>";
    }
}
