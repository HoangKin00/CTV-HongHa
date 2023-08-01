import { useQuery } from "@tanstack/react-query";
import { getBookingFn } from "../api/booking";

export function useGetBooking(body) {
    const { data: dataBooking, isLoading: isLoadingBooking, isSuccess: isSuccessBooking, refetch: refetchBooking } = useQuery({
        queryKey: ['booking', body.code ? body.code : body.status ? body.status : body.from_date ? body.from_date : body.to_date ? body.to_date : 'all'],
        queryFn: () => getBookingFn(body),
        enabled: body.code ? false : body.status ? false : body.from_date ? false : body.to_date ? false : true,
        keepPreviousData: true
    });
    return { dataBooking, isLoadingBooking, isSuccessBooking, refetchBooking }
}