

import clock from './assets/clock.png';
import another from './assets/another.png' ;
import PropTypes from 'prop-types';
const Single = ({item}) => {


    return (
        <div className='space-y-5 border border-red-500'> 
            <img src={item.recipe_image}alt="waiting" />
            <h1 className="font-bold ">{item.recipe_name}</h1>
            <p>{item.short_description}</p>
            <hr />
            <p className="font-bold">Ingredients: 6</p>
            <p>{item.ingredients}</p>
        <div className='flex gap-10'>
          <div className='flex gap-2'><img src={clock} alt="" /> <p>30 minutes</p></div>
  <div className='flex gap-2'><img src={another} alt="" /> <p>600 Calories</p></div>
        </div>

            <button className="bg-[#0BE58A] p-2  rounded-full font-bold">Want to Cook</button>
        </div>
    );
};

export default Single;


Single.propTypes = {
   Single: PropTypes.object.isRequired
  };