
import { useSelector, useDispatch } from "react-redux"
import { increment } from "./slice1"

export default function Home() {

   const item = useSelector(state => state.reducer1.k)
   const dispatch = useDispatch()
   return (
      <div>
         <p onClick={() => dispatch(increment())}>Home:{item}</p>
      </div>
   )
}