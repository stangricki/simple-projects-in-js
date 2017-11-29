function getWhaleSentance(sentance) {
  let whaleSentance = [];
  for (let i = 0; i < sentance.length; i++) {
    switch (sentance[i]) {
      case 'a':
        whaleSentance.push('a');
        break;
      case 'e':
        whaleSentance.push('ee');
        break;
      case 'i':
        whaleSentance.push('i');
        break;
      case 'o':
        whaleSentance.push('o');
        break;
      case 'u':
        whaleSentance.push('uu');
        break;
      case ' ':
        whaleSentance.push(' ');
        break;
    }
  }
  console.log(whaleSentance.join('').toUpperCase());
};

getWhaleSentance('Turpentine and turtles'); // Enter here a sentance to change it in language of whales and run the code!
