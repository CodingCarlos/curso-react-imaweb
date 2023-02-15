import { IUsuario } from "../interfaces";
import { apiUrl } from "./api";

const usuarios: IUsuario[] = [
    {
        name: "Paco",
        pic: "https://randomuser.me/api/portraits/lego/6.jpg"
    },
    {
        name: "Manolo",
        pic: "https://randomuser.me/api/portraits/lego/3.jpg"
    },
    {
        name: "Julia",
        pic: "https://randomuser.me/api/portraits/lego/7.jpg"
    },
    {
        name: 'Yo',
        pic: 'https://randomuser.me/api/portraits/lego/8.jpg',
    }
];

export async function addUser(newUser: object): Promise<IUsuario> {
    const response = await fetch(`${apiUrl}/user`, {
        method: 'post',
        body: JSON.stringify(newUser),
    });

    const user: IUsuario = await response.json();

    // ESTO SE IRÁ DE AQUI MAÑANA MISMO!
    usuarios.push(user);

    return user;
}

export function getUsers(): IUsuario[] {
    return usuarios;
}

export function findUser(name: string): IUsuario | null {
    return usuarios.find(usuario => usuario.name === name) || null;
}
