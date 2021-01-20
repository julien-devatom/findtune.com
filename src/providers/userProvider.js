import React, {Component, createContext} from "react";
import {createUser, getUserFromCookies, getUserFromCredentials, logout} from "../userManager";

/**
 *
 * @type {React.Context<{logout: logout, addUser: UserProvider.addUser, getUserFromCredentials: getUserFromCredentials, user: *}>}
 */
export const UserContext = createContext({
    user: getUserFromCookies(),
    addUser: () => {},
    getUserFromCredentials: () => {},
    logout: () => {}
    });

/**
 * This is a UserProvider, to have access to the user everywhere in the code.
 */
export default class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.addUser= (_user)=>{
            const result = createUser(_user);
            if(result.success) {
                return null
            }else{
               return result.message
            }
        }
        this.logout=()=>{
            logout()
            this.setState({
                user: null
            })
        }
        this.getUserFromCredentials=(username, password) =>{
            const _user = getUserFromCredentials(username, password)
            this.setState({
                user: _user
            })
            return _user
        }
        this.state = {
            user: getUserFromCookies(),
            addUser: this.addUser,
            getUserFromCredentials: this.getUserFromCredentials,
            logout: this.logout
        };
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
