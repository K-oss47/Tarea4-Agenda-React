// Componente que muestra el listado de contactos.
export default function ListaContactos({ contactos, cargando, error }) {
  let resumen = "";
  if (cargando) resumen = "Cargando…";
  else if (error) resumen = "No se pudo cargar la agenda.";
  else if (contactos.length === 0) resumen = "Aún no hay contactos.";
  else resumen = contactos.length + (contactos.length === 1 ? " contacto guardado." : " contactos guardados.");

  return (
    <>
      <p className="etiqueta">Agenda</p>
      <h1>
        Sus
        <br />
        contactos.
      </h1>
      <p className="sub">{resumen}</p>

      <div className="lista">
        {error && <p className="vacio">Revise su conexión e intente de nuevo.</p>}
        {!error &&
          contactos.map((c, i) => (
            <div className="contacto" key={i}>
              <div className="inicial">{((c.nombre || "?").trim()[0] || "?").toUpperCase()}</div>
              <div>
                <b>
                  {c.nombre} {c.apellido}
                </b>
                <span>{c.telefono}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
