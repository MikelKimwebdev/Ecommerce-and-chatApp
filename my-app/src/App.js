import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './home';
import About from './about';
import Contact from './contact';
import Admin from './Admin/admin';
import Chats from './chats.js';
import AdminHome from './Admin/admin';
import AdminLog from './Admin/AdminLog'
// import SignIn from './signIn';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import { ChatContextProvider } from './context/chatContext';
import { ProductContextProvider } from './Admin/AdminCont/productContext';
import AllProducts from './AllProducts';

function App() {
  const {user}=useContext(AuthContext);
  return (
    <>
    <ChatContextProvider user={user}>
    <ProductContextProvider>
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='chats' element={<Chats/>}/>
        <Route path='adminHome' element={<AdminHome/>}/>
        <Route path='adminLog' element={<AdminLog/>}/>
        <Route path='allProducts' element={<AllProducts/>}/>  
      </Routes>
    </BrowserRouter>
    </div>
    </ProductContextProvider>
    </ChatContextProvider>
   
    </>
  );
}

export default App;
