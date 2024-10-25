//  redux e 3ta jinish connect kora lagbe
// create store
// 1. store connect with react app by provider. zeta main.tsx e ache
// 2. create slice. slice connect with store
// 3. slice connect with store er reducer

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

// ** dispatch
//  dispatch er jnno 2ta hook ache. 
// selector er kaj consume kora, dispatch er kaj send kora 
// useDispatch er moddhe ze action gula create korchilam. ekhane increment, decrement


function App() {
  const {count} = useSelector((state)=> state.counter )
  const dispatch = useDispatch();


  return (
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">React-Redux Counter</h2>
        <div className="text-4xl font-semibold text-blue-600 mb-6"> {count}  </div>
        <div className="flex space-x-4">
          
          <button 
            onClick={ ()=> dispatch(increment()) }
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Increment
          </button>

          <button 
            onClick={ ()=> dispatch(decrement()) }
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;