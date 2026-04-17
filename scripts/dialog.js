function openDialog() {
    document.getElementById("pokeDialog").showModal();
}

function closeDialog() {
    document.getElementById("pokeDialog").close();
}

function stopClosing(event) {
    event.stopPropagation();
}
