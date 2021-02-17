export const getPhotosPerSize = (size, images) => {
    const placeholderImage = `${process.env.PUBLIC_URL}/image-placeholder.svg`

    if(!size || !images || images.length <= 0) {
        return [placeholderImage]
    }

    return images.reduce((acc, cur) => {
        if (cur.hasOwnProperty(size)) {
            return [ ...acc, cur[size] ]
        }

        return [ ...acc, placeholderImage ]
    }, [])
}

export const getFirstPhotoPerSize = (size, images) => {
    return getPhotosPerSize(size, images)[0]
}
