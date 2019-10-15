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
        initial.parent('content')

        val[i] = RiTa.splitSentences(wrapper[i]);
    }

}

function reorganize() {
    document.querySelector('#content').innerHTML = ''
    for (let i = 0; i < wrapper.length; i++) {
        sentences = markov.generateSentences(val[i].length);
        let final = join(sentences, ' ');
        createP(final).parent('content');
    }
}
