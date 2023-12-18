let score = 0;
let points = 10;

let quesitons = document.body.childNodes;
let questionIterator = 1;

function correct(button){
    score+=points;
    button.style.backgroundColor = "green";
    let parent = button.parentNode;
    let siblings = parent.childNodes;
    siblings.forEach(element => {
        element.disabled = true;
    });
    questionIterator+=2;
    quesitons[questionIterator].scrollIntoView({
behavior: "smooth",
block: "end",
inline: "nearest",

    });
}

function incorrect(button){
    score-=10;
    button.style.backgroundColor = "red";
    button.style.backgroundColor = "green";
    let parent = button.parentNode;
    let siblings = parent.childNodes;
    siblings.forEach(element => {
        element.disabled = true;
    });
    questionIterator-=2;
    quesitons[questionIterator].scrollIntoView({
behavior: "smooth",
block: "end",
inline: "nearest",
    });
    
}
function calculateScore(button){
    let grade = '';
    if(score <= 100 && score >= 90){
    button.style.color = 'green'
    grade = 'A';
    }else if(score < 90 && score >= 80){
    button.style.color = 'yellow'
    grade = 'B';
    }else if(score < 80 && score >= 70){
        button.style.color = 'orange'
        grade = 'C';
    }else if(score < 70 && score >= 60 ){
        button.style.color = 'brown';
        grade = 'D';
    }else{
        button.style.color = 'red';
        grade = 'F';
    }
    button.innerHTML = grade +"; " +score;
}
