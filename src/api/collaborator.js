import http from "./http";

export const getCollaboratorsFn = async (token) => {
    return await http.get(`/v1/get-collaborators`, {
        headers: {
            Authorization: token
        }
    })
};

export const getCollaboratorFn = async (token) => {
    return await http.get(`/v1/get-collaborator`, {
        headers: {
            Authorization: token
        }
    })
};