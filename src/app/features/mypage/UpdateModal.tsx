import { UpdateModalProps } from "@/components/types/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateSchema } from "@/app/validators/auth";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(updateSchema) });

  const onSubmit = (data: any) => {
    console.log("제출된 데이터:", data); // 데이터 출력
    onConfirm(data);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("nickname")}
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black"
                  />
                  {errors.nickname && (
                    <p className="mt-1 text-[0.8rem] text-destructive">
                      {String(errors.nickname?.message)}
                    </p>
                  )}
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
                    {...register("currentPassword")}
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black"
                  />
                  {errors.currentPassword && (
                    <p className="mt-1 text-[0.8rem] text-destructive">
                      {String(errors.currentPassword?.message)}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="mb-2 block text-sm text-black">
                    {newValueLabel}
                  </label>
                  <input
                    type="password"
                    placeholder={newValuePlaceholder}
                    {...register("newPassword")}
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black"
                  />
                  {errors.newPassword && (
                    <p className="mt-1 text-[0.8rem] text-destructive">
                      {String(errors.newPassword?.message)}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="mb-2 block text-sm text-black">
                    {confirmValueLabel}
                  </label>
                  <input
                    type="password"
                    placeholder={confirmValuePlaceholder}
                    {...register("confirmNewPassword")}
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black"
                  />
                  {errors.confirmNewPassword && (
                    <p className="mt-1 text-[0.8rem] text-destructive">
                      {String(errors.confirmNewPassword?.message)}
                    </p>
                  )}
                </div>
              </>
            )}
            <div className="flex justify-end space-x-1 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded bg-gray-400 px-6 py-2"
              >
                취소
              </button>
              <button type="submit" className="rounded bg-primary px-6 py-1">
                변경
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
