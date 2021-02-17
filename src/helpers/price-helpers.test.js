import { formatPrice } from './price-helpers'
import { EUR_CURRENCY, EUR_CURRENCY_SYMBOL, USD_CURRENCY, USD_CURRENCY_SYMBOL } from "../constants";

test('Should return empty string if there is no value or currency', () => {
    expect(formatPrice()).toBe('')
    expect(formatPrice(EUR_CURRENCY)).toBe('')
    expect(formatPrice(undefined, 100)).toBe('')
})

test('Should format price correctly', () => {
    expect(formatPrice(EUR_CURRENCY, 100)).toBe(`100${EUR_CURRENCY_SYMBOL}`)
    expect(formatPrice(USD_CURRENCY, 100)).toBe(`${USD_CURRENCY_SYMBOL}100`)
    expect(formatPrice('HRK', 100)).toBe('100HRK')
})
