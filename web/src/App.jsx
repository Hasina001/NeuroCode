import { Outlet } from 'react-router-dom'
import "./App.css"
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <>
      <div className='container min-h-screen flex flex-col '>
        <Navbar />
        <div className='flex-grow'>
          <Outlet />
        </div>
        <footer className='mt-auto'>Footer</footer>
      </div>
    </>
  )
}

export default App