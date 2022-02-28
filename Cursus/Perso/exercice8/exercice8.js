const colis = document.querySelector('#ref');
const button = document.querySelector('.btn');
let result = "";


function setAjax(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'exercice8.json', true);
    xhr.send(null);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("2");
            result = JSON.parse(xhr.responseText);
            console.log(result);
        }
    }
}
function remplir(){

    if(colis.value === result[0].reference){
        console.log("bonjour");
    } else {
        console.log("bonsoir");
    }    
}


button.onclick = function () {
    console.log("1");
    setAjax();
    console.log("3");
    remplir();
}