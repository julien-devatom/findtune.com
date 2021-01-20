

const INITIALS_POSTS=[
    {
        id: 1,
        type: 'text',
        createdBy: 1,
        createdAt: new Date(),
        message: "sfsrf ef zef zqeffezfs se",
        likes: 23
    },
    {
        id: 2,
        type: 'music',
        music_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        createdBy: 1,
        createdAt: new Date(),
        message: "sfsrf ef zef zqeffezfs se",
        likes: 23
    }
]

export function getPosts(){
    const postsFromLocalStorage = JSON.parse(localStorage.getItem('posts'))


}
