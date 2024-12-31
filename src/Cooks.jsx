import PropTypes, { number } from 'prop-types';
import Wantcook from './Wantcook';
import Currentcook from './Currentcook';
const Cooks = ({wantcooks,handlepreparing,currentcooks,totaltime,totalcalorie}) => {
    return (
        <div className="md:w-1/3 shadow-2xl p-3 rounded-2xl"> 
            <h2 className="text-2xl font-semibold pb-3 border-b-2">Want to cook: 0{wantcooks.length}</h2>
            <div className='bg-slate-100 my-8 rounded-2xl py-3'>      
            <table className='border-separate border-spacing-2 text-[#282828B3] text-base text-center'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                { 
            wantcooks.map((wantcook,idx)=><Wantcook key={idx} handlepreparing={handlepreparing} wantcook={wantcook}></Wantcook>)
                }
                </tbody>
            </table>
            </div>
            <div>
                <h2 className="text-2xl font-semibold pb-3 border-b-2">Currently cooking: {currentcooks.length}</h2>
                <div className='bg-slate-100 my-8 rounded-2xl py-3'>      
            <table className='border-separate border-spacing-4 text-[#282828B3] text-base text-center'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                { 
            currentcooks.map((currentcook,idx)=><Currentcook key={idx} currentcook={currentcook}></Currentcook>)
                }
                <tr>
                    <td></td>
                    <td>Total Time={totaltime}</td>
                    <td>Total Calories={totalcalorie}</td>
                </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
    );
};
Cooks.propTypes={
    wantcooks: PropTypes.array,
    handlepreparing:PropTypes.func,
    currentcooks:PropTypes.array,
    totaltime:PropTypes.number,
    totalcalorie:PropTypes,number
}
export default Cooks;