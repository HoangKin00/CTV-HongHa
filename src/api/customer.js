import http from "./http";

export const getCustomerFn = async (body) => {
    return await http.get(`/v1/get-partner?${body.name ? `name=${body.name}` : ''}`, {
        headers: { Authorization: body.token }
    })
}