
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Blog } from './pages/Blog'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Blogs } from './pages/Blogs'
import { Create } from './pages/Create'
import {  UserContextProvider } from './store/Context'
import { Logout } from './pages/Logout'
import { AppBar } from './components/AppBar'
import { ErrorPage } from './pages/ErrorPage'

 function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/' element={<Blogs />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/create' element={<Create />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
