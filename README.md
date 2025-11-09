# Play Quiz Física II 🎮⚡

Juego interactivo de preguntas sobre Física II: electromagnetismo, circuitos y ondas electromagnéticas. Responde rápido para obtener más puntos.

## 🚀 Demo en Vivo


- **GitHub Pages:** https://miguel-angelr.github.io/play-quiz-fisica2/

## 📋 Características

- ✅ Preguntas de opción múltiple sobre Física II
- ⏱️ Sistema de puntuación basado en tiempo
- 🎯 Niveles progresivos de dificultad
- 📱 Diseño responsive (móvil y escritorio)
- 🎨 Interfaz moderna con animaciones

## 🛠️ Tecnologías

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Routing:** React Router v6

## 📦 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/Miguel-AngelR/play-quiz-fisica2.git
cd play-quiz-fisica2

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:8080`

## 🚀 Deploy a GitHub Pages

### Configuración Inicial (Solo una vez)

1. **Activar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: "GitHub Actions"

### Deploy Automático

El proyecto se deploya automáticamente a GitHub Pages cada vez que haces push a la rama `main`. El workflow de GitHub Actions:

1. Instala dependencias
2. Compila el proyecto (TypeScript → JavaScript)
3. Optimiza assets (CSS, imágenes)
4. Publica en GitHub Pages

**No necesitas hacer nada manualmente** - cada cambio en Lovable se sincroniza con GitHub y se deploya automáticamente.


## 📁 Estructura del Proyecto

```
play-quiz-fisica2/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de GitHub Actions
├── public/                     # Assets estáticos
├── src/
│   ├── components/            # Componentes React
│   │   ├── ui/               # Componentes UI (shadcn)
│   │   ├── QuizGame.tsx      # Lógica principal del juego
│   │   ├── QuestionCard.tsx  # Tarjeta de pregunta
│   │   └── ...
│   ├── data/
│   │   └── questions.ts      # Banco de preguntas
│   ├── pages/
│   │   └── Index.tsx         # Página principal
│   ├── App.tsx               # Componente raíz
│   └── index.css             # Estilos globales
├── vite.config.ts            # Configuración de Vite
└── package.json              # Dependencias
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Compila para producción
npm run preview      # Preview del build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 🎯 Actualizar el Proyecto


### Desde tu Editor Local

```bash
# Hacer cambios en el código
git add .
git commit -m "Descripción de cambios"
git push origin main

# GitHub Actions se encarga del resto
```

## 🐛 Troubleshooting

**El sitio no carga en GitHub Pages:**
- Verifica que `base: "/play-quiz-fisica2/"` esté en `vite.config.ts`
- Asegúrate de que GitHub Pages esté configurado en "GitHub Actions"
- Revisa el log del workflow en Actions

**Los estilos no se cargan:**
- El `base` path debe coincidir con el nombre del repositorio
- Limpia caché del navegador (Ctrl+Shift+R)

**Errores en el build:**
- Revisa los logs en GitHub Actions
- Verifica que todas las dependencias estén en `package.json`

## 📝 Personalización

### Cambiar el dominio base

Si cambias el nombre del repositorio, actualiza `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: "/nuevo-nombre-repo/",
  // ...
}));
```

### Agregar más preguntas

Edita `src/data/questions.ts` y agrega nuevos objetos al array:

```typescript
{
  id: 999,
  question: "Tu pregunta aquí",
  options: ["Opción A", "Opción B", "Opción C", "Opción D"],
  correct: 0, // Índice de la respuesta correcta
  level: 1
}
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Para preguntas o sugerencias, abre un issue en GitHub.

---

**Desarrollado con ❤️ usando [Lovable](https://lovable.dev)**
