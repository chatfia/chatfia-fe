import "../../globals.css";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata = {
  title: "Chatfia | 마이페이지",
  description: "User's MyPage",
};

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${notoSansKr.className}`}>{children}</div>;
}
