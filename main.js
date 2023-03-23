function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    for(let j = 0; j < b.length; j++){
         bNum = b[j];
         if (a.indexOf(bNum) >= 0) {
        a.splice(a.indexOf(bNum), 1);
        }
    }      
  }
  return a;
}
console.log(arrayDiff([1, 2], [1]));
