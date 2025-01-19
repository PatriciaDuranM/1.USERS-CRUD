import { useEffect, useState } from 'react';

const FetchApi = () => {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState('');

	/*primero se ponta el componente y luego el useeffect.
    El use efect tiene luego un array de dependiencias*/
	useEffect(() => {
		/* 
		fetchDataNew(setUsers);*/
		fetchUsers(setUsers);
		findById(setSearch);
	}, []);
	return (
		<>
			{/*
			<h1>Fetch</h1>
			{users.length === 0 && <h2>no hay usuarios</h2>}
			{users.map(user => (
				<h2 key={user.id}>{user.name}</h2>
			))}*/}

			<h1>Fetch users guardados</h1>
			<input
				type='text'
				placeholder='buscar por id'
				/*Aqui se guarda el id que buscamos */
				onInput={event => setSearch(event.target.value)}
			/>

			{/*Lanzo la peticion con el resultado de search (id) y pido el usaurio al servidor */}
			<button onClick={() => findById(setUsers, search)}>Buscar usuario</button>
			<h2>Usuario buscado</h2>
			{users.length === 0 && <h2>no hay usuarios</h2>}
			{users.map(user => (
				<h2 key={user.userId}>{user.name}</h2>
			))}
		</>
	);
};

export default FetchApi;

const findById = async (setUsers, id) => {
	try {
		const response = await fetch(`http://localhost:3000/api/users/${id}`);
		const users = await response.json();
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
};

/*sacar los usuarios del servidor*/
const fetchUsers = async setUsers => {
	try {
		const response = await fetch('http://localhost:3000/api/users');
		const users = await response.json();
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
};

/*Otra forma de asincronia de peticion de datos 

const fetchDataNew = async setUsers => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const users = await response.json();
		setUsers(users);
	} catch (error) {
		console.log(error);
	}
};*/

const fetchData = () => {
	const response = fetch('https://jsonplaceholder.typicode.com/users')
		.then(data => data.json())
		.then(users => console.log(users))
		.catch(error => console.log(error));
};

fetchData();
