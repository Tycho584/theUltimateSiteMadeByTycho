fetch("NavigationBar/Navigationbar.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("navigationbar").innerHTML = data;
});