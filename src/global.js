import { atom } from "jotai"
import tunnel from "tunnel-rat"

export const audio = new Audio(
  "https://res.cloudinary.com/dexin8o58/video/upload/v1687051197/Music/The_Police_-_Walking_On_The_Moon_fjmxz2.mp3"
)
audio.volume = 1

export const touch = "ontouchstart" in document.documentElement

export const ui = tunnel()
export const cubes = tunnel()

export const joystick = atom({})
export const lock = atom()
export const hud = atom(false)
