import profile from '../../assets/Profile.jpg'
import Gallery from '../Home/Gallery'

const Introduction = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center py-2'>
        <img className='w-1/2 md:w-1/4 lg:w-1/5 rounded-md ' src={profile} alt="" />
        <h1 className="text-center mt-2 text-2xl font-bold textshadow lg:px-72">Welcome to Rahul Digital Studio - Your One-Stop Destination for All Your Needs!</h1>
      </div>
      <hr />

      <Gallery />
    </>
  )
}

export default Introduction
