const BASE_URL_API = process.env.BASE_URL_API
const API_KEY = process.env.PIXABAY_API_KEY
const IMAGE_PER_PAGE = 30

export const fetchImages = async (pageParam: number, query: string) => {
  // query needs to be a URL encoded search term
  // For more details: https://pixabay.com/api/docs/#:~:text=A%20URL%20encoded%20search%20term.%20If%20omitted%2C%20all%20images%20are%20returned.%20This%20value%20may%20not%20exceed%20100%20characters.%0AExample%3A%20%22yellow%2Bflower%22
  const res = await fetch(
    `${BASE_URL_API}?key=${API_KEY}&q=${encodeURIComponent(query)}&per_page=${IMAGE_PER_PAGE}&page=${pageParam}`
  )
  return res.json()
}
