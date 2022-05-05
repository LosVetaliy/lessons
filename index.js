import initialData from './initialData.js';

const container = document.getElementById('app');


const renderPost = function(post) {
    let title = document.createElement('h3'); //создаем объект, ниже вытаскивая инфу из массива post
    title.innerText = post.title;
    let button = document.createElement("button");
    button.classList.add('cross');
    button.innerHTML = "X";
    let img = document.createElement('img');
    img.src = post.cover;
    let description = document.createElement('p');
    description.innerText = post.description;
    let spotify = document.createElement('a') // создаём ссылку
    spotify.href = post.links.spotify;        // присваиваем значение ссылки из массива
    spotify.innerText = 'Spotify';            // видимый текст ссылки
    spotify.target = "_blank";                // переход на новую вкладку
    let apple = document.createElement('a')
    apple.href = post.links.apple;
    apple.innerText = 'Apple Music'; 
    apple.target = "_blank";


    const postWrapper = document.createElement('div');
    postWrapper.classList.add('postWrapper');

    if (post.highlighted) {
        postWrapper.classList.add('postOverlay');
    }

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('textWrapper');

    textWrapper.appendChild(title);
    postWrapper.appendChild(button);
    textWrapper.appendChild(description);
    textWrapper.appendChild(spotify);
    textWrapper.appendChild(apple);
    postWrapper.appendChild(img);

    postWrapper.appendChild(textWrapper);

    container.appendChild(postWrapper);
}

for (const post of initialData) {
    renderPost(post);
}

