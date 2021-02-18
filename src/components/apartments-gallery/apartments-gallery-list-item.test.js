import { render, findByText } from '@testing-library/react'

import { EUR_CURRENCY_SYMBOL } from '../../constants'
import { ApartmentsGalleryListItem } from './apartments-gallery-list-item'

const mockData =  {
    price: {
        total: 1120,
        daily: 160,
        strikeThroughTotal: null,
        strikeThroughDaily: null,
        isExact: false,
        currency: 'EUR',
        ccy: 'EUR',
        discountType: null,
        discountAmount: null,
        nights: null
    },
    details: {
        name: 'SA SERRA',
        shortName: [
            '210 m²',
            'Villa'
        ],
        apartmentTypeTitle: 'Villa',
        area: {
            value: 210,
            unit: 'UNIT_SM'
        },
        bedroomsCount: 3,
        guestsCount: 6,
        apartmentType: 'VILLA',
        longName: null,
        bedTypes: []
    },
    location: {
        lat: 39.60564,
        lng: 2.98441,
        name: 'Lloret de Vistalegre, Mallorca Inselmitte',
        geoHash: 'sp417cvptf3m',
        distanceToSearchRegionCenter: {
            id: null,
            format: 'NUMBER_WITH_UNIT',
            value: 1.6,
            unit: 'UNIT_KM'
        }
    },
    photos: [
        {
            t: 'https://img.holidu.com/images/a8ffd2ec-d8e3-44f7-a928-e3d634dcd3a9/t.jpg',
            m: 'https://img.holidu.com/images/a8ffd2ec-d8e3-44f7-a928-e3d634dcd3a9/m.jpg',
            l: 'https://img.holidu.com/images/a8ffd2ec-d8e3-44f7-a928-e3d634dcd3a9/l.jpg',
            hr: 'https://img.holidu.com/images/a8ffd2ec-d8e3-44f7-a928-e3d634dcd3a9/l.jpg',
            overlay: false
        },
        {
            t: 'https://img.holidu.com/images/c6ae8882-455d-4579-8ddd-ffdfb6fdd80e/t.jpg',
            m: 'https://img.holidu.com/images/c6ae8882-455d-4579-8ddd-ffdfb6fdd80e/m.jpg',
            l: 'https://img.holidu.com/images/c6ae8882-455d-4579-8ddd-ffdfb6fdd80e/l.jpg',
            hr: 'https://img.holidu.com/images/c6ae8882-455d-4579-8ddd-ffdfb6fdd80e/l.jpg',
            overlay: false
        },
        {
            t: 'https://img.holidu.com/images/8a9c1c3e-16f6-4f5a-993d-acb8e0f0dc53/t.jpg',
            m: 'https://img.holidu.com/images/8a9c1c3e-16f6-4f5a-993d-acb8e0f0dc53/m.jpg',
            l: 'https://img.holidu.com/images/8a9c1c3e-16f6-4f5a-993d-acb8e0f0dc53/l.jpg',
            hr: 'https://img.holidu.com/images/8a9c1c3e-16f6-4f5a-993d-acb8e0f0dc53/l.jpg',
            overlay: false
        }
    ],
    rating: {
        count: 5,
        value: 100
    }
}

test('Should display all data for one item', () => {
    const { container } = render(<ApartmentsGalleryListItem apartment={mockData}/>)

    const image = container.querySelector('[data-test-attribute="gallery-image"]')
    const price = container.querySelector('[data-test-attribute="gallery-price"]')
    const location = container.querySelector('[data-test-attribute="gallery-location"]')

    expect(image.src).toContain(mockData.photos[0].m)
    expect(price).toHaveTextContent(`${mockData.price.daily}${EUR_CURRENCY_SYMBOL}`)
    expect(location).toHaveTextContent(mockData.location.name)
})
