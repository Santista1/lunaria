import { atom } from "jotai"
import tunnel from "tunnel-rat"

export const audio = new Audio(
  "https://res.cloudinary.com/dexin8o58/video/upload/v1686900150/The_Police_-_Message_In_A_Bottle_tabtrn.mp3"
)
audio.volume = 0.1

export const touch = "ontouchstart" in document.documentElement

export const ui = tunnel()
export const cubes = tunnel()

export const joystick = atom({})
export const lock = atom()
export const hud = atom(false)
