import { IconProps } from "@/types/common";

const IconHeart: React.FC<IconProps> = ({
  className = "",
  fill = "",
  stroke = "",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.517 16.3417C10.2337 16.4417 9.76699 16.4417 9.48366 16.3417C7.06699 15.5167 1.66699 12.075 1.66699 6.24171C1.66699 3.66671 3.74199 1.58337 6.30033 1.58337C7.81699 1.58337 9.15866 2.31671 10.0003 3.45004C10.842 2.31671 12.192 1.58337 13.7003 1.58337C16.2587 1.58337 18.3337 3.66671 18.3337 6.24171C18.3337 12.075 12.9337 15.5167 10.517 16.3417Z"
          stroke={`var(--${stroke})`}
          fill={`var(--${fill})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <path
        d="M10.6834 17.3417C10.4 17.4417 9.93337 17.4417 9.65004 17.3417C7.23337 16.5167 1.83337 13.075 1.83337 7.24167C1.83337 4.66667 3.90837 2.58334 6.46671 2.58334C7.98337 2.58334 9.32504 3.31667 10.1667 4.45C11.0084 3.31667 12.3584 2.58334 13.8667 2.58334C16.425 2.58334 18.5 4.66667 18.5 7.24167C18.5 13.075 13.1 16.5167 10.6834 17.3417Z"
        stroke={`var(--${stroke})`}
        fill={`var(--${fill})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconHeart;
