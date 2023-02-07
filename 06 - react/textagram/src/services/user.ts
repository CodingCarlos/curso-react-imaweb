import { IUsuario } from "../interfaces";

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

export function getUsers(): IUsuario[] {
    return usuarios;
}

export function findUser(name: string): IUsuario | null {
    return usuarios.find(usuario => usuario.name === name) || null;
}
