import { ChangeEvent } from "react";

// lobby 페이지 props 타입 정의
export interface GameRoomDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onCreateRoom: (
    roomTitle: string,
    isPrivate: boolean,
    password: string
  ) => void;
}

export interface GameRoomProps {
  img: "red" | "black";
  title: string;
  players: number;
  private: boolean;
  password?: string;
  registrationDate?: Date;
}

export interface GameRoomCommandProps {
  searchInput: string;
  handleSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface GameRoomProps {
  img: "red" | "black";
  title: string;
  players: number;
  private: boolean;
  password?: string;
  registrationDate?: Date;
}
