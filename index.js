
const yil = function (a) {  
    return( (a % 400 === 0) && (a % 100 !== 0) || (a % 4 === 0) ? 
    `${a} artik yildir`: `${a} artik yil degil`);}
    
     

  console.log(yil(2024));