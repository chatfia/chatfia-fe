export interface UpdateNicknameModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNickname: string;
  onSuccess: (nickname: string) => void;
}

export interface UpdatePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newPassword: string) => void;
  title: string;
  currentPasswordLabel: string;
  currentPasswordPlaceholder: string;
  newPasswordLabel: string;
  newPasswordPlaceholder: string;
  confirmValueLabel: string;
  confirmValuePlaceholder: string;
}
