
// set the variables 
var amount = JSON.parse(localStorage.getItem("savedList")).length;
console.log(amount);
var productList = JSON.parse(localStorage.getItem("savedList"));
console.log(productList)

// draw the pictures of saved products
function drawPic() {
	console.log("xxx");
	var div = document.getElementById("pp");
	div.innerHTML = ""; 

    for (i=1;i<=amount;i++) {
        var p=document.createElement("img");
        var c= productList[i-1].c
        console.log(c);
        p.src="./imgs/"+c+"1.png";
        p.width = "200";
        p.height = "150";
        
        p.position = "absolute";
        p.style = "position:absolute;top:"+ (250+170*(i-1)) +"px;left:90px;";
        div.appendChild(p);

    }

}


function onLoad () {
	console.log(JSON.parse(localStorage.getItem("savedList")));
	if (productList.length === 0){
		document.getElementById("empty").textContent = "Your cart is empty";
	}
	drawPic();
}