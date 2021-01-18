import sha256 from 'crypto-js/sha256'
/*
    This function looks if the user exist in the localStorage, from credentials, else, it returns null
 */
export const getUserFromCredentials = (username, password ) => {
    const users = JSON.parse(localStorage.getItem(''))
    let user=null;
    //get first user with valid credentials
    if(users === null){
        return null
    }
    users.map(_user => {
        if (username === _user.username && sha256(password) === _user.password && !user){
            _user=user
        }
    })
    return user

}
/*
    Get user connection
 */
export const getUserFromCookies = () => {
    return null;
}
/*
    Add one new user to the local storage
 */
export const createUser = (user) => {
    const _users = JSON.parse(localStorage.getItem(''))
    localStorage.setItem('users',JSON.stringify([user, ..._users]))
}


