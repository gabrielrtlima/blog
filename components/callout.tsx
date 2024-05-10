import { cn } from "@/lib/utils";

interface CalloutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "error";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 items-start rounded-md border border-l-4 p-4 w-full dark:max-w-none",
        {
          "border-red-900 bg-red-50 dark:prose": type === "error",
          "border-yellow-900 bg-yellow-50 dark:prose": type === "warning",
          "border-blue-900 bg-blue-50 dark:prose": type === "default",
        },
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
