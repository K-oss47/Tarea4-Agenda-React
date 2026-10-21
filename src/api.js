const URL_API = "http://www.raydelto.org/agenda.php";

export async function obtenerContactos() {
  const respuesta = await fetch(URL_API);
  if (!respuesta.ok) throw new Error("HTTP " + respuesta.status);
  return respuesta.json();
}

export async function guardarContacto(contacto) {
  const respuesta = await fetch(URL_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contacto),
  });
  if (!respuesta.ok) throw new Error("HTTP " + respuesta.status);
}
