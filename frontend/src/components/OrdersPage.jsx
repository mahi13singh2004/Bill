import { useState, useEffect } from 'react'
import { orderImages } from '../assets/images'

const OrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const customBills = JSON.parse(localStorage.getItem('customBills') || '[]')
    const defaultOrders = [
      {
        id: 1,
        restaurant: 'Bhole Ke Chole',
        location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura',
        items: 'Chole Bhature x 4',
        total: 377,
        date: 'Sun, Nov 30, 2025, 12:54 PM',
        orderDate: 'Sun, Nov 30, 2025, 12:27 PM',
        status: 'Delivered',
        orderId: '#223455469950021',
        image: orderImages.firangiBake
      },
      {
        id: 2,
        restaurant: 'PK Biryani House',
        location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura',
        items: 'Veg Dum Biryani x 1',
        total: 434,
        date: 'Sat, Oct 18, 2025, 03:00 PM',
        orderDate: 'Sat, Oct 18, 2025, 02:22 PM',
        status: 'Delivered',
        orderId: '#219741748995401',
        image: orderImages.chineseWok
      },
      {
        id: 3,
        restaurant: 'Pure Veg Kitchen',
        location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura',
        items: 'Paneer Butter Masala + Roti x 3',
        total: 285,
        date: 'Fri, Oct 10, 2025, 08:30 PM',
        orderDate: 'Fri, Oct 10, 2025, 07:45 PM',
        status: 'Delivered',
        orderId: '#218741748995402',
        image: orderImages.burgerKing
      }
    ]

    const allOrders = [...customBills, ...defaultOrders]
    setOrders(allOrders)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      {/* Profile Header - Responsive */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white mb-6 sm:mb-8">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Mahi Singh</h1>
              <p className="text-blue-100 text-base sm:text-lg">8085533790</p>
            </div>
            <button className="border border-white text-white px-4 sm:px-6 py-2 rounded hover:bg-white hover:text-blue-600 transition-colors text-sm sm:text-base">
              EDIT PROFILE
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Responsive Layout */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Sidebar - Responsive */}
              <div className="w-full lg:w-80 bg-gray-50 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:space-y-2 lg:gap-0">
                  <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg bg-gray-200 text-gray-800">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm sm:text-base">Orders</span>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm font-bold">S</span>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Swiggy One</span>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Favourites</span>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Payments</span>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Addresses</span>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">Settings</span>
                  </div>
                </div>
              </div>

              {/* Main Content Area - Responsive */}
              <div className="flex-1 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Past Orders</h2>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-0">
                          <div className="relative flex-shrink-0">
                            <img
                              src={order.image || orderImages.firangiBake}
                              alt={order.restaurant}
                              className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover bg-gray-100"
                              onError={(e) => {
                                e.target.src = `https://via.placeholder.com/64x64/f3f4f6/6b7280?text=${order.restaurant.charAt(0)}`
                              }}
                            />
                            <div className="absolute -top-1 -right-1 bg-green-600 text-white px-1 py-0.5 rounded text-xs font-bold flex items-center">
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full mr-1"></span>
                              VEG
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-bold text-base sm:text-lg text-gray-800 truncate">
                              {order.restaurant}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm mb-1 line-clamp-2">
                              {order.location}
                            </p>
                            <p className="text-gray-500 text-xs mb-2">
                              ORDER {order.orderId} | {order.orderDate || order.date}
                            </p>
                            <button className="text-orange-500 text-xs sm:text-sm font-medium">
                              VIEW DETAILS
                            </button>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="flex items-center text-green-600 text-xs sm:text-sm font-medium mb-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            <span className="line-clamp-2">
                              {order.status === 'Delivered' ? `Delivered on ${order.date}` : order.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
                          <p className="text-gray-800 text-sm sm:text-base">{order.items}</p>
                          <p className="font-bold text-gray-800 text-sm sm:text-base">
                            Total Paid: ₹ {order.total}
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                          <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded font-medium hover:bg-orange-600 transition-colors text-sm sm:text-base">
                            REORDER
                          </button>
                          <button className="border border-orange-500 text-orange-500 px-4 sm:px-6 py-2 rounded font-medium hover:bg-orange-50 transition-colors text-sm sm:text-base">
                            HELP
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {orders.length === 0 && (
                  <div className="text-center py-8 sm:py-12">
                    <div className="text-4xl sm:text-6xl mb-4">🍽️</div>
                    <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">No orders yet</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Start ordering your favorite veg meals!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersPage