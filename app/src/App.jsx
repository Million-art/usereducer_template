import { useReducer } from 'react';
  
const reduce=(state,action)=>{
switch(action.type){
case 'increament':
return {count:state.count+1}
case 'decreament':
return {count:state.count-1}
case 'changecolor':
  return{...state ,color: !state.color}
  case 'newinput':
    return {...state,input:action.payload}
}
}
 const App = () => {
  
   const [state, dispach]=useReducer(reduce,{count:0, color:false ,input:''})
    return (
     <div className='bg-blue-500 flex flex-col items-center justify-center'  >
     <h1 style= {{color: state.color ? 'red':'blue'}} className='text-5xl px-5'>{state.count}</h1>
     <input type='text '
     className='border-2 border-red-800 '
     value={state.input}
     placeholder='write something here....'
     onChange={(e)=>(dispach({type :'newinput',payload :e.target.value}))}/><br></br><br></br>

    <div>
          <button className='text-5xl text-center py-5 pl-5 ' 
          onClick={(()=>{dispach({type: 'increament'})})}>+</button>


          <button className='text-5xl text-center py-5 pl-5 ' 
          onClick={(()=>{dispach({type: 'decreament'})})}>-</button><br></br>
    </div>

     <button className='border-2 border-red-800 outline-4 p-4 m-5 text-white  '
     onClick={(()=>dispach({type:'changecolor'}))}> change color</button>
     <br></br><br></br>

   <h1 className='text-center outline-4'>{state.input}</h1>
     </div>
   )
 }
 
 export default App