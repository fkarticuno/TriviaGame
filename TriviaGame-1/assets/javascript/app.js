

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
    ["42","eat, sh*t and die","Glory To The Highest","Subversion Of Death"],
    ["Rayleigh Scattering", "Wizard Magic", "Blue Sunlight", "Colorblindness"],
    ["Arbys","Burger King","WackArnolds","The Mighty Ducks"]

];
var qrow = 0;
var qrowchild = 0;

var randint = Math.floor((Math.random() * 100) + 1);

function rando() {
    return Math.floor((Math.random() * 100) + 1);
}
function buildMain() {
    for (var i = 0; i < questions.length; i++) {
        qrow = $("<div>");
        qrow.addClass("row" + "question" + i);
        qrow.text(i + " " + questions[i]);
        qrowchild = $("<div>");
        qrowchild.addClass("answers" + i);
        for (j=0; j<answers[i].length; j++) {
            qrowchild.text(qrowchild.text()+ i + " " + answers[i][j]);
        }
        $("#bodyactual").append(qrow).append(qrowchild);
        
    };
};
buildMain();


console.log(qrow + "\n" + qrowchild + "\n" + questions);