import { foodCategories, restaurants } from '../assets/images'

const HomePage = () => {
  const foodCategoryData = [
    { name: 'Rolls', image: foodCategories.rolls },
    { name: 'Biryani', image: foodCategories.biryani },
    { name: 'North Indian', image: foodCategories.northIndian },
    { name: 'Cakes', image: foodCategories.cakes },
    { name: 'Burgers', image: foodCategories.burgers },
    { name: 'Pizzas', image: foodCategories.pizzas },
    { name: 'Ice-Cream', image: foodCategories.iceCream },
    { name: 'South Indian', image: foodCategories.southIndian }
  ]

  const restaurantData = [
    {
      id: 1,
      name: 'Firangi Bake',
      cuisine: 'Pizzas, Pastas, Italian, Mexican...',
      rating: 4.2,
      time: '40-45 mins',
      offer: '40% OFF UPTO ₹80',
      image: restaurants.firangiBake,
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 2,
      name: 'Chinese Wok',
      cuisine: 'Chinese, Asian, Tibetan, Desserts',
      rating: 4.4,
      time: '30-35 mins',
      offer: 'ITEMS AT ₹119',
      image: restaurants.chineseWok,
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 3,
      name: 'Burger King',
      cuisine: 'Burgers, American',
      rating: 4.3,
      time: '35-40 mins',
      offer: 'ITEMS AT ₹59',
      image: restaurants.burgerKing,
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 4,
      name: 'KFC',
      cuisine: 'Burgers, Fast Food, Rolls & Wraps',
      rating: 4.5,
      time: '20-25 mins',
      offer: '50% OFF',
      image: restaurants.kfc,
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 5,
      name: 'Pure Veg Kitchen',
      cuisine: 'North Indian, South Indian',
      rating: 4.6,
      time: '25-30 mins',
      offer: '30% OFF UPTO ₹150',
      image: restaurants.firangiBake,
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 6,
      name: 'Veg Delight',
      cuisine: 'Gujarati, Rajasthani',
      rating: 4.1,
      time: '35-40 mins',
      offer: 'ITEMS AT ₹99',
      image: restaurants.chineseWok,
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 7,
      name: 'Green Garden',
      cuisine: 'Continental, Italian',
      rating: 4.3,
      time: '30-35 mins',
      offer: 'ITEMS AT ₹149',
      image: restaurants.burgerKing,
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 8,
      name: 'Satvik Foods',
      cuisine: 'Traditional, Healthy',
      rating: 4.5,
      time: '20-25 mins',
      offer: '50% OFF',
      image: restaurants.kfc,
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
              Mahi, what's on your mind?
            </h1>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Food Categories - Responsive Grid */}
          <div className="overflow-x-auto">
            <div className="flex space-x-4 sm:space-x-6 lg:space-x-8 pb-4 min-w-max sm:min-w-0 sm:grid sm:grid-cols-4 lg:grid-cols-8 sm:gap-4 lg:gap-6 sm:space-x-0">
              {foodCategoryData.map((category, index) => (
                <div key={index} className="flex-shrink-0 sm:flex-shrink text-center cursor-pointer food-category">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden mb-2 sm:mb-3 hover:shadow-lg transition-shadow bg-gray-100 mx-auto">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/128x128/f3f4f6/6b7280?text=${category.name}`
                      }}
                    />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 whitespace-nowrap sm:whitespace-normal">
                    {category.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Restaurants Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
              Top restaurant chains in Bangalore
            </h2>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Responsive Restaurant Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {restaurantData.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-2xl overflow-hidden card-hover cursor-pointer group shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <div className="h-40 sm:h-48 overflow-hidden bg-gray-100">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300/f3f4f6/6b7280?text=${restaurant.name.replace(' ', '+')}`
                      }}
                    />
                  </div>
                  <div className="absolute top-3 left-3 veg-indicator text-white px-2 py-1 rounded text-xs font-bold flex items-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-1"></span>
                    VEG
                  </div>
                  <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold shadow-lg">
                    {restaurant.offer}
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-1 truncate">
                    {restaurant.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-2 truncate">
                    {restaurant.cuisine}
                  </p>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-2 sm:line-clamp-1">
                    {restaurant.location}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <div className="flex items-center bg-green-600 text-white px-1.5 sm:px-2 py-1 rounded text-xs sm:text-sm font-medium">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {restaurant.rating}
                      </div>
                      <span className="text-gray-600 text-xs sm:text-sm">• {restaurant.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage