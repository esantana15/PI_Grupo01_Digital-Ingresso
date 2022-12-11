document.getElementById('content').addEventListener('submit', pesquisarShow);
function pesquisarShow(e){
    console.log('hey')
    e.preventDefault();
}



document.getElementById('content').addEventListener('submit', pesquisarShow);
function pesquisarShow(e) {
    const showPesquisar = document.getElementById('pesquisar').value;
    console.logs(showPesquisar)
    e.preventDefault();
}