"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LogInForm } from "@/app/features/auth/LogInForm";

const Auth: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderHeader = (title: string, description: string) => (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <div className="flex justify-center gap-8 p-4">
        <Link href="#">
          <Image
            src="/icons/naver.png"
            alt="Naver Login"
            width={40}
            height={40}
          />
        </Link>
        <Link href="#">
          <Image
            src="/icons/kakao.png"
            alt="Kakao Login"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <CardDescription className="text-center">{description}</CardDescription>
    </CardHeader>
  );

  if (!isClient) return null; // 클라이언트 사이드에서만 렌더링

  return (
    <div className="fixed left-0 top-0 flex h-full w-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-60">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card
          className={cn(
            "flex h-[750px] w-[500px] flex-col justify-center px-4"
          )}
        >
          <motion.div
            className={cn("space-y-3", {
              "opacity-0 transition-opacity duration-100": step === 1,
              "opacity-100 transition-opacity duration-100": step !== 1,
            })}
            animate={{ translateX: `${step * -100}%` }}
            transition={{ ease: "easeInOut" }}
          >
            {renderHeader("LOGIN", "or use your account")}
            <CardContent>
              <LogInForm step={step} setStep={setStep} />
            </CardContent>
          </motion.div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
