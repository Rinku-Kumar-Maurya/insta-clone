function MiniProfile() {
    return (
        <div className='flex items-center mt-14 ml-11'>
            <img
                className='w-16 h-16 rounded-full border p-[2px]'
                src='https://links.papareact.com/jjm'
                alt='random'
            />

            <div className='flex-1 mx-4'>
                <h1 className='font-bold'>Hello World!!...</h1>
                <p className='text-sm text-gray-400'>This a paragraph</p>
            </div>

            <button className='text-sm text-blue-400 font-semibold'>Sign Out</button>
        </div>
    )
}

export default MiniProfile
