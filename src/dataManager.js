/**
 * This is an array of fake data to show you the differents features of the website.
 */
import {getUsers} from "./userManager";

const INITIALS_POSTS=[
    {
        id: 1,
        type: 'message',
        createdBy: 3,
        createdAt: (new Date()).toString(),
        message: "I really enjoyed myself at Eminem's concert on facebook, it's sure that it wasn't real concerts, but it feels so good at the moment.",
        likes: 23,
        liked: true
    },
    {
        id: 2,
        type: 'music',
        music_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        createdBy: 2,
        createdAt: (new Date()).toString(),
        message: "After composing all night in my room, this is what I managed to produce. Enjoy !",
        likes: 23,
        liked: true
    },
    {
        id: 3,
        type: 'video',
        video_url: "https://cdn.videvo.net/videvo_files/video/free/2013-12/small_watermarked/CROWD_JUMPS_LIGHTS_PULSE_preview.webm",
        createdBy: 3,
        createdAt: (new Date()).toString(),
        message: "So many good memories of these concerts, quickly that it resumes !",
        likes: 1264,
        liked: true
    },
    {
        id:4,
        type: 'message',
        createdBy: 4,
        createdAt: (new Date()).toString(),
        message: 'What do you think of rap in 2020? Has it become old-fashioned or does it still free up speech ?',
        likes: 12,
        liked: true
    }
]

/**
 * Contain all the image URL for the website. Import of images is not already implemented
 * @type {*[]}
 */
const GALLERY = [
    'https://cassettefbisurveillancevan.s3.eu-west-3.amazonaws.com/band.svg',
    'https://cassettefbisurveillancevan.s3.eu-west-3.amazonaws.com/Ellipse-1.svg',
    'https://cassettefbisurveillancevan.s3.eu-west-3.amazonaws.com/Ellipse-3.svg',
    'https://cassettefbisurveillancevan.s3.eu-west-3.amazonaws.com/Ellipse-4.svg',
    'https://cassettefbisurveillancevan.s3.eu-west-3.amazonaws.com/band.svg',

]

export function getPosts(){
    const postsFromLocalStorage = JSON.parse(localStorage.getItem('posts'))
    if(!postsFromLocalStorage){
        localStorage.setItem('posts', JSON.stringify(INITIALS_POSTS))
        return INITIALS_POSTS
    }
    return postsFromLocalStorage
}
export function addPost(post){
    const posts = [post, ...(JSON.parse(localStorage.getItem('posts')) || INITIALS_POSTS)]
    localStorage.setItem('posts', JSON.stringify(posts))
}


/**
 * Not implemented
 * @param id
 * @returns {{id: number, username: string}}
 */
export function getUserById(id){
    const users = localStorage.getItem('users') || getUsers()
    let _user = null;
    //users.map(user => {if(user.id === id){_user = user}})
    const user = {
        id: 1,
        username: 'Julien'
    }
    return user
}


export function getImagesGaleryUrl() {
    return GALLERY;
}
