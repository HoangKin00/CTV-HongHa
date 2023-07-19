import { useQuery } from "@tanstack/react-query";
import { getBookingFn } from "../api/booking";

export function useGetBooking(token) {
    const { data: dataBooking, isLoading: isLoadingBooking, isSuccess: isSuccessBooking } = useQuery({
        queryKey: ['booking'],
        queryFn: () => getBookingFn(token)
    });
    return { dataBooking, isLoadingBooking, isSuccessBooking }
}