// Replace BASE_URL with a real recipes API endpoint
const BASE_URL = "https://api.example.com/recipes"
export async function searchRecipes(q, filters={}){
  const params = new URLSearchParams({q, ...filters})
  const res = await fetch(`${BASE_URL}?${params.toString()}`)
  if(!res.ok) return []
  return await res.json()
}
