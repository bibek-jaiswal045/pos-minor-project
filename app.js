let custTable = document.getElementById('customers-table');
let prodTable = document.getElementById('products-table');
const nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

const prodList = [
    "Men's T-Shirt",
    "Women's Jeans",
    "Kids' Jacket",
    "Men's Sneakers",
    "Women's Scarf",
    "Football",
    "Basketball",
    "Tennis Racket",
    "Running Shoes",
    "Yoga Mat",
    "Smartphone",
    "Laptop",
    "Tablet",
    "Smartwatch",
    "Headphones",
    "Sofa",
    "Dining Table",
    "Bed Frame",
    "Cookware Set",
    "Table Lamp",
    "Fresh Apples",
    "Cereal Box",
    "Bottled Water",
    "Laundry Detergent",
    "Toothpaste",
    "Moisturizer",
    "Shampoo",
    "Lipstick",
    "Perfume",
    "Car Seat Cover",
    "Engine Oil",
    "Tire",
    "Car Vacuum",
    "Spark Plugs",
    "Novel",
    "Notebook",
    "Pen",
    "Paint Set",
    "Puzzle",
    "Board Game",
    "RC Car",
    "Video Game Console",
    "Necklace",
    "Earrings",
    "Watch",
    "Handbag",
    "Protein Powder",
    "Yoga Mat",
    "Organic Tea",
    "Multivitamins",
    "Dog Food",
    "Cat Toy",
    "Bird Cage",
    "Aquarium",
    "Flower Pot",
    "Garden Shovel",
    "Patio Chair",
    "BBQ Grill",
    "Baby Onesie",
    "Stuffed Animal",
    "Crib",
    "Baby Lotion",
    "Guitar",
    "Piano",
    "Vinyl Record",
    "Blu-ray Movie",
    "Gaming Controller"
];


// Date related methods
function dateToYMD(date) {
    let strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let d = date.getDate();
    let m = strArray[date.getMonth()];
    let y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
}

function randomDate(start, end) {
    let tempDate =  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return dateToYMD(tempDate)
}

for(let i = 0; i < 20; i++) {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    const cell4 = document.createElement('td');
    cell1.innerHTML = i + 1;
    if(custBool){
        cell2.innerHTML = nameList[Math.floor(Math.random() * nameList.length)] + ' ' + nameList[Math.floor(Math.random() * nameList.length)];
    } else if(prodBool) {
        cell2.innerHTML = prodList[Math.floor(Math.random() * prodList.length)] + ' ' + prodList[Math.floor(Math.random() * prodList.length)];
    }
    cell3.innerHTML = Math.floor(Math.random() * 100) + 1;
    cell4.innerHTML = randomDate(new Date(2012, 0, 1), new Date());

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    if(custBool){
        custTable.appendChild(row);
    } else if(prodBool){
        prodTable.appendChild(row);
    }

}