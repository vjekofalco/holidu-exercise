export const testItemAttr = (v) => {
    return !process.env.PRODUCTION ? { 'data-test-attribute': v } : ''
}
