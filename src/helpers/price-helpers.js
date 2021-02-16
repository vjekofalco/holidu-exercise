import { EUR_CURRENCY, EUR_CURRENCY_SYMBOL, USD_CURRENCY, USD_CURRENCY_SYMBOL } from "../constants";

export const formatPrice = (currency, value) => {
    switch (currency) {
        case EUR_CURRENCY:
            return `${value}${EUR_CURRENCY_SYMBOL}`
        case USD_CURRENCY:
            return `${USD_CURRENCY_SYMBOL}${value}`
        default:
            return `${currency}${value}`
    }
}
