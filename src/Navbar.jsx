import './assets/Frame 5.png'


const Navbar = () => {
    return (
        <div>
    {/* container */}
    <div className="flex items-center justify-around mt-8 container mx-auto">
        {/* 1st */}
<div>
<h1 className="text-2xl font-bold">Recipe Calories</h1>
</div>


{/* 2nd| */}
<div className="flex gap-4 font-semibold">
    <a href="">Home</a>
    <a href="">Recipes</a>
    <a href="">About</a>
    <a href="">Search</a>
</div>


{/* 3rd */}
<div className="flex">
<input className="bg-[#150B2B0D] p-1 rounded-md" type="text"  placeholder="Search"/>
<img src="./assets/Frame 5.png" alt="waiting" />


</div>










    </div>

 </div>          
      
    );
};

export default Navbar;