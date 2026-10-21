import { useCallback, useEffect, useState } from "react";
import { obtenerContactos } from "./api.js";
import ListaContactos from "./components/ListaContactos.jsx";
import AgregarContacto from "./components/AgregarContacto.jsx";

// Componente padre: contiene el listado y el formulario.
export default function App() {
  const [contactos, setContactos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  const cargar = useCallback(async () => {
    try {
      const datos = await obtenerContactos();
      setContactos(Array.isArray(datos) ? datos : []);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  return (
    <div className="wrap">
      <aside className="izq">
        <ListaContactos contactos={contactos} cargando={cargando} error={error} />
      </aside>
      <AgregarContacto onGuardado={cargar} />
    </div>
  );
}
