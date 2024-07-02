"use client";

interface Props {
  children: React.ReactNode;
}

const NoRightClickImg: React.FC<Props> = ({ children }) => {
  const handleContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  return <div onContextMenu={handleContextMenu}>{children}</div>;
};

export default NoRightClickImg;
