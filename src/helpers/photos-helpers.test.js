import { MEDIUM_LABEL, LARGE_LABEL } from '../constants'
import { getPhotosPerSize, getFirstPhotoPerSize } from './photos-helpers'

const mockImages = [
    {
        t: 'https://t-size-mock/12345/t.jpg',
        m: 'https://m-size-mock/12345/m.jpg',
        l: 'https://l-size-mock/12345/l.jpg',
        hr: 'https://hr-size-mock/12345/hr.jpg',
    },
    {
        t: 'https://t-size-mock/54321/t.jpg',
        m: 'https://m-size-mock/54321/m.jpg',
        hr: 'https://hr-size-mock/54321/hr.jpg',
    }
]

const mockPlaceholderImagePath = '/image-placeholder.svg'

test('Should return array with placeholder image', () => {
    let response = getPhotosPerSize()
    expect(response.length).toBe(1)
    expect(response[0]).toBe(mockPlaceholderImagePath)

    response = getPhotosPerSize(MEDIUM_LABEL)
    expect(response.length).toBe(1)
    expect(response[0]).toBe(mockPlaceholderImagePath)

    response = getPhotosPerSize(undefined, [])
    expect(response.length).toBe(1)
    expect(response[0]).toBe(mockPlaceholderImagePath)
})

test('Should return correct images', () => {
    let response = getPhotosPerSize(MEDIUM_LABEL, mockImages)
    expect(response.length).toBe(2)
    expect(response[0]).toBe('https://m-size-mock/12345/m.jpg')
    expect(response[1]).toBe('https://m-size-mock/54321/m.jpg')

    response = getPhotosPerSize(LARGE_LABEL, mockImages)
    expect(response.length).toBe(2)
    expect(response[0]).toBe('https://l-size-mock/12345/l.jpg')
    expect(response[1]).toBe(mockPlaceholderImagePath)
})
