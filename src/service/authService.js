import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getTokenFn } from "../api/auth";


export function useLogin() {
    const queryClient = useQueryClient();
    const { mutate: mutateLogin, isLoading: isLoadingLogin, isSuccess: isSuccessLogin } = useMutation({
        mutationFn: (body) => getTokenFn(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] })
        }
    });
    return { mutateLogin, isLoadingLogin, isSuccessLogin }
}