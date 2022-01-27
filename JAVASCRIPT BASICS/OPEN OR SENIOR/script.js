function openOrSenior(...args){
    let minHandicap = -2;
    let maxHandicap = 26;
    let minSeniorAge = 55;
    let minSeniorHandicap = 7;
    let memberArray = [];

    args.forEach((arg) => {
        if(arg[0] >= minSeniorAge && arg[1] > minSeniorHandicap) {
            memberArray.push('Senior');

        } else {
            memberArray.push('Open')
        }
    });

    return console.log(memberArray);
}

  openOrSenior([18,20],[45,2],[61,12],[37,6],[21,21],[78,9]);
