import axios from "axios"
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../api"

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== apiCallBegan.type) return next(action)

        const { url, method, data, headers, onSuccess, onStart, onError } = action.payload

        if (onStart) dispatch({ type: onStart })

        try {
            const res = await axios.request({
                baseURL: process.env.REACT_APP_BASE_URL,
                url,
                method,
                data,
                headers,
            })
            dispatch(apiCallSuccess(res.data))
            if (onSuccess) dispatch({ type: onSuccess, payload: res.data })
        } catch (err) {
            dispatch(apiCallFailed(err))
            if (onError) return dispatch({ type: onError, payload: err.response.data })
        }
    }

export default api