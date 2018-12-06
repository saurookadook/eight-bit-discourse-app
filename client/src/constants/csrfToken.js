let token = () => {
  if(!localStorage.getItem('token')) {
    localStorage.setItem('token', '');
  }
}