import './assets/css/main.css';
import './assets/css/login.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer} from 'react-toastify';

import Dashboard from './pages/admin/Dashboard';
import Users from './pages/user/Users';
import Settings from './pages/admin/Settings';
import Login from './pages/Login';
import CustomLayout from './components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Register from './pages/Register';
import Products from './pages/Products';
import SellBike from './pages/SellBike';
import CreateAd from './pages/CreateAd';
import ProductDetail from './pages/ProductDetail';
import ManageAds from './pages/ManageAds';
import ProfilePage from './pages/ProfilePage';
import AdminHome from './pages/admin/AdminHome';
import AdminLayout from './components/Admin-site/AdminLayout';
import EditManageAd from './pages/EditManageAd';
import AdminProductDetail from './pages/admin/AdminProductDetail';
import AdminAddProduct from './pages/admin/AdminAddProduct';
import UsersDetail from './pages/admin/UsersDetail';
import Profile from './pages/Profile';



const App = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomLayout />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/sellbike" element={<SellBike/>} />
        <Route path="/createAd" element={<CreateAd/>} />
        <Route path="/editManageAd/:id" element={<EditManageAd />} />
        <Route path="/viewDetail/:id" element={<ProductDetail/>} />
        <Route path="/manageAd" element={<ManageAds/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profilePage" element={<ProfilePage/>} />


        <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users title="Users"/>} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/addproduct" element={<AdminAddProduct />} />
            <Route path="/admin/userDetail" element={<UsersDetail />} />
            <Route path="/admin/productdetail" element={<AdminProductDetail />} />
        </Route>
          
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

