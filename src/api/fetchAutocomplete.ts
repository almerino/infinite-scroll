export const fetchAutocomplete = async (query: string) => {
  const res = await fetch(
    `https://pixabay.com/autocomplete/?lang=en&search_term=${encodeURIComponent(query)}&media_type=photo&media_type=vector&media_type=illustration&media_type=tag`
  )
  return res.json()
}
