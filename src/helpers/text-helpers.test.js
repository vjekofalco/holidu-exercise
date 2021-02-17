import { elipsisText } from './text-helpers'

const mockMaxLength = 30
const mockText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
const mockTextSubstring = 'Lorem ipsum dolor sit amet, co'

test('Should return empty string if no text is passed', () => {
    expect(elipsisText()).toBe('')
    expect(elipsisText(mockMaxLength, undefined)).toBe('')
    expect(elipsisText(null, mockText)).toBe('')
    expect(elipsisText('mock', mockText)).toBe('')
    expect(elipsisText(mockMaxLength, 123)).toBe('')
})

test('Should return passed text', () => {
    expect(elipsisText(mockMaxLength, mockTextSubstring)).toBe(mockTextSubstring)
})

test('Should return elipsis text', () => {
    expect(elipsisText(mockMaxLength, mockText)).toBe(`${mockTextSubstring}...`)
})
