import { useQuery } from "@tanstack/react-query";
import { getCollaboratorFn } from "../api/collaborator";

export function useGetUser(token) {
    const { data: dataUser, isLoading: isLoadingUser, isSuccess: isSuccessUser } = useQuery({
        queryKey: ['user'],
        queryFn: () => getCollaboratorFn(token)
    });
    return { dataUser, isLoadingUser, isSuccessUser }
}