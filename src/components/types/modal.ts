export interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  currentValueLabel?: string;
  currentValue?: string;
  newValueLabel: string;
  newValuePlaceholder: string;
  confirmValueLabel?: string;
  confirmValuePlaceholder?: string;
  onConfirm: () => void;
  modalType: "nickname" | "password";
}
