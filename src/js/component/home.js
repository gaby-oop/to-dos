import React from "react";
import shortid from "shortid";

//e =evento
//create your first component
export function Home() {
	const [tarea, setTarea] = React.useState("");
	const [arrayTareas, setArrayTareas] = React.useState([]);
	const agregarTarea = e => {
		e.preventDefault();
		setArrayTareas([
			...arrayTareas,
			{
				id: shortid.generate(),
				nombreTarea: tarea
			}
		]);
		setTarea("");
	};
	const eliminarTarea = id => {
		let newlist = arrayTareas.filter(item => item.id !== id);
		setArrayTareas(newlist);
	};
	// const mouseOver = () => {};
	// const mouseOut = () => {};
	return (
		<div className="container">
			<h1 className="text-center">TODOS</h1>
			<h4 className="text-center"></h4>
			{/* esta parte es la que agrega valor a las casillas que se van llenar */}
			<form onSubmit={agregarTarea}>
				<input
					type="text"
					className="form-control mb-2"
					placeholder="Ingrese Tarea"
					onChange={e => setTarea(e.target.value)}
					value={tarea}
				/>
				{/* <button
							className="btn btn-dark btn-block"
							type="submit">
							Agregar
						</button> */}
			</form>
			<ul className="list-group">
				{arrayTareas.map(item => (
					<li className="list-group-item" key={item.id}>
						<span className="lead">
							{item.nombreTarea}
							<button
								// addEventListener={() => changeColor()}
								onClick={() => eliminarTarea(item.id)}
								id="BtN"
								type="button"
								className="btn-close"
								// data-bs-dismiss="modal"
								aria-label="Close">
								X
							</button>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
