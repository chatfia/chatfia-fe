import { UpdateModalProps } from "@/components/types/modal";
import { X } from "lucide-react";

export const UpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onClose,
  title,
  currentValueLabel,
  currentValue,
  newValueLabel,
  newValuePlaceholder,
  confirmValueLabel,
  confirmValuePlaceholder,
  onConfirm,
  modalType,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-xs rounded-xl bg-white shadow-lg">
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
          >
            <X />
          </button>
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-black">{title}</h2>
          </div>
          {modalType === "nickname" && (
            <>
              <div className="mb-4">
                <label className="mb-2 block text-sm text-black">
                  {currentValueLabel}
                </label>
                <input
                  type="text"
                  value={currentValue}
                  readOnly
                  className="pointer-events-none w-full rounded border bg-gray-100 px-3 py-2 text-black"
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm text-black">
                  {newValueLabel}
                </label>
                <input
                  type="text"
                  placeholder={newValuePlaceholder}
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black"
                />
              </div>
            </>
          )}
          {modalType === "password" && (
            <>
              <div className="mb-4">
                <label className="mb-2 block text-sm text-black">
                  현재 비밀번호
                </label>
                <input
                  type="password"
                  placeholder="현재 비밀번호 입력"
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black"
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm text-black">
                  {newValueLabel}
                </label>
                <input
                  type="password"
                  placeholder={newValuePlaceholder}
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black"
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block text-sm text-black">
                  {confirmValueLabel}
                </label>
                <input
                  type="password"
                  placeholder={confirmValuePlaceholder}
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black"
                />
              </div>
            </>
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="flex-grow rounded-bl-xl bg-gray-400 px-2 py-4 text-lg"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="flex-grow rounded-br-xl bg-primary px-12 py-4 text-lg"
          >
            변경
          </button>
        </div>
      </div>
    </div>
  );
};
