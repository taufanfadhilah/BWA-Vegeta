import { IconProps } from "@/types/common";

const IconMagnifier: React.FC<IconProps> = ({
  className = "",
  fill = "primary",
  stroke = "accent",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.66671 14C11.1645 14 14 11.1645 14 7.66667C14 4.16887 11.1645 1.33334 7.66671 1.33334C4.1689 1.33334 1.33337 4.16887 1.33337 7.66667C1.33337 11.1645 4.1689 14 7.66671 14Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 14.6667L13.3334 13.3333"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconMagnifier;
