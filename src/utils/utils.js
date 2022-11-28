export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
export const waiting = (ms, result) => new Promise(resolve => setTimeout(resolve, ms, result))