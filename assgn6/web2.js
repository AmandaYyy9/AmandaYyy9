
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
        p7.style = "position:absolute;top:"+ (360+170*i) +"px;left:580px;font:16px Apple SD Gothic Neo;color: #ACACAC; text-decoration: underline;";
		p7.num = i;
		pic.appendChild(p7);

		// delete function
		p7.addEventListener("click", function() {
			var element = event.target;
			var pa=element.parentNode;
			var num = productList[element.num].q
			console.log(element.num);
			productList.splice(element.num, 1);
			localStorage.setItem("savedWishList", JSON.stringify(productList));
			console.log(element.num);
			// console.log(nowQ);
			onLoad();
		});


    }
}


function onLoad () {
	var amount = JSON.parse(localStorage.getItem("savedWishList")).length;
	var productList = JSON.parse(localStorage.getItem("savedWishList"));
	if (amount === 0){
		document.getElementById("empty").textContent = "Your list is empty";
	}
	drawPic(productList, amount);

	for (var i = 0; i < amount; i++) {
		console.log();
	}

	// total quantity
	var totalNumber = Number(JSON.parse(localStorage.getItem("savedTotalQuant")));

	document.getElementById("cq").textContent= totalNumber;


}