import { useQuery } from "@tanstack/react-query";
import { getInvoiceFn } from "../api/invoice";


export function useGetInvoice(body) {
    const { data: dataInvoice, isLoading: isLoadingInvoice, isSuccess: isSuccessInvoice, refetch: refetchInvoice } = useQuery({
        queryKey: ['invoice', body.name ? body.name : body.status ? body.status : body.from_date ? body.from_date : body.to_date ? body.to_date : 'all'],
        queryFn: () => getInvoiceFn(body),
        enabled: body.name ? false : body.status ? false : body.from_date ? false : body.to_date ? false : true,
        keepPreviousData: true
    });
    return { dataInvoice, isLoadingInvoice, isSuccessInvoice, refetchInvoice }
}