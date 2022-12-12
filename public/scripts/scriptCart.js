function openCart (modalID) {
    const modal = document.getElementById(modalID)
    modal.classList.add("mostrar")
    modal.addEventListener("click", (e)=> {

    })
}
const comprar = document.querySelector(".btn-buy")
comprar.addEventListener("click",() => openCart("modal-carrinho"))

