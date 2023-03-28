import { useState, useEffect } from "react";
import del from '../img/delete.png'



function Todos() {

   const [data, setData] = useState([]);
   const [loader, setLoader] = useState(true);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
         setData(data);
         setLoader(false);
      });
   }, [])

function x(id) {
   setData([...data.filter(item => item.id !== id)])
}


   return(
      <>
      {loader ? (
         <div className="w-full h-screen absolute top-0 left-0 overflow-hidden bg-slate-900 flex flex-col justify-center items-center">
            <span className="loader"></span>
         </div>
      ) : (
         <ul>
         {data.map((item, index) => {
            return <li data-aos="zoom-out-up" className="bg-gradient-to-r from-slate-900 to-red-500 hover:from-blue-500 hover:to-slate-900 p-4 rounded uppercase flex items-center justify-between max-w-[400px] mx-auto mb-3" key={item.id}>
               <span className={item.completed ? 'cursor-pointer line-through text-green-500' : 'cursor-pointer'}>{item.title}</span>
               <button onClick={() => x(item.id)} className="max-w-[40px]"><img className="w-full" src={del} alt="" /></button>
            </li>
         })}
      </ul>
      )}
      </>
   )
}

export default Todos;