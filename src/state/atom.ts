import { atom } from "recoil";

export const listUsers = atom<string[]>({
    key: 'listUsers',
    default: []
})

export const resultGiveaway = atom<Map<string, string>>({
    key: 'resultGiveaway',
    default: new Map()
})

export const errorState = atom<string>({
    key: 'errorState',
    default: ''
})