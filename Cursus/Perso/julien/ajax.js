// const xhr = new XMLHttpRequest();

// xhr.open("GET", "/data.json", true);
// xhr.send();

// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState);
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         const users = JSON.parse(xhr.responseText);
//         affichage(article.data);
//     }
// }

// const affichage = (donnees) => {
//     let text = "";

//     for (let i = 0; i < donnees.length; i++) {
//         text += `            
//         <div class="box">
//             <a>${donnees.age}</a>
//         </div>
// >`;
//     }
//     document.querySelector("test").innerHTML = text;
// }

function affichage(posts){
    let text = "";
    for (let i = 0; i < posts.length; i++) {
        text += `
        <div class = "text">
        <p>${posts[i].userId}</p>
        <p>${posts[i].title}</p>
        <p>${posts[i].body}</p>
        </div>`;
    }
    document.querySelector('.box').innerHTML = text;
}

const xhr = new XMLHttpRequest();
xhr.open("GET", 'https://jsonplaceholder.typicode.com/posts');
xhr.send();

xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if (xhr.readyState == 4 && xhr.status == 200) {
        const users = JSON.parse(xhr.responseText);
        affichage(users);
    }
}


// fetch('data.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData(data);
//     })
//     .catch(function (err) {
//         console.log('error: ' + err);
//     });

// function appendData(data) {
//     var mainContainer = document.querySelector("box");
//     for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = 
//         'Article: ' + data[i].firstName + ' ' + data[i].lastName + data[i].img 
//         ;
//         mainContainer.appendChild(div);
//     }
// }