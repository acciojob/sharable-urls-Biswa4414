function updateURL() {
        var nameValue = document.getElementById('name').value;
        var yearValue = document.getElementById('year').value;
        var currentURL = "https://localhost:8080/";

        // Initialize the query string
        var queryString = "";

        if (nameValue !== "" && yearValue !== "") {
            queryString = "?name=" + encodeURIComponent(nameValue) + "&year=" + encodeURIComponent(yearValue);
        } else if (nameValue === "" && yearValue !== "") {
            queryString = "?year=" + encodeURIComponent(yearValue);
        } else if (nameValue !== "" && yearValue === "") {
            queryString = "?name=" + encodeURIComponent(nameValue);
        }

        // Concatenate the current URL with the query string
        var updatedURL = currentURL + queryString;

        // Update the h3 element with the new URL
        document.getElementById('url').innerText = updatedURL;
	document.getElementById('displayURL').innerText = `Updated URL: ${updatedURL}`;
    }