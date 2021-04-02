document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const cardsContainer = document.querySelector('.cards-container');
const card = document.querySelector('.card').content;
const fragment = document.createDocumentFragment();
console.log(card)


const fetchData = async () => {
    
    try{
        const res = await fetch ('https://www.acefrontend.com/c/critter/feed.json');
        const data = await res.json();
        const dataFeed = data.feed;
        pintarTemplates(dataFeed);
    }
    catch(error){
        console.log(error);
    }
}


const pintarTemplates = data => {
    for(d of data){
        card.querySelector('img').setAttribute('src', d.user.avatar);
        card.querySelector('.nick').textContent = `@${d.user.username}`;
        card.querySelector('.date').textContent = `* ${d.created_at.substr(4,7)}`;
        card.querySelector('.text').textContent = d.text;
        card.querySelector('.likes').textContent = `likes: ${d.likes}`;        
        const clone = card.cloneNode(true);
        fragment.appendChild(clone);
        console.log(d);
    }
    cardsContainer.appendChild(fragment);
}