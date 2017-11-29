const getSleepHours = day => {
  switch (day) {
    	case 'monday':
      	return 8; // Enter how long did you sleep on Monday
      	break;
      case 'tuesday':
      	return 6; // Enter how long did you sleep on Tuesday
      	break;
      case 'wednesday':
      	return 5; // Enter how long did you sleep on Wednesday
      	break;
      case 'thurday':
      	return 10; // Enter how long did you sleep on Thursday
      	break;
      case 'friday':
      	return 12; // Enter how long did you sleep on Friday
      	break;
      case 'saturday':
      	return 3; // Enter how long did you sleep on Saturday
      	break;
      case 'sunday':
      	return 7; // Enter how long did you sleep on Sunday
      	break;
      default:
      	return 'Invalid day of the week';
      	break;
   };
}
const getActualSleepHours = () => {
  return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thurday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
}

const getIdealSleepHours = () => {
    let idealHours = 8; // Enter how  many hours of sleep is ideal each night and run the code!
  	return idealHours * 7;
}

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed by ' + (actualSleepHours - idealSleepHours) + ' hours');
  }  else {
    console.log('You should get some rest, ' + (idealSleepHours - actualSleepHours) + ' hours would be great');
  }};

calculateSleepDebt();