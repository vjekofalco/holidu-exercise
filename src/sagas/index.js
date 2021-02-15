import { all } from 'redux-saga/effects'

import { watchGetApartments } from './appartments-saga'

export default function* rootSaga() {
    yield all([
        watchGetApartments()
    ])
}
