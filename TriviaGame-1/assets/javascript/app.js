

var questions = [
    "Who let the dogs out?",
    "Whats for dinner?",
    "what is the color of darkness?",
    "what is the meaning of life?",
    "Why is the sky blue?",
    "Who has the meats?",
]
var answers = [
    ["Baha Men","Shaggy","Scooby","Obama"],
    ["Beef","Turkey","Mashed Grapes","Pachirisu"],
    ["Sanguine, My Brother","Death","Talos","The Deepest Black"],
    ["42","Eat, Sh*t and Die","Glory To The Highest","Subversion Of Death"],
    ["Rayleigh Scattering", "Wizard Magic", "Blue Sunlight", "Colorblindness"],
    ["Arbys","Burger King","WackArnolds","The Mighty Ducks"]

];
var qrow = 0;
var qrowchild = 0;
var buildRadio = 0;

var randint = Math.floor((Math.random() * 100) + 1);
//  randomizes answer order
function rando() {
    return Math.floor((Math.random() * 100) + 1);
}


//<option value='arbys'>arbys</option>


//   Builds question/answer body field
function buildMain() {
    for (var i = 0; i < questions.length; i++) {
        qrow = $("<div>");
        qrow.addClass("row" + "question" + i);
        qrow.text(i + " " + questions[i]);
        qrowchild = $("<div>");
        qrowchild.addClass("answers" + i);

        
        for (j=0; j<answers[i].length; j++) {
            //  normal typed with           "string"+var+"string"
            //buildRadio = "<input type='radio' value="+j+" name='opt"+i+"'>" + answers[i][j] + "</input>"
            //   https://campushippo.com/lessons/how-to-do-string-interpolation-with-javascript-7854ef9d
            //   string interpolated with   `text ${variable}`
            buildRadio = `<span><input type='radio' value=${j} name='opt${i}'>${answers[i][j]}</input></span>`
            qrowchild.html(`${qrowchild.html()}Q:${i}A:${j} ${buildRadio}`);
        }
        $("#bodyactual").append(qrow).append(qrowchild);
        //buildOpt(answers[i]);
    };
};
//  Does the thing
buildMain();


//console.log(qrow + "\n" + qrowchild + "\n" + questions);