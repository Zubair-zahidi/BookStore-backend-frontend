const API_URL = 'http://localhost:5000/api'

// Books API
export const fetchBooks = async () => {
  const response = await fetch(`${API_URL}/books`)
  return response.json()
}

export const addBook = async (formData) => {
  const response = await fetch(`${API_URL}/books`, {
    method: 'POST',
    body: formData,
  })
  return response.json()
}

export const deleteBook = async (id) => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: 'DELETE',
  })
  return response.json()
}

export const updateBook = async (id, data) => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return response.json()
}