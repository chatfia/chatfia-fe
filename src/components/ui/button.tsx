import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-secondary",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-primary",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        bounce:
          "gap-1 flex items-center bg-green-600 animate-bounce text-xl text-gray-50 hover:bg-green-700 active:bg-green-800",
        start:
          "absolute gap-3 left-1/2 top-16 flex -translate-x-1/2 transform items-center justify-center bg-red-600 text-gray-50 opacity-0 transition-opacity duration-300 hover:bg-red-700 active:bg-red-800 group-hover:opacity-100 outline outline-4 outline-gray-900",
        homeInfo:
          "flex items-center bg-blue-600 gap-1 text-gray-50 font-medium hover:bg-blue-700 active:bg-blue-800",
        homeStart:
          "flex items-center bg-red-600 gap-1 text-gray-50 font-medium hover:bg-red-700 active:bg-red-800",
        scrollToTop:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus:ring-2 focus:ring-gray-400 shadow-md",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        bounce: "h-10 px-3 py-2 rounded-md text-xl",
        start: "h-12 px-3 py-2 rounded-lg text-2xl",
        home: "h-10 px-3 py-2 rounded-md text-xl",
        scrollToTop: "p-2 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
