import { IPost } from '../interfaces';

const post: IPost = {
  id: '',
  usuario: {
    name: "Paco",
    pic: "https://randomuser.me/api/portraits/lego/6.jpg"
  },
  contenido: "Hola, soy un post",
  comentarios: [
    {
      usuario: {
        name: "Paco",
        pic: "https://randomuser.me/api/portraits/lego/6.jpg"
      },
      comentario: "Vaya pedazo de post",
    },
  ],
};

let postList = [
  { ...post, id: '1' }, 
  { ...post, id: '2', usuario: {
    name: "Julia",
    pic: "https://randomuser.me/api/portraits/lego/7.jpg"
  }}, 
  { ...post, id: '3' }, 
];

export function addPost(newPost: IPost): boolean {
  postList = [newPost, ...postList];
  return true;
}

export function getPosts() {
    return postList;
}

export function listPostsByUser(name: string): IPost[] {
  return postList.filter(post => post.usuario.name === name);
}
