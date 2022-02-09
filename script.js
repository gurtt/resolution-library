"use strict";

const getJSON = async url => {
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(response.statusText);

    const data = response.json();
    return data;
}

getJSON("./items.json").then(data => {
    let fragment = new DocumentFragment;

    data.forEach(item => {
        let itemElement = document.createElement('li');
        itemElement.classList.add("item");

        let title = document.createElement('h2');
        title.innerText = item.name;
        itemElement.append(title);
        
        let details = document.createElement('ul');
        Object.entries(item.details).forEach(detail => {
            let detailElement = document.createElement('li');
            detailElement.innerHTML = `<b>${detail[0]}:</b> ${detail[1]}`;
            details.append(detailElement);
        });
        itemElement.append(details);

        let source = document.createElement('div');
        source.innerHTML = "source: " + item.source.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
        itemElement.append(source);

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
