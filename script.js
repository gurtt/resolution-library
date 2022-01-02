"use strict";

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
