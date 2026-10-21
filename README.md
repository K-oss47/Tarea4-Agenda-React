# Agenda de contactos (React)

Agenda web hecha con React y Vite. Lista los contactos guardados y permite agregar nuevos usando `fetch` contra `http://www.raydelto.org/agenda.php`.

## Componentes

- `App` (padre): carga los contactos con GET y contiene a los dos componentes hijos.
- `ListaContactos`: muestra el listado de contactos.
- `AgregarContacto`: formulario que envía un nuevo contacto con POST (`nombre`, `apellido`, `telefono`).

## Estructura

```
agenda-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── api.js
    ├── index.css
    └── components/
        ├── ListaContactos.jsx
        └── AgregarContacto.jsx
```

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abra la dirección que muestre la terminal ( http://localhost:5173).

> La API usa `http://`, por lo que debe ejecutarse en local. Si se publica con HTTPS, el navegador bloquea las peticiones.

## Capturas
![Lista de contactos y form](lista.png)
![Contacto](Contacto.png)
![Contacto registrado](<Contacto Registrado.png>)


## Autor

Kelvin Mercedes — ITLA
