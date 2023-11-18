import shopItems from "./data";
let shop = document.getElementById("shop");

let generateShop = () =>{
    return(shop.innerHTML = shopItems.map((x)=>{
        let{id,image,icons,name,price}= x;
       return 
      `<div class="item">
       <img src=${image} alt="gloves"/>
      <div class="details">
        <img src=${icons} alt="star"/>
        <p>${name}</p>
        <p>$ ${price}</p>
      </div>
      </div>`
      console.log(x);
    }).join(''))    
};
generateShop();