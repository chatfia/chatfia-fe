import "../../globals.css";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata = {
  title: "Chatfia | 인증",
  description: "Authentication Page",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${notoSansKr.className} pt-20`}>{children}</div>;
}
