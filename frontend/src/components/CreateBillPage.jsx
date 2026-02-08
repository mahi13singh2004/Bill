import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { orderImages } from '../assets/images'

const CreateBillPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        restaurantName: '',
        items: '',
        amount: '',
        date: new Date().toISOString().split('T')[0],
        time: new Date().toTimeString().split(' ')[0].slice(0, 5)
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newBill = {
            id: Date.now(),
            restaurant: formData.restaurantName,
            location: 'JSS Boys Hostel, Near Petrol Pump, Srinivaspura',
            items: formData.items,
            total: parseInt(formData.amount),
            date: `${new Date(formData.date).toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })}, ${formData.time}`,
            status: 'Bill Created',
            orderId: `#BILL${Date.now().toString().slice(-6)}`,
            image: orderImages.chineseWok,
            hasVegSymbol: true
        }

        const existingBills = JSON.parse(localStorage.getItem('customBills') || '[]')
        existingBills.unshift(newBill)
        localStorage.setItem('customBills', JSON.stringify(existingBills))

        alert('Bill created successfully!')
        navigate('/orders')
    }

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

            {/* Main Content - Responsive */}
            <div className="px-4 sm:px-6 lg:px-8 pb-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
                        <div className="mb-6 sm:mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Create Bill</h2>
                            <p className="text-gray-600 text-sm sm:text-base">Generate a custom veg food bill for hostel records</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Restaurant Name and Amount - Responsive Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="restaurantName" className="block text-sm font-semibold text-gray-700 mb-3">
                                        Restaurant Name
                                    </label>
                                    <input
                                        type="text"
                                        id="restaurantName"
                                        name="restaurantName"
                                        value={formData.restaurantName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-lg"
                                        placeholder="Enter restaurant name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-3">
                                        Total Amount (₹)
                                    </label>
                                    <input
                                        type="number"
                                        id="amount"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleInputChange}
                                        required
                                        min="1"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-lg"
                                        placeholder="Enter total amount"
                                    />
                                </div>
                            </div>

                            {/* Items Ordered */}
                            <div>
                                <label htmlFor="items" className="block text-sm font-semibold text-gray-700 mb-3">
                                    Items Ordered
                                </label>
                                <textarea
                                    id="items"
                                    name="items"
                                    value={formData.items}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base sm:text-lg resize-none"
                                    placeholder="e.g., Veg Biryani x 1, Paneer Butter Masala x 1, Roti x 3"
                                />
                            </div>

                            {/* Date and Time - Responsive Grid with Larger Inputs */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-3">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg sm:text-xl"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-3">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg sm:text-xl"
                                    />
                                </div>
                            </div>

                            {/* VEG Indicator - Responsive */}
                            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                    <div className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-bold flex items-center w-fit">
                                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                        VEG ONLY
                                    </div>
                                    <span className="text-green-700 text-sm sm:text-lg font-medium">
                                        This bill is for vegetarian food only - Perfect for hostel records!
                                    </span>
                                </div>
                            </div>

                            {/* Submit Buttons - Responsive */}
                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 sm:pt-6">
                                <button
                                    type="submit"
                                    className="w-full sm:flex-1 bg-orange-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-bold text-base sm:text-lg hover:bg-orange-600 transition-colors shadow-lg"
                                >
                                    CREATE BILL
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate('/profile')}
                                    className="w-full sm:flex-1 border-2 border-gray-300 text-gray-700 py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-50 transition-colors"
                                >
                                    CANCEL
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBillPage