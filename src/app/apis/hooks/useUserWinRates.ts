import { useWinRateStore } from "@/app/stores/useWinRateStore";
import { useAuthStore } from "@/app/stores/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/app/apis/authApi";
import { WinRate } from "@/app/stores/useWinRateStore";

export const useUserWinRates = () => {
  const setWinRate = useWinRateStore((state) => state.setWinRate);
  const { isSuccess } = useAuthStore();

  const query = useQuery({
    queryKey: ["userWinRates"],
    queryFn: async () => {
      const data: any = await authApi.checkAuth();

      if (data.loggedIn) {
        const winRate: WinRate = {
          wins: data.wins,
          losses: data.losses,
          mafiaWins: data.mafiaWins,
          mafiaLosses: data.mafiaLosses,
          policeWins: data.policeWins,
          policeLosses: data.policeLosses,
          doctorWins: data.doctorWins,
          doctorLosses: data.doctorLosses,
          citizenWins: data.citizenWins,
          citizenLosses: data.citizenLosses,
        };

        setWinRate(winRate);
        return winRate;
      } else {
        throw new Error("로그인 정보를 불러오는데 실패했습니다.");
      }
    },
    enabled: isSuccess,
  });

  if (query.isError) {
    console.error(
      "유저 승률 정보를 가져오는 중 오류가 발생했습니다:",
      query.error,
    );
  }

  return query;
};
