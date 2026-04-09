const API_URL = 'http://localhost:5000/api'

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Login failed')
  return data
}

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.message || 'Registration failed')
  return data
}

export const logoutUser = async () => {
  const token = localStorage.getItem('token')
  if (token) {
    await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
    })
  }
}

export const getCurrentUser = async () => {
  const token = localStorage.getItem('token')
  if (!token) return null
  
  const response = await fetch(`${API_URL}/auth/me`, {
    headers: { 'Authorization': `Bearer ${token}` },
  })
  if (!response.ok) throw new Error('Failed to fetch user')
  return response.json()
}