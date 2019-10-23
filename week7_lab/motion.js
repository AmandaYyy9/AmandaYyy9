function MyAnimal(name, age) {
  this.name = name;
  this.age = age;
  this.type = “chicken”;
  this.image = “chicken.jpg”;
}

function MyAnimal(name, age) {
  this.name = name;
  this.age = age;
  this.type = sheep;
  this.image = sheep.jpg”;
}

function MyAnimal(name, age) {
  this.name = name;
  this.age = age;
  this.type = “rabbit”;
  this.image = rabbit.jpg”;
}

var animals = [new chicken(), new sheep(), new rabbit()];
var names = ["Cup", "iPhone", "Desk", "Wall","Coat", "Class", "Mango", "Wheel", "Whiteboard"];

function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  var randomIdx = getRandomIndex(10);
  return randomIdx;
}


function generateRandomAnimal() {
  var index = getRandomIndex(animals.length);
  var animal = animals[index];
  if (animal instanceof chicken) {
  	return new chicken(generateRandomName(), generateRandomAge());
  }
   else if (animal instanceof sheep) {
  	return new sheep(generateRandomName(), generateRandomAge());
  }
   else if (animal instanceof rabbit) {
  	return new sheep(generateRandomName(), generateRandomAge());
  }
}

function onLoad() {
	  var animal = generateRandomAnimal();
	  console.log(animal)
	  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
	  document.getElementById("animal-img").setAttribute("src", animal.image)
	};





