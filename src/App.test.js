import { render } from '@testing-library/react'
import App from './App'

test('Checks if gallery component is there', () => {
  const { container } = render(<App />)
  const galleryWrapper = container.querySelector('[data-test-attribute="gallery-wrapper"]')
  expect(galleryWrapper).toBeTruthy()
});
