export const getPhotosPerSize = (size, images) => {
    if(!size || !images?.length > 0) {
        return []
    }

    return images.reduce((acc, cur) => {
        if (cur.hasOwnProperty(size)) {
            return [ ...acc, cur[size] ]
        }

        return acc
    }, [])
}

export const getFirstPhotoPerSize = (size, images) => {
    return getPhotosPerSize(size, images)[0]
}
