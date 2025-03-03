const greetings = (name) => {
  const correctTime = new Date();
  const hours = correctTime.getHours();

  if (hours >= 0 && hours <= 11){
    console.log(`Good morning ${name}! Have a great start of your day.`);
  }else if(hours >= 12 && hours <= 16){
    console.log(`Good afternoon ${name}! Hope your day is going well so far?`);
  }else{
    console.log(`Good evening ${name}! Hope you have had a wonderful day today.`);
  }
}

greetings('Christopher Ichiogu');

