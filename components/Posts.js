import { useState, useEffect } from 'react'
import { collection, onSnapshot, query, orderBy } from '@firebase/firestore'
import { db } from '../firebase'
import Post from "./Post"

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
            setPosts(snapshot.docs);
        });
    }, [db]);

    console.log(posts);

    return (
        <div>
            {
                posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.data().username}
                        userimage={post.data().profileImg}
                        img={post.data().image}
                        caption={post.data().caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts
