import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getArticles() {
  const { data } = await client("/articles");
  return data;
}

export async function getArticle(id) {
  const { data } = await client(`/articles/${id}`);
  return data;
}

export async function postUser(userData) {
  return await client.post("/users", userData);
}
