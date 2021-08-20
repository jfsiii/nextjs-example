export interface Post {
  userId: User["id"];
  id: number;
  title: string;
  body: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const { performance } = require('perf_hooks');
export async function getUsers(): Promise<User[]> {
  console.log(`data/getUsers`);
  const start = performance.now();
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const uFetch = performance.now() - start;
  const users = await res.json();
  const uTotal = performance.now() - start;
  console.log(`data/getUsers times`, {uTotal, uFetch});
  return users;
}

export async function getPosts(): Promise<Post[]> {
  console.log(`data/getPosts`);
  const start = performance.now();
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const uFetch = performance.now() - start;
  const posts = await res.json();
  const uTotal = performance.now() - start;
  console.log(`data/getPosts times`, {uTotal, uFetch});
  return posts;
}

export async function getUser(id: User["id"]): Promise<User> {
  console.log(`data/getUser ${id}`);
  const start = performance.now();
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const uFetch = performance.now() - start;
  const user = await res.json();
  const uTotal = performance.now() - start;
  console.log(`data/getUser ${id} times`, {uTotal, uFetch});
  return user;
}

export async function getPost(id: Post["id"]): Promise<Post> {
  console.log(`data/getPost ${id}`);
  const start = performance.now();
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const uFetch = performance.now() - start;
  const post = await res.json();
  const uTotal = performance.now() - start;
  console.log(`data/getPost ${id} times`, {uTotal, uFetch});
  return post;
}
