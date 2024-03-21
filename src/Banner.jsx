
import banner from '../src/assets/bg.png';

const Banner = () => {
    return (
        <div className="container mx-auto mt-8  flex flex-col justify-center items-center space-y-12 rounded-md  bg-cover bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
       <div className='space-y-10'>  <h1 className='text-white font-bold text-4xl text-center'> Discover an exceptional cooking <br />
class tailored for you!</h1>
<p className='text-2xl text-white text-center'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
problems to become an exceptionally well world-class Programmer</p></div>


<div className='flex justify-center items-center gap-4 '><button className='text-white font-normal bg-green-600 p-2 rounded-md py-2 '>Explore Now</button>
<button className='text-white font-normal  shadow-lg border-white'>Our Feedback</button></div>

        </div>
    );
};

export default Banner;
