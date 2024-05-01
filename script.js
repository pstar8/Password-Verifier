// Javascript here

function myFunction() {
  let password = prompt('Enter Password');
  console.log(password);
  if (password.length < 6) {
    console.log('Password is too short!!! Change it!');
    return password.length;
  } else if (password.length > 6 && password.length < 8) {
    console.log('Password is poor, but manageabele. Change it abeg!');
    return password.length;
  } else if (password.length > 8 && password.length < 10) {
    console.log('Fair password');
    return password.length;
  } else if (password.length > 10) {
    console.log('Very strong password. Well done!!!');
    return password.length;
  }
}
