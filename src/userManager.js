import sha256 from 'crypto-js/sha256'
/*
    This function looks if the user exist in the localStorage, from credentials, else, it returns null
 */
export const getUserFromCredentials = (username, password, fromSession=false ) => {
    const users = JSON.parse(localStorage.getItem('users'))
    let user=null;
    //get first user with valid credentials
    if(users === null){
        return null
    }
    users.map(_user => {
        if (username === _user.username && password === _user.password && !user){
            user=_user
        }
    })
    if(!fromSession){
        sessionStorage.setItem('user', JSON.stringify(user))
    }
    console.log(user)
    return user

}
export const logout = () =>{
    sessionStorage.removeItem('user')
}
/*
    Get user connection
 */
export const getUserFromCookies = () => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    if(user != null ){
        return getUserFromCredentials(user.username, user.password, true)
    }
    return null;
}
/*
    Add one new user to the local storage
 */
export const createUser = (user) => {
    const _users = JSON.parse(localStorage.getItem('users'))
    let message={
        success: true
    }
    if(_users) {
        _users.map(_user => {
            if (user.username === _user.username){
                message= {
                    success: false,
                    message: 'Username already used'
                }
            }
        })
        if(message.success){
            localStorage.setItem('users', JSON.stringify([user, ..._users]))
        }
        return message
    }
    else{
        localStorage.setItem('users', JSON.stringify([user]))
        return message
    }
}


