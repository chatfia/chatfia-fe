import dynamic from "next/dynamic";

// 동적 import를 사용하여 컴포넌트를 클라이언트 사이드에서만 렌더링하도록 설정
const MyPageHeader = dynamic(
  () => import("@/app/features/mypage/MyPageHeader"),
  { ssr: false },
);

export default function MyPage() {
  return (
    <div>
      <MyPageHeader />
    </div>
  );
}
