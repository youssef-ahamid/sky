import { writable } from 'svelte/store'

export const activeSection = writable({ color: "", id: "", title: "" })
export const activePage = writable("")
