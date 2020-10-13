function diagonalDifference(matriz) {
  let left = 0;
  let rigth = matriz[0].length-1;
  let sumLeft = 0;
  let sumRigth = 0;
  
  for (let line = 0; line < matriz.length; line++){
    for (let column = left;column <= left;column++){
      sumLeft += matriz[line][column];
    }
    
    for(let column = rigth; column == rigth; column--){
      sumRigth += matriz[line][column];
    }
    
    left++;
    rigth--;
   }
  
  return sumLeft - sumRigth;
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];

diagonalDifference(matriz);
