async function getPhoto() {
    const codeInput = document.getElementById("photoCode").value.trim();
    const resultBox = document.getElementById("result");
    const imgBox = document.getElementById("photo");

    if (!codeInput) {
        resultBox.innerText = "Please enter a code.";
        return;
    }

    resultBox.innerText = "Loading...";

    try {
        const apiUrl = `https://lynqphotos-api-malaysia-eyh0brfmgrdac3f6.malaysiawest-01.azurewebsites.net/api/GetPhotoByCode2?code=t-31Jd55uO0PfLDLpr3xfvQBPKRQ91GCJJe18FsWhSNfAzFuAxBWAA==&photoCode=${encodeURIComponent(codeInput)}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            resultBox.innerText = data.error;
            imgBox.src = "";
            imgBox.style.display = "none";
            return;
        }

        // Show image
        imgBox.src = `data:image/jpeg;base64,${data.photo}`;
        imgBox.style.display = "block";

        resultBox.innerText = "Photo loaded!";
    } catch (error) {
        resultBox.innerText = "Server error.";
        console.error(error);
    }
}

