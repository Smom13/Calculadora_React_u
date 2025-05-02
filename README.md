# 📱 MyApp

Una app móvil desarrollada con React Native, que integra navegación entre pantallas, uso de contextos globales y lógica personalizada. Actualmente incluye pantallas de calculadora, información y una webview.

> App que permite navegar entre distintas herramientas como calculadora, información técnica y una vista web, todo con un diseño modular.

## 🚀 Tecnologías usadas

- React Native
- TypeScript
- React Navigation
- Context API
- Expo (si aplica, reemplaza si usas CLI)
- <<Otras librerías si las agregas>>

## 📁 Estructura del proyecto

```
/assets             → Imágenes y recursos (favicon, íconos, etc.)  
/components         → Componentes reutilizables  
/context            → GlobalContext para manejar el estado global  
/navigation         → Configuración de la navegación (stacks, tabs, etc.)  
/screens            → Pantallas principales: Calculadora, Información, Web  
/types              → Definiciones de tipos personalizados  
```

## 🔧 Instalación

```bash
git clone https://github.com/Smom13/Calculadora_React_u.git
cd MyApp
npm install   
npm start     
```

> Asegúrate de tener instalado:
> - Node.js
> - npm  
> - Expo CLI (si usas Expo)

## 🧠 Uso de Context API

Esta app usa la Context API de React para manejar el estado global a través del `GlobalProvider`.

Ruta del contexto:  
`src/context/GlobalContext.tsx`

Este contexto puede incluir valores como temas, datos compartidos entre pantallas o configuraciones de usuario.

## 📸 Capturas de pantalla

<<Agrega aquí capturas de pantalla mostrando cada sección de tu app, si deseas>>

## 📌 Notas

- Esta app aún está en desarrollo. Algunas funcionalidades podrían no estar completas.
- Si modificas rutas o nombres de carpetas, asegúrate de actualizar los imports correspondientes.

## 👨‍💻 Autor

Desarrollado por: Sergio Mario Orozco Morales
