const trafficTimer = (cb) => {
  setTimeout(() => {
    console.log('Red: Stop');
  }, 5000)
  cb()
}

  trafficTimer(() => {
    setTimeout(() => {
      console.log('Yellow: Ready');
      
      setTimeout(() => {
        console.log('Green: Go');
      }, 10000)
    }, 60000);
  });