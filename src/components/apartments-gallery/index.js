import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ApartmentsGalleryList } from './apartments-galery-list'
import { getApartments } from '../../store/apartments-reducer'

const ApartmentsGalleryWrapper = styled.div`
  display: flex;
`

export const ApartmentsGallery = () => {
    const dispatch = useDispatch()
    const { offers, loading } = useSelector(({ apartments }) => apartments)

    const [apartments, setApartments] = useState([])

    useEffect(() => {
        setApartments(offers)
        console.log(offers)
    }, [ offers ])

    useEffect(() => {
        dispatch(getApartments())
    }, [])

    return (<ApartmentsGalleryWrapper>
        {loading
         ? <h3>Loading...</h3>
         : <ApartmentsGalleryList apartments={apartments}/>}
    </ApartmentsGalleryWrapper>)
}
