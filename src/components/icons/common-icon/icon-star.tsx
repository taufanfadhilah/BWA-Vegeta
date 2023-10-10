import { IconProps } from "@/types/common";

const IconStar: React.FC<IconProps> = ({
  className = "",
  fill = "primary",
  stroke = "primary",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99984 1.66626L12.5748 6.88293L18.3332 7.72459L14.1665 11.7829L15.1498 17.5163L9.99984 14.8079L4.84984 17.5163L5.83317 11.7829L1.6665 7.72459L7.42484 6.88293L9.99984 1.66626Z"
        fill={`var(--${fill})`}
        stroke={`var(--${stroke})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconStar;
