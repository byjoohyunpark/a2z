// A2Z F18
// Daniel Shiffman
// http://shiffman.net/a2z
// https://github.com/shiffman/A2Z-F18

// Using the Mastodon node package
// https://github.com/vanita5/mastodon-api

var Mastodon = require('mastodon-api');
var config = require('./config.js');
var M = new Mastodon(config);
let rita = require('rita');
let rm, random, sentences;
let fs = require('fs');

var data = fs.readFileSync('dali.txt');
let txt = data.toString() ;
// console.log(txt);

rm = rita.RiMarkov(4);
rm.loadText(txt);


// tooter();
setInterval(tooter, 480 * 60 * 1000);

function tooter() {
  random = Math.floor(Math.random()*3) + 1;
  sentences = rm.generateSentences(random);
  let final = sentences.join(' ');

  const toot = {
    status: final
  }

  M.post('statuses', toot).
    then(response => {
      console.log(response.data.content);
    }).
    catch(error => console.log(error));

}

  








