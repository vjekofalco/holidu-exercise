import React from 'react'
import { ApartmentsGalleryListItem } from './apartments-gallery-list-item'


export const ApartmentsGalleryList = ({ apartments }) => (<>
    {
        apartments?.length > 0 && apartments.map((a) => (<ApartmentsGalleryListItem key={a.id} apartment={a}/>))
    }
</>)
