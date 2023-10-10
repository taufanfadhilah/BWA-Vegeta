import { IconProps } from "@/types/common";

const IconCart: React.FC<IconProps> = ({
  className = "",
  fill = "primary",
  stroke = "accent",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_115_2046)">
        <path
          d="M6.66659 18.3333C7.12682 18.3333 7.49992 17.9602 7.49992 17.5C7.49992 17.0397 7.12682 16.6666 6.66659 16.6666C6.20635 16.6666 5.83325 17.0397 5.83325 17.5C5.83325 17.9602 6.20635 18.3333 6.66659 18.3333Z"
          stroke={`var(--${stroke})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8333 18.3333C16.2936 18.3333 16.6667 17.9602 16.6667 17.5C16.6667 17.0397 16.2936 16.6666 15.8333 16.6666C15.3731 16.6666 15 17.0397 15 17.5C15 17.9602 15.3731 18.3333 15.8333 18.3333Z"
          stroke={`var(--${stroke})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.70825 1.70837H3.37492L5.59159 12.0584C5.6729 12.4374 5.88381 12.7763 6.18801 13.0166C6.49221 13.2569 6.87067 13.3837 7.25825 13.375H15.4083C15.7876 13.3744 16.1553 13.2444 16.4508 13.0066C16.7462 12.7687 16.9517 12.4371 17.0333 12.0667L18.4083 5.87504H4.26659"
          stroke={`var(--${stroke})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default IconCart;
