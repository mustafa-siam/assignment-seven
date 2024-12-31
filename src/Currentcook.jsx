import PropTypes from 'prop-types';
const Currentcook= ({currentcook}) => {
    const {recipe_name,preparing_time,calories}=currentcook;
    return (
        <>
    <tr>
        <td>{recipe_name}</td>
        <td>{preparing_time} minute</td>
        <td>{calories} calories</td> 
    </tr>
        </>
        
    );
};
Currentcook.propTypes={
    currentcook: PropTypes.object,
}
export default Currentcook;