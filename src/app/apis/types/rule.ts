// rule 페이지 props 타입 정의
export interface RoleCardProps {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string[];
  alignment: "left" | "center" | "right";
}
