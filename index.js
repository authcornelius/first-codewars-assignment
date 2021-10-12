function usdcny(usd){
    let finalConversion = usd * 6.75;
    let finalAns = `${finalConversion} Chinese Yuan`;
    return finalAns;
  }


function lovefunc(flower1, flower2){
  // moment of truth
  if (flower1 % 2 == 0 && flower2 % 2!==0){
    return true;
  }else if (flower1 % 2 !== 0 && flower2 % 2 ==0){
    return true;
  }else{
    return false;
  }
}


function solution(a, b){
  // your code here
  if (a.length > b.length){
    return b+a+b;
  }else if(a.length < b.length){
    return a+b+a;
  }else{
    return null;
  }
}
  