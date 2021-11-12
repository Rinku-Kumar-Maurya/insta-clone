import Image from 'next/image';
import {
    BookmarkIcon,
    ChatIcon,
    PaperAirplaneIcon,
    HeartIcon,
    EmojiHappyIcon,
    DotsHorizontalIcon
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

import { db } from '../firebase';
import { addDoc, collection, serverTimestamp, onSnapshot, query, orderBy, setDoc, doc, deleteDoc } from '@firebase/firestore';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Moment from 'react-moment';

function Post(props) {
    const { data: session } = useSession();

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, 'posts', props.id, 'comments'),
                    orderBy('timestamp', 'desc')
                ),
                (snapshot) => {
                    setComments(snapshot.docs);
                }),
        [db, props.id]
    );

    useEffect(
        () =>
            onSnapshot(
                collection(db, 'posts', props.id, 'likes'),
                (snapshot) => setLikes(snapshot.docs)),
        [db, props.id]
    );

    useEffect(
        () =>
            setHasLiked(
                likes.findIndex((like) => (like.id === session?.user?.uid)) !== -1
            ),
        [likes]
    );

    const likePost = async () => {
        console.log(hasLiked);
        if (hasLiked) {
            await deleteDoc(doc(db, 'posts', props.id, 'likes', session.user.uid));
        }
        else {
            await setDoc(doc(db, 'posts', props.id, 'likes', session.user.uid), {
                username: session.user.username,
            });
        }
    };

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', props.id, 'comments'), {
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }

    console.log(comments);

    return (
        <div className='bg-white my-7 border rounded-md'>
            {/* Header */}
            <div className='flex items-center p-5'>
                <img
                    className='rounded-full h-12 w-12 object-contain border mr-3 p-1'
                    src={props.userimage}
                    alt='user-image'
                />
                <p className='flex-1 font-bold'>{props.username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            {/* Image */}
            <div className='w-full h-auto'>
                <img className='object-cover' src={props.img} alt='post-image' />
            </div>

            {/* Buttons */}
            {session &&
                <div className='flex justify-between px-4 pt-4'>
                    <div className='flex space-x-4'>
                        {
                            hasLiked
                                ? <HeartIconFilled onClick={likePost} className='btn text-red-500'/>
                                : <HeartIcon onClick={likePost} className='btn' />
                        }

                        <ChatIcon className='btn' />
                        <PaperAirplaneIcon className='btn' />
                    </div>
                    <BookmarkIcon className='btn' />
                </div>
            }

            {/* Captions */}
            <p className='p-5 truncate'>
                {likes.length > 0 && (
                    <p className='font-bold mb-1'>{likes.length} likes</p>
                )}
                <span className='font-bold mr-1'>{props.username} </span>{props.caption}
            </p>

            {/* Comments */}
            {comments.length > 0 &&
                <div className='ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black'>
                    {comments.map((comment) => {
                        return (
                            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
                                <img className='h-7 rounded-full' src={comment.data().userImage} alt='img' />
                                <p className='text-sm flex-1'>
                                    <span className='font-bold'>
                                        {comment.data().username}
                                    </span>
                                    {' '}
                                    {comment.data().comment}
                                </p>

                                <Moment fromNow className='pr-5 text-xs'>
                                    {comment.data().timestamp?.toDate()}
                                </Moment>
                            </div>
                        )
                    })}
                </div>
            }

            {/* InputBox */}
            {session &&
                <form className='flex items-center p-4'>
                    <EmojiHappyIcon className='h-7' />
                    <input type='text' value={comment} onChange={(e) => setComment(e.target.value)} className='flex-1 border-none focus:ring-0 outline-none' type='text' placeholder='Add a comment...' />
                    <button type='submit' disabled={!comment.trim()} onClick={sendComment} className='text-blue-400 font-semibold' type='submit'>Post</button>
                </form>
            }
        </div>
    )
}

export default Post
