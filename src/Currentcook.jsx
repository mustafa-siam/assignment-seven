import PropTypes from 'prop-types';
const Currentcook= ({currentcook,idx}) => {
    const {recipe_name,preparing_time,calories}=currentcook;
    return (
        <>
    <tr>
        <td>{idx}</td>
        <td>{recipe_name}</td>
        <td>{preparing_time} minute</td>
        <td>{calories} calories</td> 
    </tr>
        </>
        
    );
};
Currentcook.propTypes={
    currentcook: PropTypes.object,
    idx:PropTypes.number
}
export default Currentcook;