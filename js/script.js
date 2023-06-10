function sendtext(a) {
    var content = document.getElementById("container");
    var input = document.querySelector("input");
    content.innerHTML += `<h4>${input.value}</h4>`;
}

function deletetext() {
    var list = document.getElementById("container");
    list.removeChild(list.childNodes[0]);
}