import sha256 from 'crypto-js/sha256'

//Initials users for the demo
const INITIALS_USERS = [
    {
        id: 4,
        username: "Julien",
        password: "password",
        firstname: "Julien",
        lastname: "Thomas",
        instruments: [
            'guitar',
            'piano'
        ],
        sexe: "m",
        age: 22
    },
    {
        id: 3,
        username: "Cartesis",
        password:"password",
        firstname: "Hugo",
        lastname: "Danet",
        instruments: [
            'guitar',
            'beatmaker'
        ],
        sexe: "m",
        age: 21
    },
    {
        id: 2,
        username: "Issa",
        password:"password",
        firstname: "Issa",
        lastname: "Issa",
        instruments: [
            'guitar',
            'singer'
        ],
        sexe: "m",
        age: 21
    }
    ]

/*
    This function looks if the user exist in the localStorage, from credentials, else, it returns null
 */
export const getUserFromCredentials = (username, password, fromSession=false ) => {
    const users = JSON.parse(localStorage.getItem('users')) || INITIALS_USERS
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
    return user

}
export const logout = () =>{
    sessionStorage.removeItem('user')
}
/*
    Get user connection
    frist, we pass through the session
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
    //generate id
    user = {
        id: Math.floor(Math.random()*9),
        ...user
    }
    const _users = JSON.parse(localStorage.getItem('users')) || INITIALS_USERS
    let message={
        success: true
    }

    //uniq username
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


export const getUserById = (id) => {
    const users = JSON.parse(localStorage.getItem('users')) || INITIALS_USERS
    let _user
    users.map(user => {

        if(user.id && parseInt(user.id) === id){
            _user= user
        }
    })
    return _user || null
}
export function getUsers() {
    const users = JSON.parse(localStorage.getItem('users'))
    if(users){
        return users
    }
    else{
        localStorage.setItem('users', JSON.stringify(INITIALS_USERS))
        return INITIALS_USERS
    }
}


