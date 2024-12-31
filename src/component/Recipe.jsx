import PropTypes from 'prop-types';
import { MdAccessTime } from "react-icons/md";
import { BsFire } from "react-icons/bs";
const Recipe = ({recipe,handlewantcook}) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=recipe;
    return (
        <div className='shadow-xl p-3 rounded-2xl space-y-4'>
            <img className='w-full  rounded-2xl' src={recipe_image} alt="" />
            <h3 className='font-semibold text-xl'>{recipe_name}</h3>
            <p className='font-normal text-base text-[] pb-4 border-b-2'>{short_description}</p>
            <h3 className='text-lg font-medium'>ingredients : {ingredients.length}</h3>
            <div className='pl-10 text-[#878787] pb-4 border-b-2'>
            {
                     ingredients.map((ingredient,idx)=><ul className='list-disc' key={idx}><li>{ingredient}</li></ul>)
                    }
            </div>
            <div className='flex items-center font-normal text-base justify-between'>
                <div className='flex items-center gap-2'>
                 <MdAccessTime /> {preparing_time} minute
                </div>
                <div className='flex items-center gap-2'>
                <BsFire /> {calories} calories
                </div>
            </div>
            <div>
                <button onClick={()=>handlewantcook(recipe)} className='bg-[#0BE58A] text-black py-4 px-7 rounded-[50px]'>Want to Cook</button>
            </div>
        </div>
    );
};
Recipe.propTypes={
    recipe: PropTypes.object.isRequired,
    handlewantcook:PropTypes.func
}
export default Recipe;