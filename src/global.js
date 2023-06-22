import { atom } from "jotai"
import tunnel from "tunnel-rat"
import { Clock } from "three"

export const audio = new Audio(
  "https://res.cloudinary.com/dexin8o58/video/upload/v1687157753/Music/Daft_Punk_-_Instant_Crush_Video_ft._Julian_Casablancas_wxruis.mp3"
)
audio.volume = 1

export const touch = "ontouchstart" in document.documentElement

export const ui = tunnel()
export const cubes = tunnel()

export const joystick = atom({})
export const lock = atom()
export const hud = atom(false)

export const clock = new Clock()
