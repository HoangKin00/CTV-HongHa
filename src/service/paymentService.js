import { useQuery } from "@tanstack/react-query";
import { getPaymentFn } from "../api/payment";

export function useGetPayment(body) {
    const { data: dataPayment, isLoading: isLoadingPayment, isSuccess: isSuccessPayment, refetch: refetchPayment } = useQuery({
        queryKey: ['payment', body.name ? body.name : body.booking_id ? body.booking_id : body.from_date ? body.from_date : body.to_date ? body.to_date : 'all'],
        queryFn: () => getPaymentFn(body),
        enabled: body.name ? false : body.booking_id ? false : body.from_date ? false : body.to_date ? false : true,
        keepPreviousData: true
    });
    return { dataPayment, isLoadingPayment, isSuccessPayment, refetchPayment }
}