

import clock from './assets/clock.png';
import another from './assets/another.png' ;
import PropTypes from 'prop-types';
const Single = ({item,dataPass}) => {


    return (
        <div className='space-y-5 border border-red-500 p-2'> 
           <div className='flex justify-center items-center '> <img className='p-4  w-full rounded-lg' src={item.recipe_image}alt="waiting" /></div>
            <h1 className="font-bold ">{item.recipe_name}</h1>
            <p>{item.short_description}</p>
            <hr />
            <p className="font-bold">Ingredients: 6</p>
            <p>{item.ingredients}</p>
        <div className='flex gap-10'>
          <div className='flex gap-2'><img src={clock} alt="" /> <p>30 minutes</p></div>
  <div className='flex gap-2'><img src={another} alt="" /> <p>600 Calories</p></div>
        </div>

            <button onClick={()=>dataPass(item)} className="bg-[#0BE58A] p-2  rounded-full font-bold">Want to Cook{dataPass} </button>
        </div>
    );
};

export default Single;


Single.propTypes = {
    item: PropTypes.object.isRequired,
    dataPass: PropTypes.func.isRequired
   
  };
