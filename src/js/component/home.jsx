import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {
	const [todos, setTodos] = useState([])
	//Elimina Tarea
	const eliminarTodos = (indice) => {
		setTodos(
			todos.filter((item, index) => {
				return index != indice
			})
		)
	}

	let todoCounter = todos.length

	useEffect(() => { console.log("Component has been rendered") }, [todos])

	return (
		<div className="container justify-content-center aligh-item-center">
			<h1 className="title">My Todos </h1>
			<div className="row d-flex justify-content-center m-2 mb-0" id="search-bar">
				<input placeholder="Add a new task" onKeyDown={(e) => {
					if (e.key === "Enter") {
						setTodos([...todos, e.target.value])
					}
				}} />
			</div>
			<div className="row d-flex justify-content-center m-2 mt-0">
				{todos && todos.length > 0 ?
					<>{todos.map((item, index) => {
						return <li key={index} className="d-flex justify-content-between mt-0">
							{item}
							<button onClick={() => { eliminarTodos(index) }} className="ocultar" type="button">X</button>
						</li>
					})}
						<p className="m-0 counter">{todoCounter} todos left</p>
						<div className="container-todo-shadow mt-0">
							<div className="container-todo-shadow1"></div>
							<div className="container-todo-shadow2"></div>
						</div></>
					:
					<><h1 className="mt-3">No todos left</h1></>}
			</div>
		</div>

	);
};

export default Home;
