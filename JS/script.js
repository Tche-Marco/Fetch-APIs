async function iniciar() {
  await apresentarLista()
}

async function carregarDados() {
  try {
    const response = await fetch('/json/estados.json')
    const lista = await response.json()
    return lista
  } catch (erro) {
    alert(erro)
  }
}

async function apresentarLista() {
  const estados = await carregarDados()
  ul = document.querySelector('#lista')
  estados.forEach(estado => {
    li = document.createElement('li')
    li.innerHTML = `${estado.uf} - ${estado.nome}`
    ul.appendChild(li)
  })
}

document.addEventListener('DOMContentLoaded', iniciar)
