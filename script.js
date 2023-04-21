const result = document.querySelector('#result');
const filter = document.querySelector('#filter');

const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');
    const {results} = await res.json();
    result.innerHTML = ``;
    results.forEach(item => {
        const element = document.createElement('li');
        listItems.push(element);
        element.innerHTML = `
            <img src="${item.picture.thumbnail}" alt="${item.name.first}">
            <div class="user-info">
                <h4>${item.name.first} ${item.name.last}</h4>
                <p>${item.location.city}, ${item.location.country}</p>
            </div>
        `;
        result.appendChild(element);
    })
} 

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

