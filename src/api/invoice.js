import http from "./http";

export const getInvoiceFn = async (token) => {
    return await http.get(`/v1/get-invoice`, {
        headers: { Authorization: token }
    })
}