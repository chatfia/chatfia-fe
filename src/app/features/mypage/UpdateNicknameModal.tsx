import { UpdateNicknameModalProps } from "@/components/types/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateNicknameSchema } from "@/app/validators/auth";
import { useToast } from "@/components/ui/use-toast";
import { useUpdateNickname } from "@/app/apis/hooks/useUpdateNickname";
import { X } from "lucide-react";

export const UpdateNicknameModal: React.FC<UpdateNicknameModalProps> = ({
  isOpen,
  onClose,
  currentNickname,
  onSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateNicknameSchema),
  });

  const { toast } = useToast();
  const updateNicknameMutation = useUpdateNickname();

  console.log("현재 폼 상태의 에러:", errors); // 이 부분에 추가

  const onNicknameChangeSubmit = (data: any) => {
    console.log("onSubmit 실행됨 : data >", data);
    console.log("폼 제출 시 에러:", errors); // 이 부분에 추가

    const handleSuccess = (response: string) => {
      console.log("handleSuccess 내  : response >", response);
      toast({
        title: "닉네임이 성공적으로 변경되었습니다.",
        variant: "success",
        duration: 3000,
      });
      onSuccess(data.nickname);
      onClose();
    };

    const handleError = (error: any) => {
      toast({
        title: "닉네임 변경에 실패했습니다.",
        description: (error as Error).message,
        variant: "destructive",
        duration: 3000,
      });
    };

    updateNicknameMutation.mutate(data.nickname, {
      onSuccess: handleSuccess,
      onError: handleError,
    });
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
            <h2 className="text-lg font-semibold text-black">닉네임 수정</h2>
          </div>
          <form onSubmit={handleSubmit(onNicknameChangeSubmit)}>
            <div className="mb-4">
              <label className="mb-2 block text-sm text-black">
                현재 닉네임
              </label>
              <input
                type="text"
                value={currentNickname}
                readOnly
                className="pointer-events-none w-full rounded border bg-gray-100 px-3 py-2 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 block text-sm text-black">
                변경할 닉네임
              </label>
              <input
                type="text"
                placeholder="새 닉네임 입력"
                {...register("nickname")}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm text-black"
              />
              {errors.nickname && (
                <p className="mt-1 text-[0.8rem] text-destructive">
                  {String(errors.nickname?.message)}
                </p>
              )}
            </div>
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
