const urlRoot = " http://localhost:80";

export async function getQuestions() {
  const res = await fetch("http://localhost:80/questions");
  if (!res.ok) throw Error("Failed to fetch data");
  const data = await res.json();
  return data;
}
