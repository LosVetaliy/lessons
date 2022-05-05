import initialData from './initialData.js';
import { Post } from './post.js';

const container = document.getElementById('app');

let data = initialData;

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

const addPost = () => {
    const formTitle = document.getElementById('formTitle').value;
    const formText = document.getElementById('formText').value;
    const formImg = document.getElementById('formImg').value;
    const formSpotify = document.getElementById('formSpotify').value;
    const formApple = document.getElementById('formApple').value;
    const formCheckbox = document.getElementById('formCheckbox').checked;

    const post = {
        title: formTitle,
        description: formText,
        cover: formImg,
        links: {
            spotify: formSpotify,
            apple: formApple
        },
        highlighted: formCheckbox,
    };

    data.push(post);
    renderAll();
}

window.addPost = addPost; 

const renderAll = () => {
    container.innerHTML = "";
    for (const post of initialData) {
        renderPost(post);
    }
}

renderAll();

const newPost = new Post ("title", 'description', 'cover', {spotify:'', apple:''});

newPost.render(container);

