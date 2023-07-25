import { useQuery } from "@tanstack/react-query";
import { getCustomerFn } from "../api/customer";

export function useGetCustomer(body) {
    const { data: dataCustomer, isLoading: isLoadingCustomer, isSuccess: isSuccessCustomer, refetch: refetchCustomer } = useQuery({
        queryKey: ['customer', body.name ? body.name : 'all'],
        queryFn: () => getCustomerFn(body),
        enabled: body.name ? false : true,
        keepPreviousData: true
    });
    return { dataCustomer, isLoadingCustomer, isSuccessCustomer, refetchCustomer }
}