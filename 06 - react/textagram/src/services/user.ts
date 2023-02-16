import { IUsuario } from "../interfaces";
import { apiUrl } from "./api";

export async function addUser(newUser: object): Promise<IUsuario> {
    const response = await fetch(`${apiUrl}/user`, {
        method: 'post',
        body: JSON.stringify(newUser),
    });

    const user: IUsuario = await response.json();
    return user;
}

export async function getUsers(): Promise<IUsuario[]> {
    const response = await fetch(`${apiUrl}/user`);
    return await response.json();
}

export function findUser(usuarios: IUsuario[], name: string): IUsuario | null {
    return usuarios.find(usuario => usuario.name === name) || null;
}
