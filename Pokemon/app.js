const container = document.querySelector('#container');

const baseLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for(let i=1;i<=200;i++){
    const Ndiv=document.createElement('div');

    const Nimg = document.createElement('img');
    Nimg.src = `${baseLink}${i}.png`;

    const Nspan=document.createElement('span');
    Nspan.innerText=`${i}`;

    Ndiv.appendChild(Nimg);
    Ndiv.appendChild(Nspan);
    container.appendChild(Ndiv);
}