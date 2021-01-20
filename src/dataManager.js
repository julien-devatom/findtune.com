

const INITIALS_POSTS=[
    {
        id: 1,
        type: 'message',
        createdBy: 1,
        createdAt: (new Date()).toString(),
        message: "sfsrf ef zef zqeffezfs se",
        likes: 23,
        liked: true
    },
    {
        id: 2,
        type: 'music',
        music_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        createdBy: 1,
        createdAt: (new Date()).toString(),
        message: "sfsrf ef zef zqeffezfs se",
        likes: 23,
        liked: true
    },
    {
        id: 2,
        type: 'video',
        video_url: "https://cdn.videvo.net/videvo_files/video/free/2013-12/small_watermarked/CROWD_JUMPS_LIGHTS_PULSE_preview.webm",
        createdBy: 1,
        createdAt: (new Date()).toString(),
        message: "sfsrf ef zef zqeffezfs se",
        likes: 29,
        liked: true
    },
    {
        type: 'message',
        createdBy: 1,
        createdAt: (new Date()).toString(),
        message: 'zqdazd qdzd azedzqd zqd qzd qzd qz',
        likes: 12,
        liked: true
    }
]

export function getPosts(){
    const postsFromLocalStorage = JSON.parse(localStorage.getItem('posts'))
    if(!postsFromLocalStorage){
        return INITIALS_POSTS
    }
    return postsFromLocalStorage

}
export function getUserById(id){
    const user = {
        id: 1,
        username: 'Julien'
    }
    return user
}
