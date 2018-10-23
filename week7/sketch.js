// A2Z F18
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F18

// This is the same sketch as the first example but just uses the RiTa library

// The Markov Generator object
let generator;

function setup() {
  noCanvas();
  // The Markov Generator
  // First argument is N-gram length, second argument is max length of generated text
  generator = new RiMarkov(3);
  generator.loadFrom('data/data.txt');
  // Set up a button
  let button = select('#button');
  button.mousePressed(generate);
}

function generate() {
  // Display the generated text

//    let output = select('#name');
  let text = generator.generateSentences(4);
    let output = document.createElement('p');
    output.innerHTML = text[0];
    let list = document.querySelector('#name');
    list.insertBefore(output, list.childNodes[0]);
}
