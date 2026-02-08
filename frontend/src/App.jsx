import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import OrdersPage from './components/OrdersPage'
import CreateBillPage from './components/CreateBillPage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/create-bill" element={<CreateBillPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App