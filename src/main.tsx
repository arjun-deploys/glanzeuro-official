import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@fontsource/dm-serif-display/latin-400.css"
import "@fontsource/dm-serif-display/latin-400-italic.css"
import "@fontsource-variable/manrope/wght.css"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
