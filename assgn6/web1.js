
// set the variables 
// draw the pictures of saved products
function drawPic(productList, amount) {
	var pic = document.getElementById("pp");
	pic.innerHTML = "";

    for (i=0;i<amount;i++) {

    	// image
        var p=document.createElement("img");
        var c= productList[i].c
        var q= productList[i].q

        console.log(c);
        p.src="./imgs/"+c+"1.png";
        p.width = "200";
        p.height = "150";
        p.position = "absolute";
        p.style = "position:absolute;top:"+ (250+170*i) +"px;left:90px;";
        pic.appendChild(p);

        // type
        var p1=document.createElement("div");
        var t=document.createTextNode("Couch Pillow");
        p1.appendChild(t);
        p1.style = "position:absolute;top:"+ (260+170*i) +"px;left:330px;font:20px Apple SD Gothic Neo;color: #747373;";
        pic.appendChild(p1);

        // price
        var p2=document.createElement("div");
        var t2=document.createTextNode("$ 35");
        p2.appendChild(t2);
        p2.style = "position:absolute;top:"+ (300+170*i) +"px;left:330px;font:16px Apple SD Gothic Neo;color: #ACACAC;";
        pic.appendChild(p2);

        // color
        var p3=document.createElement("div");
        var t3=document.createTextNode("Color: "+productList[i].n);
        p3.appendChild(t3);
        p3.style = "position:absolute;top:"+ (330+170*i) +"px;left:330px;font:16px Apple SD Gothic Neo;color: #ACACAC;";
        pic.appendChild(p3);

        // filling
        var p4=document.createElement("div");
        var t4=document.createTextNode("Filling: "+productList[i].f);
        p4.appendChild(t4);
        p4.style = "position:absolute;top:"+ (360+170*i) +"px;left:330px;font:16px Apple SD Gothic Neo;color: #ACACAC;";
        pic.appendChild(p4);

        // quantity
        var p5=document.createElement("div");
        var t5=document.createTextNode("Quantity: ");
        p5.appendChild(t5);
        p5.style = "position:absolute;top:"+ (300+170*i) +"px;left:580px;font:16px Apple SD Gothic Neo;color: #ACACAC;";
        pic.appendChild(p5);

        // number
        var p9=document.createElement("div");
        var t9=document.createTextNode(productList[i].q);
        p9.appendChild(t9);
        p9.style = "position:absolute;top:"+ (300+170*i) +"px;left:650px;font:16px Apple SD Gothic Neo;color: #ACACAC;";
        pic.appendChild(p9);

        // edit
        var p6=document.createElement("div");
        var t6=document.createTextNode("Edit");
        p6.appendChild(t6);
        p6.style = "position:absolute;top:"+ (330+170*i) +"px;left:580px;font:16px Apple SD Gothic Neo;color: #ACACAC; text-decoration: underline;";
        pic.appendChild(p6);

        // delete
        var p7=document.createElement("div");
        var t7=document.createTextNode("Delete");
        p7.appendChild(t7);
        p7.id="delete";
        p7.style = "position:absolute;top:"+ (330+170*i) +"px;left:630px;font:16px Apple SD Gothic Neo;color: #ACACAC; text-decoration: underline;";
		p7.num = i;
		pic.appendChild(p7);

		// delete function
		p7.addEventListener("click", function() {
			var element = event.target;
			var pa=element.parentNode;
			var num = productList[element.num].q
			console.log(element.num);
			productList.splice(element.num, 1);
			localStorage.setItem("savedList", JSON.stringify(productList));
			console.log(element.num);
			var nowQ = Number(JSON.parse(localStorage.getItem("savedTotalQuant")))-num;
			// console.log(nowQ);
			localStorage.setItem("savedTotalQuant", JSON.stringify(nowQ));
			document.getElementById("cq").textContent= nowQ;
			// console.log(nowQ);
			onLoad();
		});

		// like
		var p8=document.createElement("div");
        var t8=document.createTextNode("Add to wish list");
        p8.appendChild(t8);
        p8.style = "position:absolute;top:"+ (360+170*i) +"px;left:580px;font:16px Apple SD Gothic Neo;color: #ACACAC; text-decoration: underline;";
        pic.appendChild(p8);

    }
}


function onLoad () {
	var amount = JSON.parse(localStorage.getItem("savedList")).length;
	var productList = JSON.parse(localStorage.getItem("savedList"));
	if (amount === 0){
		document.getElementById("empty").textContent = "Your cart is empty";
	}
	drawPic(productList, amount);

	for (var i = 0; i < amount; i++) {
		console.log();
	}

	// total quantity
	var totalNumber = Number(JSON.parse(localStorage.getItem("savedTotalQuant")));
	var subtotal = totalNumber * 35;
	var tax = Math.round(subtotal * 0.03 * 10) / 10;
	var tt = subtotal+tax+5;
	document.getElementById("cq").textContent= totalNumber;
	document.getElementById("st").textContent = "$"+subtotal;
	document.getElementById("tax").textContent = "$"+tax;
	document.getElementById("total").textContent = "$"+tt;

}