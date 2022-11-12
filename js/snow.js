function getpojemnik(){
    const snowContainer = document.getElementById('pojemnik')

    return snowContainer;
}

const FlakeImageList = [
    'img/christmas/flake.png',
    'img/christmas/flake2.png',
    'img/christmas/flake3.png',
];

function RenderFlake(snowContainer){
    const flakeContainer = document.createElement('div');
    flakeContainer.classList.add('flake');

    flakeContainer.style.left = `${Math.random() * 100}%`;
    flakeContainer.style.transform = `scale(${Math.random()})`

    const img = document.createElement('img');
    img.src = FlakeImageList[Math.floor(Math.random() * FlakeImageList.length)];

    flakeContainer.appendChild(img);
    snowContainer.appendChild(flakeContainer);

    setTimeout(RenderFlake, 500, snowContainer);
}


const snowContainer = getpojemnik();
RenderFlake(snowContainer);