
function put(animal, animalName = []) {
    const animalbreed = "dog";
    animalName.push(['cat', 'mouse', 'lizard']);
    animalName.push(animal);
    return animalName + " " + animalbreed;
}

console.log(put('lion'));

console.log(put('tiger'));
