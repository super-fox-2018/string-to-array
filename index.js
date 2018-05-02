function Stringtoarray(kata) {

  kata = kata.split(',')


  var dalam = [];
  var luar = [];

  for (let k = 0; k < kata.length; k++) {
    dalam = [];
    for (let l = 0; l < 1; l++) {
      dalam = (kata[k].split(''));
    }

    luar.push(dalam);
  }


  return luar



}
console.log(Stringtoarray("aqrst,ukaei,ffooo"))
