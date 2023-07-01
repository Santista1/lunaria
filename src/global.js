import { atom } from "jotai"
import tunnel from "tunnel-rat"
import { Clock } from "three"

export const audio = new Audio(
  "https://res.cloudinary.com/dexin8o58/video/upload/v1688226200/Music/Bomba_Est%C3%A9reo_-_Pajaros_civkjo.mp3"
)
audio.volume = 0.5

export const touch = "ontouchstart" in document.documentElement

export const ui = tunnel()
export const cubes = tunnel()

export const joystick = atom({})
export const lock = atom()
export const hud = atom(false)

export const clock = new Clock()
