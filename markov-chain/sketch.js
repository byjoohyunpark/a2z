let data;
let sentences, markov;
let alltxt;
let sentence;
let wrapper = [];
let val = [];
let initial;

function preload() {
    data = loadStrings('t.txt');
}

function setup() {
    noCanvas();

    // create a markov model w' n=16
    markov = new RiMarkov(16);

    // load text into the model
    markov.loadText(data.join(' '));


    for (let i = 0; i < (data.length + 1) / 2; i++) {
        sentence = data[i * 2];
        wrapper[i] = sentence;

        initial = createP(wrapper[i]);

        val[i] = RiTa.splitSentences(wrapper[i]);
        console.log(val[i].length);
    }

}



function mouseClicked() {

    document.body.innerHTML = '<h2>Variation on Barack Obama’s 2009 Nobel Peace Prize Speech</h2>'

    for (let i = 0; i < wrapper.length; i++) {

        sentences = markov.generateSentences(val[i].length);
        let final = join(sentences, ' ');
        createP(final);
    }


}
