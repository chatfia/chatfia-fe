import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

type LogInBtnProps = {
  onClick?: () => void;
};

export default function LogInBtn({ onClick }: LogInBtnProps) {
  return (
    <Link href="/auth">
      <Button variant="bounce" className="gap-2" onClick={onClick}>
        LOGIN
        <LogIn />
      </Button>
    </Link>
  );
}
