// home 페이지 props 타입 정의
export interface HomeProps {
  title: string;
  text: string;
  img: string;
  isTextLeft: boolean;
}

// FeatureItem 컴포넌트 props 타입 정의
export interface FeatureItemProps {
  src: string;
  alt: string;
  text: string;
}
