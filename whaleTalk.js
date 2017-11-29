function getWhaleSentance(sentance) {
  let whaleSentance = [];
  for (let i = 0; i < sentance.length; i++) {
    switch (sentance[i]) {
      case 'a':
        whaleSentance.push('A');
        break;
      case 'e':
        whaleSentance.push('EE');
        break;
      case 'i':
        whaleSentance.push('I');
        break;
      case 'o':
        whaleSentance.push('O');
        break;
      case 'u':
        whaleSentance.push('UU');
        break;
      case ' ':
        whaleSentance.push(' ');
        break;
    }
  }
  console.log(whaleSentance.join(''));
};

getWhaleSentance('Turpentine and turtles'); // Enter here a sentance to change it in language of whales and run the code!
