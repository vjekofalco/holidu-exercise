import React from 'react'
import { render, findByText } from '@testing-library/react'

import { RatingStars } from './index'

test('Should render two full star and three empty stars', async () => {
    const { container } = render(<RatingStars votesCount={1} averageCount={47}/>)

    const fullStar = container.querySelectorAll('[data-test-attribute="full-star"]')
    const emptyStar = container.querySelectorAll('[data-test-attribute="empty-star"]')
    const halfStar = container.querySelectorAll('[data-test-attribute="half-star"]')

    expect(fullStar.length).toBe(2)
    expect(emptyStar.length).toBe(3)
    expect(halfStar.length).toBe(0)

    expect(await findByText(container, '(1 review)')).toBeVisible()
})

test('Should render two full star one half star and two empty stars', async () => {
    const { container } = render(<RatingStars votesCount={40} averageCount={52}/>)

    const fullStar = container.querySelectorAll('[data-test-attribute="full-star"]')
    const emptyStar = container.querySelectorAll('[data-test-attribute="empty-star"]')
    const halfStar = container.querySelectorAll('[data-test-attribute="half-star"]')

    expect(fullStar.length).toBe(2)
    expect(emptyStar.length).toBe(2)
    expect(halfStar.length).toBe(1)

    expect(await findByText(container, '(40 reviews)')).toBeVisible()
})
