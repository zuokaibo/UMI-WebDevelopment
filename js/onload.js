var colors = ['green', 'red', 'yellow','white', 'pink'];

function displayColor() {
    document.getElementById('color').innerHTML = colors;
}

function addColor() {
    var color1 = prompt("add your favorite color");
    colors[colors.length] = color1;
    document.getElementById('color').innerHTML = colors;

}