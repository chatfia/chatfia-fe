import JobWinRates from "@/app/features/mypage/JobWinRates";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MyPage() {
  return (
    <div className="flex flex-col items-center p-4">
      <JobWinRates />
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between rounded-t-xl bg-primary p-4 text-gray-50">
          <h2 className="text-lg font-semibold">내프로필</h2>
          <Link href="/mypage/profile" className="transform cursor-pointer">
            <ChevronRight />
          </Link>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-4">
          <span className="text-lg text-zinc-900">닉네임</span>
          <button className="rounded bg-gray-200 px-3 py-1 text-gray-800">
            수정
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 p-4">
          <span className="text-lg text-zinc-900">이메일</span>
          <button className="rounded bg-gray-200 px-3 py-1 text-gray-800">
            수정
          </button>
        </div>
        <div className="flex items-center justify-between rounded-b-xl border-t border-gray-200 bg-gray-50 p-4">
          <span className="text-lg text-zinc-900">비밀번호</span>
          <button className="rounded bg-gray-200 px-3 py-1 text-gray-800">
            수정
          </button>
        </div>
      </div>
    </div>
  );
}

// 오늘의 할 일
// 1. 내프로필 페이지 구현하기
// 2. 직업별 승률 페이지 구현하기
