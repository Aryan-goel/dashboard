import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Submit from './components/Submit';
import Edit from './components/Edit';
import Hackathon from './components/Hackathon';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Submit />} path="/submit" exact />
                <Route element={<Edit/>} path="/edit/:id" exact />
                <Route element={<Hackathon/>} path="/contest/:id" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
