window.onload = function (){
    let fieldName = document.getElementById('name');

    fieldName.addEventListener('change', () => {
        console.log('O campo nome teve o seu valor alterado');
        // fieldName.style.color = '#33305B'
    });

    fieldName.addEventListener('focus', () => {
        console.log('O campo Nome recebeu foco');
    });

    fieldName.addEventListener('blur', () => {
        console.log('O Campo NOME recbeu foco');
    })
}