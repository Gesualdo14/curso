const submitButton = document.querySelector("button[type=submit]")
const backendUrl = ["localhost", "127.0.0.1"].includes(window.location.hostname)
  ? "http://localhost:4000"
  : "https://curso-backend.onrender.com"

console.log({ backendUrl })

submitButton.addEventListener("click", async () => {
  const nameInput = document.querySelector("input[name=name]")
  const taskName = nameInput.value
  console.log(
    "Hola, soy el navegador, y cuando el usuario hace click en 'Crear tarea', te muestro la denominación que ingresó",
    { taskName }
  )
  console.log(
    "Ahora me gustaría poder enviar este dato a una BBDD para que persista, y luego mostrarlos por pantalla"
  )
  const res = await fetch(`${backendUrl}/mongodb`)
  console.log({ res })
})
