import { IconProps } from "@/types/common";

const IconCheckCircle: React.FC<IconProps> = ({
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
      <g clipPath="url(#clip0_69_7698)">
        <path
          d="M18.3334 9.23336V10C18.3324 11.797 17.7505 13.5456 16.6745 14.9849C15.5986 16.4242 14.0862 17.4771 12.3629 17.9866C10.6396 18.4961 8.7978 18.4349 7.11214 17.8122C5.42648 17.1894 3.98729 16.0384 3.00921 14.5309C2.03114 13.0234 1.56657 11.2401 1.68481 9.44696C1.80305 7.65383 2.49775 5.94697 3.66531 4.58092C4.83288 3.21488 6.41074 2.26285 8.16357 1.86682C9.91641 1.47079 11.7503 1.65198 13.3918 2.38336"
          stroke={`var(--${stroke})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.3333 3.33331L10 11.675L7.5 9.17498"
          stroke={`var(--${stroke})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default IconCheckCircle;
