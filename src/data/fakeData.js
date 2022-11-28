const dataShop = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
]

const dataShop2 = [
  { id: 3, value: 'c' },
  { id: 4, value: 'd' },
]

export const fakeShopData = (id) => {
  return new Promise(resolve => setTimeout(resolve, 3000, id === 1 ? dataShop : dataShop2))
}