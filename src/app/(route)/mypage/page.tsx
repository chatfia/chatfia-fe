"use client";

import JobWinRates from "@/app/features/mypage/JobWinRates";
import UserProfile from "@/app/features/mypage/UserProfile";

export default function MyPage() {
  return (
    <div className="flex flex-col items-center p-4 pb-20">
      <JobWinRates />
      <UserProfile />
    </div>
  );
}
