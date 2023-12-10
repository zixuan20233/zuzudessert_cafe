const product = [ 
   {
       id: 0, 
       image: 'BlueberryCheesecake.jpg',
       title: 'Blueberry Cheese Cake',
       price: 12,
   },

   {
      id: 1, 
      image: 'Lemon-Cheesecake.jpg', 
      title: 'Lemon Cheese Cake',
      price: 9,
   },

   {
      id: 2, 
      image: 'OreoCheesecake.jpg', 
      title: 'Oreo Cheese Cake',
      price: 11,
   },

   {
      id: 3, 
      image: 'NewYorkCheesecake.jpg', 
      title: 'NewYork Cheese Cake',
      price: 10,
   },

   {
      id: 4, 
      image: 'StrawberryCheesecake.jpg', 
      title: 'Strawberry Cheese Cake',
      price: 14,
   },

   {
      id: 5, 
      image: 'MangoLayerCake.jpg', 
      title: 'Mango Layer Cake',
      price: 13,
   },

   {
      id: 6, 
      image: 'DurianLayerCake.jpg', 
      title: 'Durian Layer Cake',
      price: 18,
   },

   {
      id: 7, 
      image: 'MatcahLayerCake.jpg', 
      title: 'Matcha Layer Cake',
      price: 13,
   },

   {
      id: 8, 
      image: 'Pandan-layer-slice-cake.jpg', 
      title: 'Pandan Cake',
      price: 10,
   },

   {
      id: 9, 
      image: 'RainbowCake.jpg', 
      title: 'Rainbow Cake',
      price: 7,
   },

   {
      id: 10, 
      image: 'ChocolateCake.jpg', 
      title: 'Chocolate Cake',
      price: 12,
   },

   {
      id: 11, 
      image: 'CoffeeWalnutCake.jpg',
      title: 'Coffee Walnut Cake',
      price: 11,
   },

   {
      id: 12, 
      image: 'PassionFruitCake.jpg', 
      title: 'Passion Fruit Cake',
      price: 16,
   },

   {
      id: 13, 
      image: 'StrawberryShortcake.jpg', 
      title: 'Strawberry Short Cake',
      price: 13,
   },

   {
      id: 14, 
      image: 'ice-cream-oreo-cookie.jpg', 
      title: 'Oreo-cookie Ice Cream',
      price: 4,
   },

   {
      id: 15, 
      image: 'kiwifruit-ice-cream.jpg', 
      title: 'Kiwi Ice Cream',
      price: 6,
   },

   {
      id: 16, 
      image: 'ChocolateIceCream.jpg', 
      title: 'Chocolate Ice Cream',
      price: 4,
   },

   {
      id: 17, 
      image: 'Lemon-Ice-Cream.jpg', 
      title: 'Lemon Ice Cream',
      price: 4,
   },

   {
      id: 18, 
      image: 'matcha-ice-cream-thumbnail.jpg', 
      title: 'Matcha Ice Cream',
      price: 4,
   },

   {
      id: 19, 
      image: 'VanillaIcecream.jpg', 
      title: 'Vanilla Ice Cream',
      price: 4,
   },

   {
      id: 20, 
      image: 'Lavender-ice-cream.jpg', 
      title: 'Lavender Ice Cream',
      price: 6,
   },

   {
      id: 21, 
      image: 'BlueberryIce-cream.jpg', 
      title: 'Blueberry Ice Cream',
      price: 5,
   },

   {
      id: 22, 
      image: 'ThaiCoconutIcecream.jpg', 
      title: 'ThaiCoconut Ice Cream',
      price: 6,
   },

   {
      id: 23, 
      image: 'StrawberryDrinks.jpg', 
      title: 'Strawberry Drink',
      price: 6,
   },

   {
      id: 24, 
      image: 'blueberrysodadrink.jpg', 
      title: 'Blueberry Soda Drink',
      price: 6,
   },

   {
      id: 25, 
      image: 'BobaTea.jpg', 
      title: 'Boba Tea',
      price: 9,
   },

   {
      id: 26, 
      image: 'coffeecup.jpg', 
      title: 'Coffee Cup',
      price: 5,
   },

   {
      id: 27, 
      image: 'cola.jpg', 
      title: 'Cola',
      price: 2,
   },

   {
      id: 28, 
      image: 'FruitTea.jpg', 
      title: 'Fruit Tea',
      price: 6,
   },

   {
      id: 29, 
      image: 'GreenTea.jpg', 
      title: 'Green Tea',
      price: 4,
   },

   {
      id: 30, 
      image: 'mangojuice.jpg', 
      title: 'Mango Juice',
      price: 6,
   },

   {
      id: 31, 
      image: 'Lemonade.jpg', 
      title: 'Lemonade',
      price: 5,
   },

   {
      id: 32, 
      image: 'waffles.jpg', 
      title: 'Waffles',
      price: 8,
   },

   {
      id: 33, 
      image: 'Spaghetti.jpg', 
      title: 'Spaghetti',
      price: 12,
   },

   {
      id: 34, 
      image: 'PotatoWedges.jpg', 
      title: 'Potato Wedges',
      price: 6,
   },

   {
      id: 35, 
      image: 'Koreanfriedchicken.jpg', 
      title: 'Korean Fried Chicken',
      price: 14,
   },

   {
      id: 36, 
      image: 'ChickenNuggets.jpg', 
      title: 'Chicken Nuggets',
      price: 10,
   },

   {
      id: 37, 
      image: 'friedchicken.jpg', 
      title: 'Fried Chicken',
      price: 12,
   },

   {
      id: 38, 
      image: 'Friedrice.jpg', 
      title: 'Fried Rice',
      price: 8,
   }

 ];
 
 const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>RM ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "RM "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "RM "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>RM ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}
