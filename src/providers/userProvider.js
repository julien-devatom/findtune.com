import React, {Component, createContext, useMemo} from "react";
import {createUser, getUserFromCookies, getUserFromCredentials} from "../userManager";

export const UserContext = createContext({
    user: getUserFromCookies(),
    addUser: () => {},
    getUserFromCredentials: () => {}
    });
export default class UserProvider extends Component {
    constructor(props) {
        super(props);
        this.addUser= (_user)=>{
            createUser(_user);
            this.setState({
                user: _user
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
            addUser: this.adduser,
            getUserFromCredentials: this.getUserFromCredentials
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
