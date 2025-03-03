const loginDetails = (username, password) => {
  const correctUsername = 'chrisvibe';
  const correctPassword = 486750;

  if (username === correctUsername && password === correctPassword){
    console.log('login successfully');
  }else if (username ===! correctUsername || password === correctPassword){
    console.log('username is not correct');
  }else if(username === correctUsername || password ===! correctPassword){
    console.log('password is not correct');
  }else {
    console.log('invalid credentials')
  }

}

loginDetails('vinicius', 2345672345);