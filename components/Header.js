import Image from 'next/image';
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline';

import { HomeIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';

function Header() {
    const { data: session } = useSession();

    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
                {/* Instagram Logo */}

                <div className='relative hidden md:inline-grid w-24 cursor-pointer'>
                    <Image
                        src='https://links.papareact.com/ocw'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                <div className='relative sm:inline-grid w-10 md:hidden flex-shrink-0 cursor-pointer'>
                    <Image
                        src='https://links.papareact.com/jjm'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                {/* Search Input */}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center 
                         pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input
                            className='bg-gray-50 
                        block w-full pl-10 sm:text-sm border-gray-300 
                      focus:ring-black focus:border-black rounded-md'
                            type='text' placeholder='Search'
                        />
                    </div>
                </div>

                {/* Menu */}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon className='navBtn' />
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />

                    {session ?
                        <>
                            <div className='relative navBtn'>
                                <PaperAirplaneIcon className='navBtn rotate-45' />
                                <div className='absolute -top-1 -right-1 text-xs focus:pointer-events-none  
                                          text-white bg-red-500 rounded-full h-4 w-4 
                                            flex items-center justify-center animate-pulse'
                                >
                                    5
                                </div>
                            </div>
                            <PlusCircleIcon className='navBtn' />
                            <UserGroupIcon className='navBtn' />
                            <HeartIcon className='navBtn' />

                            <img onClick={signOut} src={session.user.image} alt='user-image' className='rounded-full h-8' />
                        </>
                        :
                        <button onClick={signIn}>Sign In</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
