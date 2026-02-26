export default function Navbar() {
    return(
        <nav className="bg-gray-800 text-white lg:py-4 lg:fixed lg:w-full lg:z-10 lg:top-0 py-2 px-3">
            <div className="container mx-auto flex items-center justify-between">
                <h1 className="text-lg font-bold">My Film Database</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="hover:text-gray-400">Movies</a></li>
                    <li><a href="#" className="hover:text-gray-400">Actors</a></li>
                    <li><a href="#" className="hover:text-gray-400">Directors</a></li>
                </ul>
            </div>
        </nav>
    )
}