import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"

import "@fontsource/dm-serif-display/latin-400.css"
import "@fontsource/dm-serif-display/latin-400-italic.css"
import "@fontsource-variable/manrope/wght.css"
import "./index.css"
import App from "./App.tsx"

const root = document.getElementById("root")!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Pages are pre-rendered to static HTML at build time, so the browser shows
// content straight away and React takes over ("hydrates") that markup.
// In development the root is empty and the app renders normally.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
