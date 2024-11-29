import { useState } from "react"
export default function Main() {
  const [ingredients, setIngredients] = useState([])
const Elements= ingredients.map((ingredient)=> <li key={ingredient}>{ingredient}</li>)
 const handleSubmit=(e)=>{
     e.preventDefault()
    const formData=new FormData(e.currentTarget);
    const newingredient=formData.get("ingredient");
   setIngredients(prev =>[...prev, newingredient])
 
  }
  // setIngredients("");
  return(
    <main>
     <form  onSubmit={handleSubmit} className="add-ingredient-form">
     <input className="ingredient-input" 
      type="text" 
     placeholder="e.g:Oregano" 
     aria-label="add-ingredient"
     name="ingredient"
      />
        <button>Add ingredient</button>
       </form>
    <ul>
    {Elements}
   </ul>

  </main>
  )
 }