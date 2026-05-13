import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bronze-400 disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-stone-900 text-cream-50 hover:bg-stone-800 shadow-soft",
        bronze:
          "relative overflow-hidden bg-gradient-to-b from-bronze-300 to-bronze-400 text-stone-900 shadow-[0_8px_24px_-8px_rgba(168,119,38,0.45)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(168,119,38,0.55)] after:absolute after:inset-0 after:z-10 after:translate-x-[-100%] after:animate-[shimmer-sweep_3s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent",
        outline:
          "border border-stone-300/70 bg-white/60 backdrop-blur text-stone-900 hover:bg-white/90",
        ghost: "text-stone-700 hover:text-stone-900 hover:bg-stone-100/70",
        link: "text-stone-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
