import PropTypes from 'prop-types';
const Wantcook = ({wantcook,handlepreparing,idx}) => {
    const {recipe_name,preparing_time,calories}=wantcook;
    return (
                <tr>
                    <td>{idx}</td>
                    <td>{recipe_name} </td>
                    <td>{preparing_time} minute</td>
                    <td>{calories} calories</td>
                    <td>
                        <button onClick={()=>handlepreparing(wantcook,preparing_time,calories)} className='bg-[#0BE58A] text-black py-2 px-4 rounded-[50px]'>Preparing</button>       
                    </td>    
                </tr>
    );
};
Wantcook.propTypes={
    wantcook: PropTypes.object,
    handlepreparing:PropTypes.func,
    idx: PropTypes.number
}
export default Wantcook;