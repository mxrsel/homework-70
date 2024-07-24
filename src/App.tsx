import {Route, Routes, NavLink} from 'react-router-dom';
import ContactList from "./components/Contacts/Contacts.tsx";
import ContactFormPage from "./pages/ContactFormPage/ContactFormPage.tsx";
import './App.css'


const App = () => (
    <div>
        <nav>
            <NavLink to="/">Contacts</NavLink>
            <NavLink to="/add">Add New Contact</NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<ContactList/>}/>
            <Route path="/add" element={<ContactFormPage/>}/>
            <Route path="/edit/:id" element={<ContactFormPage/>}/>
        </Routes>
    </div>
);

export default App;
