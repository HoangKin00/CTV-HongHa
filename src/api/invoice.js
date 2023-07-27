import http from "./http";

export const getInvoiceFn = async (body) => {
    return await http.get(`/v1/get-invoice?${body.name ? `name=${body.name}&` : ''}${body.status ? `status=${body.status}&` : ''}${body.from_date ? `from_date=${body.from_date}&` : ''}${body.to_date ? `to_date=${body.to_date}` : ''}`, {
        headers: { Authorization: body.token }
    })
}