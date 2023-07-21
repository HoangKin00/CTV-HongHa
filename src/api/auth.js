import http from "./http";

export const getTokenFn = async (body) => {
    return await http.post(`/auth/token`, JSON.stringify(body))
};

export const changePasswordFn = async (body) => {
    return await http.post(`/v1/change-password`, JSON.stringify(body), {
        headers: { Authorization: body.token }
    })
};