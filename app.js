

// function userAnswer1(){
//     var a = document.getElementById("ans1");
//     var userAns = a.value;
//     if (userAns === "12")
// {
//     alert("Correct answer");
// }else{
//     alert("Wrong answer");
// }

// }


// function userAnswer2(){
//     var a = document.getElementById("ans2");
//     var userAns = a.value ; 
//     if (userAns === "12")
//     {
//         alert("Correct answer");
//     }else{
//         alert("Wrong answer");
//     }
    
// }



// function userAnswer3(){
//     var a = document.getElementById("ans3");
//     var userAns = a.value ; 
//     if (userAns === "12")
//     {
//         alert("Correct answer");
//     }else{
//         alert("Wrong answer");
//     }
    
// }


// var extra = 0;

// function alertBox(){
//     if (extra === 0){
//         alert("You didn't answer the given question.. ")
//     }
// }

function wrongAnswer1(){
    extra = 1;
    var b = document.getElementById('wA1');
    b.style.backgroundColor = '#FF243B ';

    var a = document.getElementById('rA');
    a.style.backgroundColor = '#286E29';

    document.getElementById('wA3').disabled = true ;
    document.getElementById('wA2').disabled = true ;
    document.getElementById('wA4').disabled = true ;

}


function wrongAnswer2(){
    extra = 1;

    var b = document.getElementById('wA2');
    b.style.backgroundColor = '#FF243B ';

    var a = document.getElementById('rA');
    a.style.backgroundColor = '#286E29';

    document.getElementById('wA1').disabled = true ;
    document.getElementById('wA3').disabled = true ;
    document.getElementById('wA4').disabled = true ;

}

function wrongAnswer3(){
    extra = 1;

    var b = document.getElementById('wA3');
    b.style.backgroundColor = '#FF243B ';

    var a = document.getElementById('rA');
    a.style.backgroundColor = '#286E29';

    document.getElementById('wA1').disabled = true ;
    document.getElementById('wA2').disabled = true ;
    document.getElementById('wA4').disabled = true ;

}



function rightAnswer(){
    extra = 1;

    var a = document.getElementById('rA');
    a.style.backgroundColor = '#286E29';
    document.getElementById('wA1').disabled = true ;
    document.getElementById('wA2').disabled = true ;
    document.getElementById('wA3').disabled = true ;


}





