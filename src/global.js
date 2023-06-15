import tunnel from "tunnel-rat"
import { atom } from "jotai"

export const touch = "ontouchstart" in document.documentElement

export const ui = tunnel()

export const joystick = atom({ position: { x: screen.width - 75, y: screen.height - 175 } })
