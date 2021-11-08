function Story(props) {
    console.log(props);
    return (
        <div>
            <img className='h-14 w-14 rounded-full border-red-500 
            border-2 p-[1.5px] object-contain cursor-pointer
            hover:scale-110 transform transition duration-200 ease-out' src={props.img} alt='user-imgae' />
            <p className='w-14 text-xs text-center truncate'>{props.username}</p>
        </div>
    )
}

export default Story
