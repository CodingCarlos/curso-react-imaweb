import { IPost } from '../interfaces';

export function addPost(newPost: IPost): boolean {
  // Esto mandará el post a la API
  return true;
}

export function getPosts() {
    const post: IPost = {
        id: '',
        usuario: {
          name: "Paco",
          pic: "https://www.thispersondoesnotexist.com/image"
        },
        contenido: "Hola, soy un post",
        comentarios: [
          {
            usuario: {
              name: "Paco",
              pic: "https://...."
            },
            comentario: "Vaya pedazo de post",
          },
        ],
    };

    const postList = [
        { ...post, id: '1' }, 
        { ...post, id: '2', usuario: {
          name: "Julia",
          pic: "https://thispersondoesnotexist.com/image?id=3"
        }}, 
        { ...post, id: '3' }, 
    ];

    return postList;
}
