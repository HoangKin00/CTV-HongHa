import { useQuery } from "@tanstack/react-query";
import { getInvoiceFn } from "../api/invoice";


export function useGetInvoice(token) {
    const { data: dataInvoice, isLoading: isLoadingInvoice, isSuccess: isSuccessInvoice } = useQuery({
        queryKey: ['invoice'],
        queryFn: () => getInvoiceFn(token)
    });
    return { dataInvoice, isLoadingInvoice, isSuccessInvoice }
}