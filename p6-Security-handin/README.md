# Security exercise

## Prerequisites
* A user can log in with the following credentials: 
    * __username__: test1
    * __password__: test

## Notes
- Token based authentication is provided using __Passport__ to access certain API calls
- Passwords are hashed and salted before storing them in a database using __bcrypt__
- Secrets for the backend, like database connection string and SSL certificates are found in the `/prefs` folder. The `config.js` file stores the secrets which is imported to the app.
Normally, the secrets file should never be made public, but in order to make the application testable, I chose to not ignore it when pushing.
- There is a login API which returns the token upon successful authentication. The token is stored in the local storage, which is not the safest way as malicious script could potentially access it. The right way to store tokens is to put it among the cookies with `HttpOnly` and `Secure` tags, so that JavaScript code cannot access it, and is only sent through secure connection.