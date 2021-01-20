import React, {Component, createContext, useMemo} from "react";
import {createUser, getUserFromCookies, getUserFromCredentials, logout} from "../userManager";

export const FlashContext = createContext({
    flash: [],
    push: () => {},
    removeFlash: () => {}
});

/**
 * This class is a provider to create flash messages.
 * Not implemented yet.
 */
export class FlashProvider extends Component {
    constructor(props) {
        super(props);
        this.push = (_flash) => {
            this.setState({flash: [...this.state.flash, _flash]})
        }
        this.removeFlash= (key) =>{
            let flashs = this.state.flash
            const _flash = flashs.splice(key, 1)[0]
            this.setState({flash: flashs})
            return _flash
        }
        this.state = {
            flash: [],
            push: this.push,
            removeFlash: this.removeFlash,
        };
    }

    render() {
        return (
            <FlashContext.Provider value={this.state}>
                {this.props.children}
            </FlashContext.Provider>
        );
    }
}
