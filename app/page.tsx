import Home from "@/components/Home"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Glanzeuro Lingo — Speak beyond words",
  description: "Glanzeuro Lingo — Speak beyond words.",
}

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  )
}
