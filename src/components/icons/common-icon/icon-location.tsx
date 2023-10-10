import { IconProps } from "@/types/common";

const IconLocation: React.FC<IconProps> = ({
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
        d="M9.9999 11.1916C11.4358 11.1916 12.5999 10.0275 12.5999 8.59158C12.5999 7.15564 11.4358 5.99158 9.9999 5.99158C8.56396 5.99158 7.3999 7.15564 7.3999 8.59158C7.3999 10.0275 8.56396 11.1916 9.9999 11.1916Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
      />
      <path
        d="M3.01675 7.07496C4.65842 -0.141705 15.3501 -0.133372 16.9834 7.08329C17.9418 11.3166 15.3084 14.9 13.0001 17.1166C11.3251 18.7333 8.67508 18.7333 6.99175 17.1166C4.69175 14.9 2.05842 11.3083 3.01675 7.07496Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default IconLocation;
