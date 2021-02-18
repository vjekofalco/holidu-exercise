import React from 'react'
import styled from 'styled-components'

import { Text, Span } from '../common/text'
import { MEDIUM_LABEL} from '../../constants'
import { RatingStars } from '../rating-stars.js'
import { ButtonPrimary } from '../common/button'
import { elipsisText } from '../../helpers/text-helpers'
import { formatPrice } from '../../helpers/price-helpers'
import { testItemAttr } from '../../helpers/test-helpers'
import { getFirstPhotoPerSize } from '../../helpers/photos-helpers'
import { mediaBreakpointUp } from '../../helpers/breakpoint-helpers'
import { ReactComponent as LocationIcon } from '../../icons/pin.svg'
import { grayScale1, grayScale2, support, white } from '../../constants/colors'

const ApartmentsGalleryListItemWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  margin-top: 1.5rem;
  padding-bottom: 4rem;
  background-color: ${white};
  box-shadow: 0px 3px 18px 0px ${grayScale2};
  
  &:hover {
    box-shadow: 0px 6px 18px 0px ${grayScale1};
  }

  @media ${mediaBreakpointUp.m} {
    width: calc((100% - 1rem) / 2);

    &:not(:nth-child(2n)) {
      margin-right: 1rem;
    }
  }
  
  @media ${mediaBreakpointUp.l} {
    width: calc((100% - 2rem) / 3);
    
    &:not(:nth-child(2n)) {
      margin-right: 0;
    }

    &:not(:nth-child(3n)) {
      margin-right: 1rem;
    }
  }
`

const ApartmentsGalleryImageWrapper = styled.div`
  display: flex;
  height: 16rem;
  overflow: hidden;
  align-content: center;
  justify-content: center;
  background-color: ${grayScale2};
`

const ApartmentsGalleryInfoWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`

const ApartmentsGalleryInfoDetailsWrapper = styled.div`
  flex: 3;
  padding-right: 1.5rem;
`

const ApartmentsGalleryInfoPriceWrapper = styled.div`
 flex: 1;
`

const ApartmentGalleryLocationText = styled(Text)`
  margin: 1rem 0;
`

const ApartmentGalleryLocationIcon = styled(LocationIcon)`
  fill: ${support};
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.25rem;
`

const ApartmentGalleryCtaWrapper = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  text-align: right;
  position: absolute;
`

export const ApartmentsGalleryListItem = ({ apartment }) => {
    if (!apartment) {
        return null
    }

    const { photos, details, price, location, rating } = apartment

    return (
        <ApartmentsGalleryListItemWrapper { ...testItemAttr('gallery-item-wrapper')}>
            <ApartmentsGalleryImageWrapper>
                <img src={getFirstPhotoPerSize(MEDIUM_LABEL, photos)} { ...testItemAttr('gallery-image')}/>
            </ApartmentsGalleryImageWrapper>
            <ApartmentsGalleryInfoWrapper>
                <ApartmentsGalleryInfoDetailsWrapper>
                    { details?.name && <Text size={1.25} { ...testItemAttr('gallery-name') }>{elipsisText(45, details.name)}</Text> }
                    { location?.name && <ApartmentGalleryLocationText bold size={0.75} color={support} { ...testItemAttr('gallery-location')}><ApartmentGalleryLocationIcon />{location.name}</ApartmentGalleryLocationText> }
                    { rating?.value > 0 && <RatingStars votesCount={rating.count} averageCount={rating.value}/> }
                </ApartmentsGalleryInfoDetailsWrapper>
                <ApartmentsGalleryInfoPriceWrapper>
                    { price?.daily && price?.currency && <Text textAlign={'right'}>from <Span size={1.25} bold { ...testItemAttr('gallery-price')}>{formatPrice(price.currency, price.daily)}</Span> per night</Text> }
                </ApartmentsGalleryInfoPriceWrapper>
            </ApartmentsGalleryInfoWrapper>
            <ApartmentGalleryCtaWrapper>
                <ButtonPrimary>VIEW OFFER</ButtonPrimary>
            </ApartmentGalleryCtaWrapper>
        </ApartmentsGalleryListItemWrapper>
    )
}
