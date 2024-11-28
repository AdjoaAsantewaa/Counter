
import {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
      const handleIncrease = () => {
        setCount(count + 1);
         }; 
    
    const handleDecrease = () => {
        setCount(count - 1);
    };


  return (
    <div className='mx-auto bg-[#231842] text-white shadow-xl w-[500px] rounded-md p-8 flex justify-center items-center flex-col mt-60 gap-4'>
        <h1 className='text-3xl font-bold'>Counter</h1>
        <p className='text-xl font-bold '>{count}</p>
     <div className="flex gap-8">
        <button onClick={handleIncrease} className=' p-2 px-8 text-xl rounded-lg bg-[#ff5466]'>
        Increase Count
        </button>   
     <button onClick={handleDecrease} className=' p-2 px-8 text-xl rounded-lg bg-[#ff5466]'>Decrease Count</button></div>
    </div>
  )
}

export default Counter;