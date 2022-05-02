import initialData from './initialData.js';

const container = document.getElementById('app');


const renderPost = function(post) {
    let title = document.createElement('h3');
    title.innerText = post.title;
    let img = document.createElement('img');
    img.src = post.cover;
    let description = document.createElement('p');
    description.innerText = post.description;

    const postWrapper = document.createElement('div');
    postWrapper.classList.add('postWrapper');

    if (post.highlighted) {
        postWrapper.classList.add('postOverlay');
    }

    const textWrapper = document.createElement('div');
    textWrapper.classList.add('textWrapper');

    textWrapper.appendChild(title);
    textWrapper.appendChild(description);
    postWrapper.appendChild(img);
    postWrapper.appendChild(textWrapper);

    container.appendChild(postWrapper);
}

for (const post of initialData) {
    renderPost(post);
}

