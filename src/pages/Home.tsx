
import Background from '../assets/images/car-garage.jpg'

function Home() {
  return (
    <div
    style={{ backgroundImage : `url(${Background})`}}
    className='flex flex-row place-items-center justify-center mx-auto bg-cover bg-fixed'> 
    <div className='flex place-items-center h-screen'>
        <h1 className='p-6 bg-white bg-opacity-100 text-black rounded text-xl'>Welcome to your Car Inventory!</h1>
    </div>
    </div>
  )
}

export default Home
