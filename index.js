const submitButton = document.querySelector("button[type=submit]")

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
  const res = await fetch(`http://localhost:4000/mongodb`)
  console.log({ res })
})
