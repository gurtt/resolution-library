"use strict";

const getJSON = async url => {
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(response.statusText);

    const data = response.json();
    return data;
}

getJSON("/items.json").then(data => {
    let fragment = new DocumentFragment;

    data.forEach(item => {
        let itemElement = document.createElement('li');
        itemElement.classList.add("item");

        let title = document.createElement('h2');
        title.innerText = item.name;
        itemElement.append(title);        

        fragment.append(itemElement);
    });
    document.getElementById("items").append(fragment);

    search()
    document.getElementById("loader").remove();

}).catch(error => {
    console.error(error);
    document.getElementById("loader").innerText = "Something went wrong."
});

function search() {
    let items = document.getElementById("items").getElementsByClassName("item");

    for (const item of items) {
        let itemName = item.getElementsByTagName("h2")[0].innerText;
        if (itemName.toLowerCase().indexOf(document.getElementById("search").value.toLowerCase()) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
}
