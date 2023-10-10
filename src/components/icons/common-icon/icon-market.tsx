import { IconProps } from "@/types/common";

const IconMarket: React.FC<IconProps> = ({
  className = "",
  fill = "primary",
  stroke = "accent",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.67505 9.35V13.0917C2.67505 16.8333 4.17505 18.3333 7.91672 18.3333H12.4084C16.15 18.3333 17.65 16.8333 17.65 13.0917V9.35"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1667 10C11.6917 10 12.8167 8.75833 12.6667 7.23333L12.1167 1.66666H8.22507L7.66674 7.23333C7.51674 8.75833 8.64174 10 10.1667 10Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4252 10C17.1085 10 18.3418 8.63333 18.1752 6.95833L17.9418 4.66666C17.6418 2.5 16.8085 1.66666 14.6252 1.66666H12.0835L12.6668 7.50833C12.8085 8.88333 14.0502 10 15.4252 10Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.86677 10C6.24177 10 7.48344 8.88333 7.61677 7.50833L7.80011 5.66666L8.20011 1.66666H5.65844C3.47511 1.66666 2.64177 2.5 2.34177 4.66666L2.11677 6.95833C1.95011 8.63333 3.18344 10 4.86677 10Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1667 14.1667C8.77504 14.1667 8.08337 14.8583 8.08337 16.25V18.3333H12.25V16.25C12.25 14.8583 11.5584 14.1667 10.1667 14.1667Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconMarket;
