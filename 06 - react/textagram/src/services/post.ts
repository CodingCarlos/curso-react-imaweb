import { IPost, INewPost } from '../interfaces';

const apiUrl = 'https://us-central1-textagram-app.cloudfunctions.net/app';
// const apiUrl = 'http://localhost:5000/textagram-app/us-central1/app';

export async function addPost(newPost: INewPost): Promise<IPost> {
  // postList = [newPost, ...postList];
  const response = await fetch(`${apiUrl}/post`, {
    method: 'post',
    body: JSON.stringify(newPost),
  });
  const post: IPost = await response.json();
  return post;
}

export async function getPosts(): Promise<IPost[]> {
  let postList: IPost[] = [];
  const response = await fetch(`${apiUrl}/post`);
  postList = await response.json();

  return postList;
}

export function listPostsByUser(name: string): IPost[] {
  return [];
  // return postList.filter(post => post.usuario.name === name);
}
