import {useReducer} from "react";
import {getPosts} from "../dataManager";


function reducer(state, action){
    switch (action.type){
        case 'SET_POST':
            return {...state, posts: action.payload}

    }
}

export function usePosts(){
    const [state, dispatch] = useReducer(reducer, {
        posts: null
    })

    return{
        posts: state.posts,
        fetchPosts: function () {
            dispatch({type: 'SET_POST', payload: getPosts()})
        }

    }
}
