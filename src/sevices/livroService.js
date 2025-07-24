
const API_URL = 'const API_URL = https://apibiblioteca-rmvs.onrender.com/'

export async function getLivros() {
  const response = await fetch(API_URL)
  return response.json()
}

export async function getLivroPorId(id) {
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}

export async function criarLivro(livro) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(livro),
  })
  return response.json()
}

export async function editarLivro(id, livro) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(livro),
  })
  return response.json()
}

export async function deletarLivro(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
}
