import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './pages/Authentication/Login';
import RequreAuth from './pages/Authentication/RequreAuth';
import SignUP from './pages/Authentication/SignUP';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Myprofile from './pages/MyProfile/Myprofile';
import NotFound from './pages/NotFound';
import Order from './pages/Order/Order';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myProfile" element={<Myprofile></Myprofile>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signUp" element={<SignUP></SignUP>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/orderNow/:id' element={<RequreAuth><Order></Order></RequreAuth>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
