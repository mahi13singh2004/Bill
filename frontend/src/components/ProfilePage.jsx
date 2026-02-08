import { Link } from 'react-router-dom'

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
            {/* Profile Header */}
            <div className="px-4 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between text-white mb-8">
                        <div>
                            <h1 className="text-4xl font-bold mb-2">Mahi Singh</h1>
                            <p className="text-blue-100 text-lg">8085533790</p>
                        </div>
                        <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition-colors">
                            EDIT PROFILE
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-4 pb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="flex">
                            {/* Sidebar */}
                            <div className="w-80 bg-gray-50 p-6">
                                <div className="space-y-2">
                                    <Link to="/orders" className="flex items-center space-x-4 p-3 rounded-lg bg-gray-200 text-gray-800">
                                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="font-medium">Orders</span>
                                    </Link>

                                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">S</span>
                                        </div>
                                        <span className="text-gray-700">Swiggy One</span>
                                    </div>

                                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Favourites</span>
                                    </div>

                                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Payments</span>
                                    </div>

                                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Addresses</span>
                                    </div>

                                    <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Settings</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 p-6">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Past Orders</h2>

                                {/* Sample Order */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="relative">
                                                <img
                                                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_750225.JPG"
                                                    alt="Bhole Ke Chole"
                                                    className="w-16 h-16 rounded-lg object-cover"
                                                />
                                                <div className="absolute -top-1 -right-1 bg-green-600 text-white px-1 py-0.5 rounded text-xs font-bold flex items-center">
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
                                                    VEG
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-800">Bhole Ke Chole</h3>
                                                <p className="text-gray-600 text-sm">JSS Boys Hostel, Near Petrol Pump, Srinivaspura</p>
                                                <p className="text-gray-500 text-xs">ORDER #223455469950021 | Sun, Nov 30, 2025, 12:27 PM</p>
                                                <button className="text-orange-500 text-sm font-medium mt-1">VIEW DETAILS</button>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center text-green-600 text-sm font-medium mb-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                Delivered on Sun, Nov 30, 2025, 12:54 PM
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <p className="text-gray-800">Chole Bhature x 4</p>
                                            <p className="font-bold text-gray-800">Total Paid: ₹ 377</p>
                                        </div>
                                        <div className="flex space-x-3">
                                            <button className="bg-orange-500 text-white px-6 py-2 rounded font-medium hover:bg-orange-600">
                                                REORDER
                                            </button>
                                            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded font-medium hover:bg-orange-50">
                                                HELP
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Order */}
                                <div className="bg-white border border-gray-200 rounded-lg p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="relative">
                                                <img
                                                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/e0839ff574213e6f35b3899ebf1fc597"
                                                    alt="PK Biryani House"
                                                    className="w-16 h-16 rounded-lg object-cover"
                                                />
                                                <div className="absolute -top-1 -right-1 bg-green-600 text-white px-1 py-0.5 rounded text-xs font-bold flex items-center">
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
                                                    VEG
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-gray-800">PK Biryani House</h3>
                                                <p className="text-gray-600 text-sm">JSS Boys Hostel, Near Petrol Pump, Srinivaspura</p>
                                                <p className="text-gray-500 text-xs">ORDER #219741748995401 | Sat, Oct 18, 2025, 02:22 PM</p>
                                                <button className="text-orange-500 text-sm font-medium mt-1">VIEW DETAILS</button>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center text-green-600 text-sm font-medium mb-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                Delivered on Sat, Oct 18, 2025, 03:00 PM
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <p className="text-gray-800">Veg Dum Biryani x 1</p>
                                            <p className="font-bold text-gray-800">Total Paid: ₹ 434</p>
                                        </div>
                                        <div className="flex space-x-3">
                                            <button className="bg-orange-500 text-white px-6 py-2 rounded font-medium hover:bg-orange-600">
                                                REORDER
                                            </button>
                                            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded font-medium hover:bg-orange-50">
                                                HELP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage