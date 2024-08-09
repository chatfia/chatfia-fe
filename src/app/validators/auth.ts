import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const logInSchema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  password: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value),
      "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
    ),
});

export const signUpSchema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  emailVerifyCode: z
    .string()
    .regex(/^\d+$/, { message: "인증번호는 숫자만 포함해야 합니다." })
    .length(4, { message: "인증번호는 4자리입니다." }),
  nickname: z
    .string()
    .min(2, { message: "닉네임은 2글자 이상이어야 합니다." })
    .max(100, { message: "닉네임은 100글자 이하이어야 합니다." }),
  password: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value),
      "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
    ),
  confirmPassword: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value),
      "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
    ),
});

export const updateSchema = z
  .object({
    nickname: z
      .string()
      .min(2, { message: "닉네임은 2글자 이상이어야 합니다." })
      .max(100, { message: "닉네임은 100글자 이하이어야 합니다." }),
    currentPassword: z
      .string()
      .min(6, { message: "현재 비밀번호를 입력해주세요." }),
    newPassword: z
      .string()
      .min(6, { message: "비밀번호는 최소 6자리 이상이어야 합니다." })
      .max(100, { message: "비밀번호는 100자리 이하이어야 합니다." })
      .refine((value) => passwordRegex.test(value), {
        message:
          "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.",
      }),
    confirmNewPassword: z
      .string()
      .min(6, { message: "비밀번호는 최소 6자리 이상이어야 합니다." })
      .max(100, { message: "비밀번호는 100자리 이하이어야 합니다." }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export const updateNicknameSchema = z.object({
  nickname: z
    .string()
    .min(2, { message: "닉네임은 2글자 이상이어야 합니다." })
    .max(100, { message: "닉네임은 100글자 이하이어야 합니다." }),
});
