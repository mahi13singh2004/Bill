const HomePage = () => {
  const foodCategories = [
    { name: 'Rolls', image: 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png' },
    { name: 'Biryani', image: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png' },
    { name: 'North Indian', image: 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png' },
    { name: 'Cakes', image: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png' },
    { name: 'Burgers', image: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png' },
    { name: 'Pizzas', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png' },
    { name: 'Ice-Cream', image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png' },
    { name: 'South Indian', image: 'https://b.zmtcdn.com/data/dish_images/9c3832ce9b8b58b0541f4cc8ccc0307b1634805403.png' }
  ]

  const restaurants = [
    {
      id: 1,
      name: 'Firangi Bake',
      cuisine: 'Pizzas, Pastas, Italian, Mexican...',
      rating: 4.2,
      time: '40-45 mins',
      offer: '40% OFF UPTO ₹80',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_750225.JPG',
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 2,
      name: 'Chinese Wok',
      cuisine: 'Chinese, Asian, Tibetan, Desserts',
      rating: 4.4,
      time: '30-35 mins',
      offer: 'ITEMS AT ₹119',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597',
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 3,
      name: 'Burger King',
      cuisine: 'Burgers, American',
      rating: 4.3,
      time: '35-40 mins',
      offer: 'ITEMS AT ₹59',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_750394.JPG',
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 4,
      name: 'KFC',
      cuisine: 'Burgers, Fast Food, Rolls & Wraps',
      rating: 4.5,
      time: '20-25 mins',
      offer: '50% OFF',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49ce-8ab6-ea8c2eb8a5ae_23678.JPG',
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 5,
      name: 'Pure Veg Kitchen',
      cuisine: 'North Indian, South Indian',
      rating: 4.6,
      time: '25-30 mins',
      offer: '30% OFF UPTO ₹150',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/4a509cf1-ea35-497b-9813-59145c5007c9_750225.JPG',
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 6,
      name: 'Veg Delight',
      cuisine: 'Gujarati, Rajasthani',
      rating: 4.1,
      time: '35-40 mins',
      offer: 'ITEMS AT ₹99',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597',
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 7,
      name: 'Green Garden',
      cuisine: 'Continental, Italian',
      rating: 4.3,
      time: '30-35 mins',
      offer: 'ITEMS AT ₹149',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_750394.JPG',
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    },
    {
      id: 8,
      name: 'Satvik Foods',
      cuisine: 'Traditional, Healthy',
      rating: 4.5,
      time: '20-25 mins',
      offer: '50% OFF',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49ce-8ab6-ea8c2eb8a5ae_23678.JPG',
      location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Mahi, what's on your mind?</h1>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide">
            {foodCategories.map((category, index) => (
              <div key={index} className="flex-shrink-0 text-center cursor-pointer food-category">
                <div className="w-36 h-36 rounded-full overflow-hidden mb-3 hover:shadow-lg transition-shadow bg-gray-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/144x144/f3f4f6/6b7280?text=${category.name}`
                    }}
                  />
                </div>
                <p className="text-lg font-medium text-gray-700">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Top restaurant chains in Bangalore</h2>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 restaurant-grid">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-white rounded-2xl overflow-hidden card-hover cursor-pointer group">
                <div className="relative">
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300/f3f4f6/6b7280?text=${restaurant.name.replace(' ', '+')}`
                      }}
                    />
                  </div>
                  <div className="absolute top-4 left-4 veg-indicator text-white px-2 py-1 rounded text-xs font-bold flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-1"></span>
                    VEG
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                    {restaurant.offer}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-1 truncate">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm mb-2 truncate">{restaurant.cuisine}</p>
                  <p className="text-gray-500 text-xs mb-3">{restaurant.location}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {restaurant.rating}
                      </div>
                      <span className="text-gray-600 text-sm">• {restaurant.time}</span>
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