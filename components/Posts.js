import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'Rinku Kumar Maurya',
        userimage: 'https://links.papareact.com/ocw',
        img: 'https://links.papareact.com/ocw',
        caption: 'This is a caption'
    },
    {
        id: '124',
        username: 'Ravi Kumar Maurya',
        userimage: 'https://links.papareact.com/jjm',
        img: 'https://links.papareact.com/jjm',
        caption: 'This is a caption'
    }
]

function Posts() {
    return (
        <div>
            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        userimage={post.userimage}
                        img={post.img}
                        caption={post.caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts
