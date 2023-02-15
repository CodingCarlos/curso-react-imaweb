export interface IUsuario {
    name: string;
    pic?: string;
}

export interface IComentario {
    usuario: IUsuario;
    comentario: string;
}

export interface INewPost {
    usuario: IUsuario;
    contenido: string;
    comentarios?: IComentario[];
}
export interface IPost extends INewPost {
    id: string;
}