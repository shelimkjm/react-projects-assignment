
import { useState } from "react"
import Banner from "./Banner"
import Navbar from "./Navbar"


import { useEffect } from "react"
import Single from "./Single"


function App() {

  const [recipe,setRecipe] = useState([])

  useEffect(()=>{
fetch('Recipes.json')
.then(res=>res.json())
.then(data=>setRecipe(data))

  
  })






  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
<div className="container mx-auto mt-12  space-y-4">
<h1 className="text-center text-3xl font-bold">Our Recipes</h1>
<p className="text-center">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br />
urna volutpat curabitur elementum mauris aenean neque.</p>
<div  className="flex justify-between">

<div className="grid grid-cols-2 space-x-4 space-y-4 w-2/3 border  ">
{recipe.map(item=><Single item={item} key={item.recipe_id
}></Single>)}

</div>
<div className="border">
<h1 className="font-bold p-8 ">Want to cook: 01</h1>

</div>
</div>





</div>


    </>
  )
}

export default App
