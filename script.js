let menu_list = document.getElementById("menu-list")
let orders_list = document.getElementById("orders-list")
let sum = document.getElementById("sum")
let items_count = document.getElementById("items-count")


const renderMenuItem = (product) => {
    return `
                   <div class="food-card">
                   <img class="food-img"src="${product.img}" alt="${product.title}">
                   <div>
                        <div>${product.title}</div>
                        <div>${product.price} som</div>
                    </div>
                   </div>;
    `
}


const renderMenuList = (List) => {
    let items = []
    List.map((item,id)=>{
    items.push(renderMenuItem(item))

})
menu_list.innerHTML=items.join("")
}
renderMenuList(menu_items)








// let menu_list = document.getElementById("menu-list");
// let orders_list = document.getElementById("orders-list");
// let sum = document.getElementById("sum");
// let items_count = document.getElementById("items-count");

// const menu_items = [
//     {
//         title: 'Hamburger',
//         price: 190,
//         img: './burger order.png'
//     },
//     {
//         title: 'Cheeseburger',
//         price: 220,
//         img: './cheseburger order.png'
//     },
//     {
//         title: 'Coffee',
//         price: 90,
//         img: './cofee order.png'
//     },
//     {
//         title: 'Cola',
//         price: 120,
//         img: './coke order.png'
//     },
//     {
//         title: 'Fries',
//         price: 150,
//         img: './fries order.png'
//     },
//     {
//         title: 'Tea',
//         price: 60,
//         img: './tea order.png'
//     },
// ];

// const renderMenuItem = (product) => {
//     return `
//         <div class="food-card">
//             <img class="food-img" src="${product.img}" alt="${product.title}">
//             <div>
//                 <div>${product.title}</div>
//                 <div>${product.price} som</div>
//             </div>
//         </div>
//     `;
// };

// const renderMenuList = (list) => {
//     let items = list.map(item => renderMenuItem(item));
//     menu_list.innerHTML = items.join("");
// };

// renderMenuList(menu_items);
