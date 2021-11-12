import { useSession, signOut } from 'next-auth/react';

function MiniProfile() {

    const {data: session} = useSession();

    return (
        <div className='flex items-center mt-14 ml-11'>
            <img
                className='w-16 h-16 rounded-full border p-[2px]'
                src={session?.user?.image}
                alt='random'
            />

            <div className='flex-1 mx-4'>
                <h1 className='font-bold'>{session?.user?.username}</h1>
                <p className='text-sm text-gray-400'>Welcome to Instagram</p>
            </div>

            <button onClick={signOut} className='text-sm text-blue-400 font-semibold'>Sign Out</button>
        </div>
    )
}

export default MiniProfile
