import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";
import PropTypes from 'prop-types';
const Recipes = ({handlewantcook}) => {
    const  [recipes,setrecipes]=useState([]);
    useEffect(()=>{
        fetch('chefs.json')
        .then(res=>res.json())
        .then(data=>setrecipes(data))
    },[])
    return (
        <div className="md:w-2/3 md:grid md:grid-cols-2 gap-6">
            {
           recipes.map((recipe,idx)=><Recipe key={idx} handlewantcook={handlewantcook} recipe={recipe}></Recipe>)
            }
        </div>
    );
};
Recipes.propTypes={
    handlewantcook : PropTypes.func,
}
export default Recipes;