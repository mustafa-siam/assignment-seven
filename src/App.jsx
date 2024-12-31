
import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Recipes from './component/Recipes'
import Cooks from './Cooks';
import Toast from './Toast';

function App() {
const [wantcooks,setwantcooks]=useState([]);
const [toastVisible, setToastVisible] = useState(false);
const handlewantcook=(recipe)=>{
  if(wantcooks.find(cook => cook.recipe_id === recipe.recipe_id)){
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
    return;
  }
   const newwantcook=[...wantcooks,recipe];
   setwantcooks(newwantcook);
}
const [totaltime,settotaltime]=useState(0);
const [totalcalorie,settotalcalorie]=useState(0);
const [currentcooks,setcurrentcooks]=useState([]);
    const handlepreparing=(wantcook,time,calorie)=>{
            const newcurrentcook=[...currentcooks,wantcook];
            setcurrentcooks(newcurrentcook);
   const filtercook= wantcooks.filter(cook=>cook.recipe_id!==wantcook.recipe_id);
   setwantcooks(filtercook)
      const newtime=totaltime+time;
      settotaltime(newtime);
      const newcalorie=totalcalorie+calorie;
      settotalcalorie(newcalorie)
    }


  return (
    <>
    <div className='md:mx-10 mx-4'>
         <Header></Header>
         <div className='md:flex gap-6'>
          <Recipes handlewantcook={handlewantcook}></Recipes>
          <Cooks handlepreparing={handlepreparing} totalcalorie={totalcalorie} totaltime={totaltime} currentcooks={currentcooks} wantcooks={wantcooks}></Cooks>
         </div>
    </div>
    {toastVisible && <Toast></Toast>}
    </>
  )
}

export default App
