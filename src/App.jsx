
import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Recipes from './component/Recipes'
import Cooks from './Cooks';

function App() {
const [wantcooks,setwantcooks]=useState([]);
const handlewantcook=(recipe)=>{
   const newwantcook=[...wantcooks,recipe];
   setwantcooks(newwantcook);
}
const [totaltime,settotaltime]=useState(0);
const [totalcalorie,settotalcalorie]=useState(0);
const [currentcooks,setcurrentcooks]=useState([]);
    const handlepreparing=(wantcook,time,calorie)=>{
            const newcurrentcook=[...currentcooks,wantcook];
            setcurrentcooks(newcurrentcook);
      const newtime=totaltime+time;
      settotaltime(newtime);
      const newcalorie=totalcalorie+calorie;
      settotalcalorie(newcalorie)
    }


  return (
    <>
    <div className='md:mx-20 mx-4'>
         <Header></Header>
         <div className='md:flex gap-6'>
          <Recipes handlewantcook={handlewantcook}></Recipes>
          <Cooks handlepreparing={handlepreparing} totalcalorie={totalcalorie} totaltime={totaltime} currentcooks={currentcooks} wantcooks={wantcooks}></Cooks>
         </div>
    </div>
    </>
  )
}

export default App
