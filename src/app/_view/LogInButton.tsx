import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function LogInButton({}: Props) {
  return (
    <Link href="/auth">
      <Button variant="bounce" size="bounce">
        LOGIN
        <LogIn />
      </Button>
    </Link>
  );
}
