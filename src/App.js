
import { increment, decrement, incrementByValue } from "./slice1"
import { useDispatch, useSelector } from "react-redux"
import Home from "./home"

export default function App() {
	const result = useSelector(state => state.reducer1.k)
	const dispatch = useDispatch()
	return (
		<div>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<input
				onChange={(event) => dispatch(incrementByValue(+event.target.value))}
			/>
			<p>{result}</p>
			<hr></hr>
			<Home />
		</div>
	)
}