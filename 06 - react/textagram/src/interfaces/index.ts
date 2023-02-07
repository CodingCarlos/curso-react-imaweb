export interface IUsuario {
    name: string;
    pic?: string;
}

export interface IComentario {
    usuario: IUsuario;
    comentario: string;
}

export interface IPost {
    id: string;
    usuario: IUsuario;
    contenido: string;
    comentarios?: IComentario[];
}