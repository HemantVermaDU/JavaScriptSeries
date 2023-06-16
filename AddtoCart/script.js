const product = [
	{
		id:0,
		image:'images/about-img.png',
		title:'watch',
		price:1500,
	},
	{
		id:2,
		image:'images/model_1.png',
		title:'Top',
		price:500,
	},
	{
		id:3,
		image:'images/model_3.png',
		title:'Top',
		price:700,
	},
	{
		id:4,
		image:'images/model_6.png',
		title:'Shoes',
		price:1000,
	},
	{
		id:5,
		image:'images/w3.png',
		title:'watch',
		price:1500,
	},
	{
		id:6,
		image:'images/product-10.jpg',
		title:'Jeans',
		price:2500,
	},
];

const categories = [...new Set(product.map((item)=>
{
	return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
    	var {image, title, price} = item;
    	return (
    		`<div class='box'>
    		<div class='img-box'>
    		<img class="images" src=${image}> </img>
    		</div>
    		<div class='bottom'>
    		<p>${title}</p>
    		<h2>${price}.00</h2>`+
    		"<button onclick='addtocart("+(i++)+")'> Add to Cart </button>"+
    		`</div>
    		</div>`
    		)
    }).join('')

    var cart=[];

    function addtocart(a){
    	cart.push({...categories[a]});
    	displaycart();
    }

    function delElement(a){
    	cart.splice(a,1);
    	displaycart();
    }

    function displaycart(a) {
    	 let j = 0, total=0;
    	 document.getElementById('count').innerHTML = cart.length;
    	 if (cart.length == 0) {
    	 	document.getElementById('cartItem').innerHTML ="Your Cart is Empty";
    	 	document.getElementById("total").innerHTML = "$ "+0+".00";
    	 }
    	 else{
    	 	document.getElementById('cartItem').innerHTML = cart.map((items)=>
    	 	{
    	 		var {image, title, price} = items;
    	 		total = total+price;
    	 		document.getElementById("total").innerHTML = "$ "+total+".00";
    	 		return (
    	 			`<div class="cart-item">
    	 			<div class="row-img">
    	 			<img class ='rowing' src=${image}>
    	 			</div>
    	 			<p style="font-size:12px;">${title}</p>
    	 			<h2 style="font-size:15px">${price}.00</h2>
    	 			`+
    	 			"<i class='btn' onclick='delElement("+ (j++) +")'>Delete</i></div>"
    	 			);
    	 	}).join('');
    	 }
    }

