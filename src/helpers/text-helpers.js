export const elipsisText = (maxCharacters, text) => {
    if (typeof text !== 'string' || typeof maxCharacters !== 'number') {
        return ''
    }

    if (text.length <= maxCharacters) {
        return text
    }

    return `${text.substring(0, maxCharacters)}...`
}
