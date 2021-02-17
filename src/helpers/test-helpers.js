export const testItemAttr = (v) => {
    return !process.env.REACT_APP_ENVIRONMENT ? { 'data-test-attribute': v } : ''
}
