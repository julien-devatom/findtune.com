import {useReducer} from "react";
import {addPost, getPosts} from "../dataManager";


function reducer(state, action){
    switch (action.type){
        case 'SET_POST':
            return {...state, posts: action.payload}
        case 'ADD_POST':
            return { ...state, posts: [action.payload, ...state.posts]}
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
        },
        addPost: function (post) {
            addPost(post)
            dispatch({type: 'ADD_POST', payload: post})
        }

    }
}

