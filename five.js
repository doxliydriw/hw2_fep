let first_nmbr = prompt("Please enter 5 digit number to split", "number#1");
res = []
for (i in first_nmbr) {
    res +=  first_nmbr[i] + ' '
}
alert('Split result is ' + res)