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

/* --------------------------

Single

((oddOne / oddTwo) * stake) + stake = betReturns

-------------------------- */

/* -------------------------

Double

((oddOne / oddTwo) * stake) + stake = betReturns
((oddOne2 / oddTwo2)) * betReturns) + betReturns = betDoubleReturns

-------------------------- */

/* -------------------------

Treble

((oddOne / oddTwo) * stake) + stake = betReturns
((oddOne2 / oddTwo2)) * betReturns) + betReturns = betDoubleReturns
((oddOne3 / oddTwo3)) * betDoubleReturns) + betDoubleReturns = betTrebleReturns

-------------------------- */

/* -------------------------

Lucky 15 (4 Singles, 6 Doubles, 6 Trebles & 1 Fourfold)

((oddOne / oddTwo) * stake) + stake = betReturns
((oddOne2 / oddTwo2)) * betReturns) + betReturns = betDoubleReturns
((oddOne3 / oddTwo3)) * betDoubleReturns) + betDoubleReturns = betTrebleReturns
((oddOne4 / oddTwo4)) * betTrebleReturns) + betTrebleReturns = bet4FoldReturns

bet4FoldReturns + betTrebleReturns + betDoubleReturns + betReturns = bet15Returns

-------------------------- */