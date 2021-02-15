export const GET_APARTMENTS = 'apartments/GET_APARTMENTS' // Using this naming convention for easier debugging.
export const GET_APARTMENTS_SUCCESS = 'apartments/GET_APARTMENTS_SUCCESS'

export const getApartments = () => ({ type: GET_APARTMENTS })

const initialState = {
    metaData: {},
    offers: [],
    loading: false
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case GET_APARTMENTS: {
            return { ...state, loading: true }
        }
        case GET_APARTMENTS_SUCCESS: {
            console.log(payload)
            return { ...state, ...payload, loading: false }
        }
    default:
        return state
    }
}
