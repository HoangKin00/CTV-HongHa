import http from "./http";

export const getBookingFn = async (token) => {
    return await http.get(`/v1/get-booking`, {
        headers: {
            Authorization: token
        }
    })
}