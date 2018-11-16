let begin = 0; // when to start

while ( begin < 20 ) {
  //when to stop
  console.log(begin);
  begin = begin + 1 ; //how to get to next item
  if ((begin % 3 === 0)  && (begin % 5 !== 0)) {
    console.log("Fizz");
  } else if ((begin % 5 === 0) && (begin % 3 !== 0)) {
    console.log("Buzz");
  }  else if ((begin % 5 === 0) && (begin % 3 === 0)) {
    console.log("FizzBuzz");
  } else {
    console.log(begin);
  }
};
console.log("---------");

let x = -10;
while (x < 20) {
  console.log(x);
  x = x + 1;
};

console.log("---------");
let z = 10;
while (z < 41) {

  if (z % 2 === 0) {
    console.log(z);
  }
    z = z + 1;
}
console.log("---------");

let f = 300;
while ( f < 334 ) {

  if (f % 2 !== 0) {
    console.log(f)
  }
  f = f + 1;
}
console.log("---------");


let g = 5;
while (g < 51) {
  if ((g % 3 === 0) && (g % 5 === 0)) {
    console.log(g)
  }
  g = g + 1;
}

console.log("---------------");
let testing = 10;
for (let testing = 10; testing >=1; testing--) {console.log("testing");
}

console.log("---------------");
for (let i = 50; i >= 0; i--) {
  let message;
  if (i === 50) {
    message = "orbiter transfer T-${i} seconds"
  } else if (i === 31) {
    message = "ground launch t-${1} seconds"
  } else if (i === 16) {
    message = "active launch T-${1} seconds"
  } else if (i === 10) {
    message = "active main T-${1} seconds"
  } else if (i === 6) {
    message = "main engine T-${1} seconds"
  } else if (i === 0) {
    message = "solid rocket T-${1} seconds"
  }
  console.log(message ? message : "T-${1} seconds")
}

console.log("---------------");

var text = "ahceclwlxo";
for (var i = 0; i < text.length; i+=2) {
  console.log(text[i]);
};
console.log("--------------------");

var zodis = "labas";
for (var i = 0; i < zodis.length; i= i + 1) {
  console.log(zodis[i]);
};
console.log("------------");
var atbulai = "sabal";
for (var i = atbulai.length - 1; i >= 0; i--) {
  console.log(atbulai[i]);
};

console.log("------------");
let number = 5;
let total = 1;
for (let i = number; i >= 1; i--) {
  console.log("total value =>", total);
  console.log("i value =>", i);
  total = total * i ;
}
console.log("--------------");
for (let rows = 0; rows < 26; rows++) {
  for (let seats = 0; seats < 51; seats++) {
    console.log(`row ${rows} - seats ${seats}`)
  }
}
