import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function LogInBtn() {
  return (
    <Link href="/auth">
      <Button variant="bounce" className="gap-2">
        LOGIN
        <LogIn />
      </Button>
    </Link>
  );
}
