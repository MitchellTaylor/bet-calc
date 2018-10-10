/* --------------------------
All calculations for bet types

=+=+=+=
KEY
Keyword = codeword
=+=+=+=

Stake = userstake
First odd = oddOne (Second first odd = oddOne2 etc)
Second odd = oddTwo (Second second odd = oddTwo2 etc)
Returns = betReturns
Double returns = betDoubleReturns

-------------------------- */

// var singleEvent = document.getElementById("calculate1").addEventListener('click',buttonClick)

// function buttonClick(){

    
//         var numerator1 = document.getElementById("numerator1").value;
//         var stake = document.getElementById("stake").value;
//         var denominator1 = document.getElementById("denominator1").value;
//         var single = ((parseInt(numerator1) / parseInt(denominator1)) * stake) + stake;
    
//         document.getElementById("returnsResult").innerHTML = single;
    
//     }

// var stake = 4;
// var oddOne = 4;
// var oddTwo = 1;

// var betReturns = ((oddOne / oddTwo) * stake) + stake;
// var betDoubleReturns = ((oddOne / oddTwo) * betReturns) + betReturns;
// var betTrebleReturns = ((oddOne / oddTwo) * betDoubleReturns) + betDoubleReturns;
// var bet4FoldReturns = ((oddOne / oddTwo) * betTrebleReturns) + betTrebleReturns;
// var bet5FoldReturns = ((oddOne / oddTwo) * bet4FoldReturns) + bet4FoldReturns;
// var bet6FoldReturns = ((oddOne / oddTwo) * bet5FoldReturns) + bet5FoldReturns;

// var bet15Returns = (bet4FoldReturns) + (betTrebleReturns * 4) + (betDoubleReturns * 6) + (betReturns * 4); 
// var bet31Returns = (bet5FoldReturns) + (bet4FoldReturns * 5) + (betTrebleReturns * 10) + (betDoubleReturns * 10) + (betReturns * 5); 
// var bet63Returns = (bet6FoldReturns) + (bet5FoldReturns * 6) + (bet4FoldReturns * 15) + (betTrebleReturns * 20) + (betDoubleReturns * 15) + (betReturns * 6);

// var patentReturns = (betReturns * 3) + (betDoubleReturns * 3) + (betTrebleReturns);
// var trixieReturns = (betDoubleReturns * 3) + (betTrebleReturns);
// var yankeeReturns = (betDoubleReturns * 6) + (betTrebleReturns * 4) + (bet4FoldReturns);
// var canadianReturns = (betDoubleReturns * 10) + (betTrebleReturns * 10) + (bet4FoldReturns * 5) + (bet5FoldReturns);


//                                                         //Predefined stake of £4 at 4/1 returns these commented values
// console.log(betReturns + " - Single returns");          //20
// console.log(betDoubleReturns + " - Double returns");    //100
// console.log(betTrebleReturns + " - Treble returns");    //500
// console.log(bet4FoldReturns + " - Fourfold returns");   //2500
// console.log(bet5FoldReturns + " - Fivefold returns");   //12500
// console.log(bet6FoldReturns + " - Sixfold returns");    //62500

// console.log(bet15Returns + " - Lucky 15 returns");      //5180
// console.log(bet31Returns + " - Lucky 31 returns");      //31100
// console.log(bet63Returns + " - Lucky 63 returns");      //186620

// console.log(patentReturns + " - Patent returns");       //860
// console.log(trixieReturns + " - Trixie returns");       //800
// console.log(yankeeReturns + " - Yankee returns");       //5100
// console.log(canadianReturns + " - Canadian returns");   //31000


/* --------------------------

Single

((oddOne / oddTwo) * stake) + stake = betReturns (20)

-------------------------- */

/* --------------------------

Double

((oddOne / oddTwo) * stake) + stake = betReturns (20)
((oddOne2 / oddTwo2) * betReturns) + betReturns = betDoubleReturns (100)

-------------------------- */

/* --------------------------

Treble

((oddOne / oddTwo) * stake) + stake = betReturns (20)
((oddOne2 / oddTwo2) * betReturns) + betReturns = betDoubleReturns (100)
((oddOne3 / oddTwo3) * betDoubleReturns) + betDoubleReturns = betTrebleReturns (500)

-------------------------- */

/* --------------------------

Fourfold

((oddOne / oddTwo) * stake) + stake = betReturns (20)
((oddOne2 / oddTwo2) * betReturns) + betReturns = betDoubleReturns (100)
((oddOne3 / oddTwo3) * betDoubleReturns) + betDoubleReturns = betTrebleReturns (500)
((oddOne4 / oddTwo4) * betTrebleReturns) + betTrebleReturns = bet4FoldReturns (2500)

-------------------------- */

/* --------------------------

Lucky 15 (4 Singles, 6 Doubles, 4 Trebles & 1 Fourfold)

((oddOne / oddTwo) * stake) + stake = betReturns (20)
((oddOne2 / oddTwo2) * betReturns) + betReturns = betDoubleReturns (100)
((oddOne3 / oddTwo3) * betDoubleReturns) + betDoubleReturns = betTrebleReturns (500)
((oddOne4 / oddTwo4) * betTrebleReturns) + betTrebleReturns = bet4FoldReturns (2500)

bet4FoldReturns + betTrebleReturns + betDoubleReturns + betReturns = bet15Returns (5180)

-------------------------- */