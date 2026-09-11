# 🌙 Nuestro pequeño universo

Una experiencia web romántica y cinematográfica dedicada a **Luisa Fernanda Velasco Cabezas ❤️**

---

## ✨ Descripción

Página web interactiva construida como una carta de amor convertida en experiencia digital. Incluye:

- Intro cinematográfica con frases animadas
- Hero espacial con estrellas, luna y partículas
- Estrellas fugaces aleatorias con mensaje "Pide un deseo..."
- 8 secciones narrativas con animaciones de scroll
- Constelación L+G animada con canvas
- Galería artística de 5 fotografías
- Escena nocturna de luna sobre el agua
- Poema completo con reveal línea por línea
- Carta final manuscrita
- Reproductor de música opcional

---

## 🛠 Tecnologías

- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React**

---

## 🚀 Instalación y ejecución local

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# → http://localhost:5173
```

---

## 📸 Agregar fotografías

Reemplaza los archivos placeholder con tus fotos reales:

```
public/
└── images/
    ├── foto1.jpg   ← Foto principal grande
    ├── foto2.jpg   ← Foto pequeña
    ├── foto3.jpg   ← Foto estilo polaroid
    ├── foto4.jpg   ← Foto flotante
    └── foto5.jpg   ← Foto con efecto profundidad
```

**Recomendaciones:**
- Formato: `.jpg` o `.png`
- Foto 1: proporción 4:5 (vertical)
- Fotos 2 y 3: proporción 1:1 (cuadrada)
- Foto 4: proporción 3:4 (vertical)
- Foto 5: proporción 16:9 (horizontal)

---

## 🎵 Agregar música de fondo

Coloca un archivo de audio en:

```
public/music/song.mp3
```

El reproductor aparecerá automáticamente en la esquina inferior derecha.  
La música **no inicia sola** — requiere interacción del usuario.

**Nota:** Usa música libre de derechos. Algunas fuentes gratuitas:
- [Free Music Archive](https://freemusicarchive.org)
- [Pixabay Music](https://pixabay.com/music)
- [ccMixter](https://ccmixter.org)

---

## 🌐 Despliegue

### Vercel (recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta `dist/` a netlify.com/drop
```

### GitHub Pages
```bash
# En vite.config.ts, base ya está configurado como './'
npm run build
# Sube el contenido de dist/ a la rama gh-pages
```

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── StarField.tsx        ← Campo de estrellas + nebulosa
│   ├── ShootingStars.tsx    ← Estrellas fugaces aleatorias
│   ├── MoonScene.tsx        ← Luna con cráteres y glow
│   ├── MusicPlayer.tsx      ← Reproductor flotante
│   ├── RomanticButton.tsx   ← Botón elegante reutilizable
│   └── SectionTitle.tsx     ← Título animado de sección
│
├── sections/
│   ├── Hero.tsx             ← Intro + portada espacial
│   ├── ThreeWeeks.tsx       ← Las tres semanas
│   ├── TwoSouls.tsx         ← Dos almas (estrellas que se acercan)
│   ├── Poem.tsx             ← Poema principal
│   ├── Memories.tsx         ← Galería artística
│   ├── MoonAndWater.tsx     ← Luna reflejada en el agua
│   ├── ShootingStarSection.tsx ← Sección especial estrella fugaz
│   ├── OurUniverse.tsx      ← Constelación L+G
│   ├── FinalLetter.tsx      ← Carta final
│   └── Ending.tsx           ← Pantalla de cierre
│
├── App.tsx                  ← Ensamblado de secciones
├── main.tsx                 ← Punto de entrada
└── index.css                ← Estilos globales y animaciones CSS
```

---

*Hecho con ❤️ especialmente para Luisa Fernanda*
