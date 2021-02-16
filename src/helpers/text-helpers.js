export const elipsisText = (maxCharacters, text) => {
    if (text.length <= maxCharacters) {
        return text
    }

    return `${text.substring(0, maxCharacters)}...`
}
