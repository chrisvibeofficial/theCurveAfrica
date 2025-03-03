const loveCalculator = (male, female) => {
  const generatedNumberForMan = Math.floor(Math.random() * 100);
  const generatedNumberForWoman = Math.floor(Math.random() * 100);
  const averageScore = (generatedNumberForMan + generatedNumberForWoman) / 2;  

  if (averageScore >= 90) {
    console.log(`Love from ${male}: ${generatedNumberForMan}\nLove from ${female}: ${generatedNumberForWoman}\nLove Percentage: ${averageScore}%\n`);
    setTimeout(() => {
      console.log("You're compatible! Please mary...");
    }, 2000);
  }else if (averageScore > 90 && averageScore >= 75) {
    console.log(`Love from ${male}: ${generatedNumberForMan}\nLove from ${female}: ${generatedNumberForWoman}\nLove Percentage: ${averageScore}%\n`);
    setTimeout(() => {
      console.log("You're slightly compatible, you can still mary...");
    }, 2000);
  }else if (averageScore < 75 && averageScore >= 55) {
    console.log(`Love from ${male}: ${generatedNumberForMan}\nLove from ${female}: ${generatedNumberForWoman}\nLove Percentage: ${averageScore}%\n`);
    setTimeout(() => {
      console.log("You're not compatible! Please break up...");
    }, 2000);
  }else if (averageScore < 55 && averageScore >= 0) {
    console.log(`Love from ${male}: ${generatedNumberForMan}\nLove from ${female}: ${generatedNumberForWoman}\nLove Percentage: ${averageScore}%\n`);
    setTimeout(() => {
      console.log(`Incompatible!!! ${female} run for you life oh, because ${male} can never find love`);
    }, 2000);
  }
}

loveCalculator('Kelvin', 'Daniella');