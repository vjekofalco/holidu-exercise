import React from 'react'
import styled from 'styled-components'

import { THUMBNAIL_LABEL } from '../../constants'
import { getFirstPhotoPerSize } from '../../helpers/photos-helpers'

const ApartmentsGalleryListItemWrapper = styled.div``

export const ApartmentsGalleryList = ({ apartments }) => (<>
    {
        apartments?.length > 0 && apartments.map((a) => (<ApartmentsGalleryListItemWrapper key={a.id}>
            <img src={getFirstPhotoPerSize(THUMBNAIL_LABEL, a.photos)}/>
        </ApartmentsGalleryListItemWrapper>))
    }
</>)
