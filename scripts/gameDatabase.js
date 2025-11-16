const dataString = `[
  {"title": "Metroid", "year": 1986, "price": 29.99, "image": "https://preview.redd.it/did-u-ever-played-through-and-beat-the-original-metroid-v0-o05ztox0ax8e1.jpeg?auto=webp&s=b225e1f5fb722215a10647ae56c5af0e74ee72a5"},
  {"title": "Super Mario Bros.", "year": 1985, "price": 24.99, "image": "https://assets-prd.ignimgs.com/2022/01/08/smb-nesart-1641603921866.jpg"},
  {"title": "Mike Tyson's Punch-Out!!", "year": 1987, "price": 33.99, "image": "https://howlongtobeat.com/games/6052_Mike_Tysons_Punch-Out.png"}
]`;

class Game {
    #image
    #price
    constructor(title, year, price, image){
        this.title = title;
        this.year = year;
        this.price = price;
        this.#image = image;
    }

    get price(){ return this.#price; }

    set price(input){
        if (typeof(input) == "number")
            this.#price = input;
        else {
            throw new Error("Price must be a number");
        }
    }

    toString(){
        return this.title + " (" + this.year +") " + "$" + this.#price;
    }

    displayOnPage(){
        return `
        <div class="game-card">
        <img src="${this.#image}" height="120px" alt="${this.title}">
        <div class="card-details">
        <p class="card-line">${this.title}</p>
        <p class="card-line">(${this.year})</p>
        <p class="card-line">$${this.#price}</p>
        </div>
        </div>
        `
    }
}

let gameStringsData = JSON.parse(dataString);

let gameContainer = document.getElementById("games");

const gameObjects = gameStringsData.map(game => new Game(game.title, game.year, game.price, game.image)
);

console.log(gameObjects);

// gameObjects.forEach(game => {
//     console.log(game);
//     gameContainer.innerHTML += game.displayOnPage();
// })

gameContainer.innerHTML = gameObjects.map(game => game.displayOnPage()).join("");

