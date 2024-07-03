import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Auth: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-60">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card
          className={cn(
            "flex h-[750px] w-[500px] flex-col justify-center px-4"
          )}
        ></Card>
      </div>
    </div>
  );
};

export default Auth;
