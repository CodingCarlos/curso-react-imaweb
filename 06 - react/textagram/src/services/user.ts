import { IUsuario } from "../interfaces";

const usuarios: IUsuario[] = [
    {
        name: "Paco",
        pic: "https://thispersondoesnotexist.com/image?id=1"
    },
    {
        name: "Manolo",
        pic: "https://thispersondoesnotexist.com/image?id=2"
    },
    {
        name: "Julia",
        pic: "https://thispersondoesnotexist.com/image?id=3"
    },
];

export function getUsers(): IUsuario[] {
    return usuarios;
}

export function findUser(name: string): IUsuario | null {
    return usuarios.find(usuario => usuario.name === name) || null;
}
