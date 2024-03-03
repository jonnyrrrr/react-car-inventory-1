import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'



function Navbar() {

    const [isVisible, setIsVisable] = useState(false)
 

  const dropDown = () => {
    setIsVisable(!isVisible)
  }

  const clicked = () => {
    setIsVisable(false)
  }
  

  return (
    <nav className='flex items-center justify-between flex-wrap bg-slate-900 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/Home' className='font-semibold text-xl tracking-tight'>Car Inventory</Link>
        </div>
        <div className='block'>
            <button
            onClick={dropDown}
             className="flex items-center px-6 py-2 text-white border rounded border-white 
            hover:text-teal-500 hover:border-teal-500">
                
            <i className="fa-solid fa-bars"></i>
            </button>
        </div>
        { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sml lg:flex-grow">
                    <Button className='p-3 m-5 bg-slate-800 border-white justify-center text-white'>
                        <div>
                            
                             <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                            text-white hover:text-teal-300 mr-4'>
                                Home
                            </Link> 
                        </div>
                    </Button>
                    <Button className='p-3 m-5 bg-slate-800 justify-center text-white'>
                        <div>
                            <Link to='/dashboard' onClick= { clicked }className='flex place-items-center mt-4 lg:inline-block lg:mt-0 
                            text-white hover:text-teal-300 mr-4'>
                                Dashboard
                            </Link>
                        </div>
                    </Button>
                    

                </div>
            </div>
            ) : (
            <></>
            )}
    </nav>
  )
}

export default Navbar
