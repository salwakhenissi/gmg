import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Profile from "./Pages/Profile";
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home';
import UpdateProduct from './Components/UpdateProduct';

function App() {
    return (
        <>
            <Router>
            <Header/>
                <Routes>
                <Route path="/Home"
                        element={ <Home />} />
                    <Route path="/" element={<RegisterForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/*" element={<LoginForm />} />
                    <Route path="/update/:id" element={<UpdateProduct />} />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoutes>
                                <Profile />
                            </PrivateRoutes>
                        }
                    />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
