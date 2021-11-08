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

function Post(props) {
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
            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn' />
                </div>
                <BookmarkIcon className='btn' />
            </div>

            {/* Captions */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>{props.username} </span>{props.caption}
            </p>

            {/* Comments */}

            {/* InputBox */}
            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7' />
                <input className='flex-1 border-none focus:ring-0 outline-none' type='text' placeholder='Add a comment...' />
                <button className='text-blue-400 font-semibold' type='submit'>Post</button>
            </form>
        </div>
    )
}

export default Post
