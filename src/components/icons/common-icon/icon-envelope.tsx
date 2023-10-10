import { IconProps } from "@/types/common";

const IconEnvelope: React.FC<IconProps> = ({
  className = "",
  fill = "primary",
  stroke = "primary",
}: IconProps) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1665 17.0833H5.83317C3.33317 17.0833 1.6665 15.8333 1.6665 12.9166V7.08329C1.6665 4.16663 3.33317 2.91663 5.83317 2.91663H14.1665C16.6665 2.91663 18.3332 4.16663 18.3332 7.08329V12.9166C18.3332 15.8333 16.6665 17.0833 14.1665 17.0833Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1668 7.5L11.5585 9.58333C10.7002 10.2667 9.29183 10.2667 8.43349 9.58333L5.8335 7.5"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconEnvelope;
