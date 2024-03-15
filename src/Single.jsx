
const Single = ({item}) => {


    console.log(item)
    return (
        <div>
            <img src={item.recipe_image}alt="waiting" />
            <h1 className="font-bold ">{item.recipe_name}</h1>
            <p>{item.short_description}</p>
            <hr />
            <p className="font-bold">Ingredients: 6</p>
            <p>{item.ingredients}</p>


            <button className="bg-[#0BE58A] p-2  rounded-full font-bold">Want to Cook</button>
        </div>
    );
};

export default Single;