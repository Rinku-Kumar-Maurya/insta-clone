import Strories from "./Strories"
import Posts from "./Posts"
import MiniProfile from "./MiniProfile"
import Suggestions from "./Suggestions"
import { useSession } from "next-auth/react"

function Feed() {
    const { data: session } = useSession();
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session ? "!grid-cols-1 !max-w-3xl": null}`}>
            <section className='col-span-2'>
                {/* Stories */}
                <Strories />
                <Posts />
            </section>

            {session && (
                <section className='hidden xl:inline-grid col-span-1'>
                    {/* Mini Profile */}
                    <div className='fixed top-19'>
                        <MiniProfile />
                        <Suggestions />
                    </div>
                </section>
            )}

        </main>
    )
}

export default Feed
