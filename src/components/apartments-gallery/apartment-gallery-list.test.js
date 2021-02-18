import { render } from '@testing-library/react'

import { ApartmentsGalleryList } from './apartments-galery-list'

test('Should display correct number of gallery items', () => {
    const { container } = render(<ApartmentsGalleryList apartments={[{id: 123}, {id: 321}]}/>)

    const galleryItemWrappers = container.querySelectorAll('[data-test-attribute="gallery-item-wrapper"]')

    expect(galleryItemWrappers.length).toBe(2)
})
