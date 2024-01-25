document.getElementById("searchbar").addEventListener("keyup", ()=>{
    sessionStorage.setItem("searchbarValue", document.getElementById("searchbar").value)
    document.getElementById("searchbar").value = sessionStorage.getItem("searchbarValue");
    console.log(sessionStorage.getItem("searchbarValue"));
});
document.getElementById("searchbar").value = sessionStorage.getItem("searchbarValue");
let data2 = [];
fetch('https://api.github.com/users')
.then(item => item.json())
.then((data1)=>{
    console.log(data1)
    for (let i = 0; i < data1.length; i++) {
        if (sessionStorage.getItem("searchbarValue") === data1[i].login) {
            document.getElementById("user-name").innerHTML = data1[i].login;
            document.getElementById("user-image").src = data1[i].avatar_url
            document.getElementById("url").href = data1[i].html_url;
            document.getElementById("url").innerHTML = "Github Profile";
        }
    }
})
.catch(console.log("ERROR: something went wrong"))
