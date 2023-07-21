import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changePasswordFn, getTokenFn } from "../api/auth";


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

export function useChangePassword() {
    const { mutate: mutateChangePassword, isLoading: isLoadingChangePassword, isSuccess: isSuccessChangePassword } = useMutation({
        mutationFn: (body) => changePasswordFn(body),
    });
    return { mutateChangePassword, isLoadingChangePassword, isSuccessChangePassword }
}