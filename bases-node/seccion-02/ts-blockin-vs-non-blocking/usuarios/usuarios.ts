
interface UserNonBlocking {
	id: number;
	callback: () => User
}
export interface User {
	id: number,
	name: string
}


export const getUsuarioSync = (id: number): User => {
	const startPoint = new Date().getTime();
	while (new Date().getTime() - startPoint <= 3000) { // 3 segundos de ejecucion bloqueante
		// Esperando...
		// Haciendo fetch de base de datos...
		// Robando datos de facebook...
	}

	return {
		id,
		name: `Usuario ${id}`,
	};
};

export const getUsuario = (id: number, callback: Function) => {
	const usuario = {
		id,
		name: `Usuario ${id}`,
	};

	setTimeout(() => {
		callback(usuario);
	}, 3000);
};


