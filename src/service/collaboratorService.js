import { useQuery } from "@tanstack/react-query";
import { getCollaboratorFn } from "../api/collaborator";

export function useGetUser(token) {
    const { data: dataUser, isLoading: isLoadingUser, isSuccess: isSuccessUser, isError: isErrorUser, error: errorUser } = useQuery({
        queryKey: ['user'],
        queryFn: () => getCollaboratorFn(token)
    });
    return { dataUser, isLoadingUser, isSuccessUser, isErrorUser, errorUser }
}