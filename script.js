// your code here
updateURL = () => {
        const nameValue = document.getElementById("name").value;
        const yearValue = document.getElementById("year").value;
        const currentURL = document.getElementById("url").innerText;

        let str = "";
        if (nameValue !== "") {
          str = str + "?name=" + encodeURIComponent(nameValue);
        } else if (yearValue !== "") {
          str = str + "?year=" + encodeURIComponent(yearValue);
        }
        const updateURL = currentURL + str;
        document.getElementById("url").innerText = updateURL;
      };