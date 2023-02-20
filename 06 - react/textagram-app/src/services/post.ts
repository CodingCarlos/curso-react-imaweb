import { IPost, INewPost } from '../interfaces';
import { apiUrl } from "./api";

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
