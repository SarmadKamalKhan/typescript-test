import { calculateData } from './app'


test('Dividing 1 / 1 equals 1', () => {
  expect(calculateData("DTW874360/97/81")).toBe(`{ sku: 'DTW874360/97/81', stock: 'empty' }`)
})
