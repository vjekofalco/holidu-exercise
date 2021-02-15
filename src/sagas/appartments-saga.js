import axios from 'axios'
import { put, takeEvery, call } from 'redux-saga/effects'

import { APARTMENTS_GALLERY_API } from '../constants'
import { GET_APARTMENTS, GET_APARTMENTS_SUCCESS } from '../store/apartments-reducer'

function* getApartments () {
    try {
        const response = yield call(axios.get, APARTMENTS_GALLERY_API)
        yield put({type: GET_APARTMENTS_SUCCESS, payload: response.data})
    } catch (error) {
        yield put({type: "FETCH_FAILED", error})
    }
}

export function* watchGetApartments () {
    yield takeEvery(GET_APARTMENTS, getApartments)
}
