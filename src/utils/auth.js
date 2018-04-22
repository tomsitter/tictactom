import auth0 from 'auth0-js'
import history from './history'

export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: 'waq.auth0.com',
    clientID: 'iVSI2f3KM9YBcsb3W7lBaIsHIRo0Foty',
    redirectUri: 'http://localhost:3000/profile',
    audience: 'https://waq.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid email'
  });
  
  login() {
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.testHistory = this.testHistory.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/profile');
      } else if (err) {
        history.replace('/profile');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/profile');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    window.location.reload()
    // navigate to the home route
    history.replace('/profile');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getToken() {
      let idToken = localStorage.getItem('id_token')
      if (this.isAuthenticated() && idToken) {
        return idToken
      } else {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        return false
      }
  }

  testHistory() {
    history.replace("/profile")
  }

}