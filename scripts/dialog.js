function openDialog() {
    document.getElementById("pokeDialog").showModal();
}

function clickOutsidePokeCard(event) {
    if (event.target === bigViewDialog) {
        event.stopPropagation();
        bigViewDialog.close();
    }
}

const bigViewDialog = document.querySelector("dialog");
bigViewDialog.addEventListener("click", clickOutsidePokeCard);