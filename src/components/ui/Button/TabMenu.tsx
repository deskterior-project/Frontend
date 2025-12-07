import { cn } from "@/hooks/cn";

interface TabMenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const TabMenu = ({ children, className, ...props }: TabMenuProps) => {
  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center gap-1 cursor-pointer",
        "px-2 py-1 pc:px-4 pc:py-2",
        "typo-mo-body-s500 pc:typo-pc-body-s500",
        "bg-white-200 hover:bg-white-500 active:bg-white-500 disabled:bg-white-500",
        "text-black-900 hover:text-black-800 active:text-black-800 disabled:text-black-400",
        "disabled:cursor-not-allowed",
        "inset-ring-1 inset-ring-black-900 hover:inset-ring-black-800 active:inset-ring-black-800 disabled:inset-ring-black-400",
        className
      )}
    >
      {children}
    </button>
  );
};

export default TabMenu;
