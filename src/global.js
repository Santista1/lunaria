import tunnel from "tunnel-rat"
import { atom } from "jotai"

export const ui = tunnel()
export const nipple = atom({ position: { x: window.innerWidth - 75, y: window.innerHeight - 75 } })
