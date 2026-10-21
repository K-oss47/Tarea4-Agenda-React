import { useState } from "react";
import { guardarContacto } from "../api.js";

const VACIO = { nombre: "", apellido: "", telefono: "" };

// Componente que permite agregar nuevos contactos.
export default function AgregarContacto({ onGuardado }) {
  const [form, setForm] = useState(VACIO);
  const [estado, setEstado] = useState({ texto: "", tipo: "" });
  const [enviando, setEnviando] = useState(false);

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = async (e) => {
    e.preventDefault();
    const contacto = {
      nombre: form.nombre.trim(),
      apellido: form.apellido.trim(),
      telefono: form.telefono.trim(),
    };
    if (!contacto.nombre || !contacto.apellido || !contacto.telefono) {
      setEstado({ texto: "Complete los tres campos.", tipo: "error" });
      return;
    }
    setEnviando(true);
    setEstado({ texto: "Guardando…", tipo: "" });
    try {
      await guardarContacto(contacto);
      setForm(VACIO);
      setEstado({ texto: "Contacto guardado.", tipo: "ok" });
      await onGuardado();
    } catch {
      setEstado({ texto: "No se pudo guardar.", tipo: "error" });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="tarjeta" aria-labelledby="t-nuevo">
      <p className="etiqueta">Nuevo registro</p>
      <h2 id="t-nuevo">Agregue un contacto.</h2>
      <form onSubmit={enviar}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" autoComplete="given-name" value={form.nombre} onChange={cambiar} />
        <label htmlFor="apellido">Apellido</label>
        <input id="apellido" name="apellido" type="text" autoComplete="family-name" value={form.apellido} onChange={cambiar} />
        <label htmlFor="telefono">Teléfono</label>
        <input id="telefono" name="telefono" type="tel" autoComplete="tel" value={form.telefono} onChange={cambiar} />
        <div className="pie">
          <p className={"mensaje " + estado.tipo} role="status">
            {estado.texto}
          </p>
          <button type="submit" disabled={enviando}>
            Guardar contacto
          </button>
        </div>
      </form>
    </section>
  );
}
