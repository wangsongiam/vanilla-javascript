var iguanodon = {
	name: 'Iguanodon',
	height: '13m',
	weight: '3t',
};

console.log(iguanodon.name);
console.log(iguanodon.weight);

iguanodon.diet = 'Herbivore';
console.log(iguanodon);

var spinosaurus = {
	name: 'Spinosaurus',
	height: '15m',
	weight: '6t',
	diet: 'Carnivore'
};

var microraptor = {
	name: 'Microraptor',
	height: '80cm',
	weight: '1kg',
	diet: 'Carnivore'
};


var dinos = [iguanodon, spinosaurus, microraptor];

dinos.forEach(function(item) {
	document.write('<h2>' + item.name + '</h2>');
});
	

