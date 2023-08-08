import http from "./http";

export const getPaymentFn = async (body) => {
    return await http.get(`/v1/get-payment?${body.name ? `name=${body.name}&` : ''}${body.booking_id ? `booking_code=${body.booking_id}&` : ''}${body.from_date ? `from_date=${body.from_date}&` : ''}${body.to_date ? `to_date=${body.to_date}` : ''}`, {
        headers: { Authorization: body.token }
    })
}