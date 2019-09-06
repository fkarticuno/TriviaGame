
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

//  initialize question row which will hold questions
var qrow = 0;
//  initialize child of question row which will hold answeres
var qrowchild = 0;
//  initialize variable to = <input type='radio'.../> to wrap answers in radio groups
var buildRadio = 0;
//  initialize random integer to randomizes answer order with rando()
var randint = 0;

//  potentially randomizes output to mix up answers each time quiz is run
//  may extend to randomize questions as well
function rando() {
    return Math.floor((Math.random() * 100) + 1);
}

//   Builds question/answer body field
function buildMain() {
    //  iterates to create and build one div.row with a div.answers-iterative child
    for (var i = 0; i < questions.length; i++) {
        qrow = $("<div>");
        qrow.addClass("row" + "question" + i);
        qrow.text(i + " " + questions[i]);
        qrowchild = $("<div>");
        qrowchild.addClass("answers" + i);

        //  iterates to create and build in-line spans of <input type='radio'.../> with answers
        for (j=0; j<answers[i].length; j++) {
            //  normal typed with           "string"+var+"string"
            //buildRadio = "<input type='radio' value="+j+" name='opt"+i+"'>" + answers[i][j] + "</input>"
            //   https://campushippo.com/lessons/how-to-do-string-interpolation-with-javascript-7854ef9d
            //   string interpolated with   `text ${variable}`
            buildRadio = `<span><input type='radio' value=${j} name='opt${i}' id=${answers[i][j]} >${answers[i][j]}</input></span>`
            qrowchild.html(`${qrowchild.html()}Q:${i}A:${j} ${buildRadio}`);
        }
        //  appends question row with children to #bodyactual 
        $("#bodyactual").append(qrow).append(qrowchild);
        
        //  =====================================================================
        //  dead call used to wrap answers in <input type='radio'.../> 
        //  however it returned [objects] instead of [strings] and did not
        //  work with qrowchild.html(qrowchild.html()+buildOpt(answers[i][j]))
        //  expected output = <div...><input...>'arbys'</input></div>
        //  actual output = <div...>[object][object]</div>
        //buildOpt(answers[i]);
        //  =====================================================================
    };
};


 $( document ).ready(function() {
    console.log( "ready!" );
        //  This did not work, how do I find out if a button is selected or not?
        // Used as reference https://www.w3schools.com/jsref/prop_radio_checked.asp
    if ($('#Beef').attr('checked') == true) {
        console.log("its checked")
    }
    if ($('#Beef').attr('checked') == false) {
            console.log("its not checked")
    };
});


//  calls build main to fill #bodyactual with iterated content
buildMain();


//console.log(qrow + "\n" + qrowchild + "\n" + questions);