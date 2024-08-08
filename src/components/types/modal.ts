export interface UpdateNicknameModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNickname: string;
  onSuccess: (nickname: string) => void;
}

export interface UpdatePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  newValueLabel: string;
  newValuePlaceholder: string;
  confirmValueLabel: string;
  confirmValuePlaceholder: string;
  onSuccess: (newPassword: string) => void;
}
