import React from 'react'
import styled from 'styled-components'

import { Text } from '../common/text'
import {grayScale3, support} from '../../constants/colors'
import { ReactComponent as StarIcon } from '../../icons/star.svg'
import { ReactComponent as StarIconHalf } from '../../icons/star-half.svg'

const starIconStyling = `
  fill: ${support};
  width: 0.75rem;
  height: 0.75rem;
`

const RatingStarIcon = styled(StarIcon)`
  ${starIconStyling}
  
  ${({ stroke }) => stroke && `path { fill: ${support}; }`}
`

const HalfRatingStarIcon = styled(StarIconHalf)`
  ${starIconStyling}
`

const RatingStarsMainWrapper = styled.div`
  display: flex;
  align-items: center;
`
const RatingText = styled(Text)`
  margin-left: 0.5rem;
`


export const RatingStars = ({ votesCount, averageCount }) => {
    const averagePerStar = averageCount / 20 // Dividing average count with one fifth of 100.
    const fullStarsCount = Math.floor(averagePerStar)
    const averageDifference = averagePerStar - fullStarsCount
    const shouldDisplayHalfStar = averageDifference.toFixed(2) > 0.50
    const emptyStarsCount = shouldDisplayHalfStar ? 5 - fullStarsCount - 1 : 5 - fullStarsCount

    return (<RatingStarsMainWrapper>
        {Array.from({ length: fullStarsCount }).map(() => (<RatingStarIcon stroke/>))}
        {shouldDisplayHalfStar && <HalfRatingStarIcon />}
        {Array.from({ length: emptyStarsCount }).map(() => (<RatingStarIcon/>))}
        { votesCount && <RatingText color={grayScale3} inline size={0.75}>({votesCount} {votesCount > 1 ? 'reviews' : 'review'})</RatingText> }
    </RatingStarsMainWrapper>)
}
