import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
            image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/e0839ff574213e6f35b3899ebf1fc597',
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

            <div className="px-4 pb-8">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Bill</h2>
                            <p className="text-gray-600">Generate a custom veg food bill for hostel records</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                                        placeholder="Enter total amount"
                                    />
                                </div>
                            </div>

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
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                                    placeholder="e.g., Veg Biryani x 1, Paneer Butter Masala x 1, Roti x 3"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-xl"
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
                                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-xl"
                                    />
                                </div>
                            </div>

                            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold flex items-center">
                                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                                        VEG ONLY
                                    </div>
                                    <span className="text-green-700 text-lg font-medium">This bill is for vegetarian food only - Perfect for hostel records!</span>
                                </div>
                            </div>

                            <div className="flex space-x-4 pt-6">
                                <button
                                    type="submit"
                                    className="flex-1 bg-orange-500 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
                                >
                                    CREATE BILL
                                </button>
                                <button
                                    type="button"
                                    onClick={() => navigate('/profile')}
                                    className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
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