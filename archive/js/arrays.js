var meatEaters = ['T-Rex', 'Spinosaurus', 'Velociraptor'];

meatEaters[0];
meatEaters[2];

console.log(meatEaters[2]);

meatEaters.push('Allosaurus');
console.log(meatEaters);

meatEaters.pop();
console.log(meatEaters);

meatEaters.shift();
console.log(meatEaters);

meatEaters.unshift('Pteranodon');
console.log(meatEaters);
console.log(meatEaters[2]);

document.write('<ul>');
meatEaters.forEach(function (coolthing) {
	document.write('<li>' + coolthing + '</li>');
});
document.write('</ul>');
