// Object Constructors
function yellow(){
	this.n = "After School Special";
	this.c = "y";
	this.image1 = "./imgs/y1.png";
	this.image2 = "./imgs/y2.png";
	this.image3 = "./imgs/z.png";
}

function pink(){
	this.n = "Morning Haze";
	this.c = "p";
	this.image1 = "./imgs/p1.png";
	this.image2 = "./imgs/p2.png";
	this.image3 = "./imgs/z.png";
}

function blue(){
	this.n = "Cozy Denim";
	this.c = "b";
	this.image1 = "./imgs/b1.png";
	this.image2 = "./imgs/b2.png";
	this.image3 = "./imgs/z.png";
}

function white(){
	this.n = "Rainy Day";
	this.c = "w";
	this.image1 = "./imgs/w1.png";
	this.image2 = "./imgs/w2.png";
	this.image3 = "./imgs/z.png";
}

function item(iFilling,iQuant,iColor,iName){
	this.f=iFilling;
	this.q=iQuant;
	this.c=iColor;
	this.n=iName;

}



// Document Load
function onLoad () {
	console.log("a");
	// initial value
	var product = new pink();
	var picCount=1;

	// keep track of total quantity
	var tq = 0;
	localStorage.setItem("savedTotalQuant", JSON.stringify(tq)); //temporary:clear storage 
	var totalQuant=JSON.parse(localStorage.getItem("savedTotalQuant"));
	if (totalQuant==null){
		localStorage.setItem("savedTotalQuant", JSON.stringify(tq));
	}
	// keep track of the items added in array 
	var list=[];
	localStorage.setItem("savedList", JSON.stringify(list));  //temporary:clear storage 
	var nowList = JSON.parse(localStorage.getItem("savedList")); 
	if (nowList==null){
		localStorage.setItem("savedList", JSON.stringify(list));
	}

	// store color, filling, and quantity
	document.getElementById("atc").addEventListener("click", function() {
		// get values
		var nowList = JSON.parse(localStorage.getItem("savedList"));
		var nowTotalQuant = Number(JSON.parse(localStorage.getItem("savedTotalQuant")));
		var filling=document.getElementById("f").value;
		var quant=Number(document.getElementById("q").value);

		// push to item array
		nowList.push(new item(filling,quant,product.c,product.n));
		localStorage.setItem("savedList", JSON.stringify(nowList));

		// push total quantity 
		var s = nowTotalQuant+quant;
		console.log(s);
		localStorage.setItem("savedTotalQuant", JSON.stringify(s));

		document.getElementById("cartQuant").textContent= s;

	});

	// initial pictures and color
	document.getElementById("circle").setAttribute("src", "./imgs/red.png" );
	document.getElementById("cartQuant").textContent= JSON.parse(localStorage.getItem("savedTotalQuant"));
	document.getElementById("colorName").textContent = product.n;
	console.log(product.image1);
	document.getElementById("picture").setAttribute("src", product.image1);
	console.log(product.image1);
	document.getElementById("small1").setAttribute("src", product.image1);
	document.getElementById("small2").setAttribute("src", product.image2);

	// click on left arrow
	document.getElementById("leftArrow").addEventListener("click", function() {
	if (picCount>1){
	picCount-=1;}
	if (picCount === 1) 
	  {
	  	document.getElementById("picture").setAttribute("src", product.image1);
	  } 
	  else if (picCount === 2) 
	  {
	    document.getElementById("picture").setAttribute("src", product.image2);
	  } 
	  else if(picCount === 3)
	  {
	  	document.getElementById("picture").setAttribute("src", "./imgs/z.png");
	  }
	});
	// click on right arrow
	document.getElementById("rightArrow").addEventListener("click", function() {
	if (picCount<3){
	picCount+=1;}
	if (picCount === 1) 
	  {
	  	document.getElementById("picture").setAttribute("src", product.image1);
	  	console.log(product.image1);
	  } 
	  else if (picCount === 2) 
	  {
	    document.getElementById("picture").setAttribute("src", product.image2);
	    console.log(product.image2);
	  } 
	  else if(picCount === 3)
	  {
	  	document.getElementById("picture").setAttribute("src", "./imgs/z.png");
	  	console.log("./imgs/z.png");
	  }
	});

	// click on color yellow
	document.getElementById("b-y").addEventListener("click", function() {
		product = new yellow();
		document.getElementById("colorName").textContent = product.n;
		document.getElementById("picture").setAttribute("src", product.image1);
		document.getElementById("small1").setAttribute("src", product.image1);
		document.getElementById("small2").setAttribute("src", product.image2);
	});
	// click on color pink
	document.getElementById("b-p").addEventListener("click", function() {
		product = new pink();
		document.getElementById("colorName").textContent = product.n;
		document.getElementById("picture").setAttribute("src", product.image1);
		document.getElementById("small1").setAttribute("src", product.image1);
		document.getElementById("small2").setAttribute("src", product.image2);
	});
	// click on color blue
	document.getElementById("b-b").addEventListener("click", function() {
		product = new blue();
		document.getElementById("colorName").textContent = product.n;
		document.getElementById("picture").setAttribute("src", product.image1);
		document.getElementById("small1").setAttribute("src", product.image1);
		document.getElementById("small2").setAttribute("src", product.image2);
	});
	// click on color white
	document.getElementById("b-w").addEventListener("click", function() {
		product = new white();
		document.getElementById("colorName").textContent = product.n;
		document.getElementById("picture").setAttribute("src", product.image1);
		document.getElementById("small1").setAttribute("src", product.image1);
		document.getElementById("small2").setAttribute("src", product.image2);
	});

	// click on first small picture 
	document.getElementById("small1").addEventListener("click", function() {
		document.getElementById("picture").setAttribute("src", product.image1);
		picCount = 1;
	});
	// click on second small picture 
	document.getElementById("small2").addEventListener("click", function() {
		document.getElementById("picture").setAttribute("src", product.image2);
		picCount = 2;
	});
	// click on third small picture 
	document.getElementById("small3").addEventListener("click", function() {
		document.getElementById("picture").setAttribute("src", "./imgs/z.png");
		picCount = 3;
	});

};








