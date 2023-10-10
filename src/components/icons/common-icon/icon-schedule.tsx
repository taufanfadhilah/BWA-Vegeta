import { IconProps } from "@/types/common";

const IconSchedule: React.FC<IconProps> = ({
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
        d="M6.6665 1.66663V4.16663"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3335 1.66663V4.16663"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.9165 7.57483H17.0832"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3332 15.8333C18.3332 16.4583 18.1582 17.05 17.8498 17.55C17.2748 18.5167 16.2165 19.1667 14.9998 19.1667C14.1582 19.1667 13.3915 18.8583 12.8082 18.3333C12.5498 18.1167 12.3248 17.85 12.1498 17.55C11.8415 17.05 11.6665 16.4583 11.6665 15.8333C11.6665 13.9917 13.1582 12.5 14.9998 12.5C15.9998 12.5 16.8915 12.9417 17.4998 13.6333C18.0165 14.225 18.3332 14.9917 18.3332 15.8333Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6997 15.8334L14.5247 16.6584L16.2997 15.0167"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 7.08329V13.6333C16.8917 12.9416 16 12.5 15 12.5C13.1583 12.5 11.6667 13.9916 11.6667 15.8333C11.6667 16.4583 11.8417 17.05 12.15 17.55C12.325 17.85 12.55 18.1166 12.8083 18.3333H6.66667C3.75 18.3333 2.5 16.6666 2.5 14.1666V7.08329C2.5 4.58329 3.75 2.91663 6.66667 2.91663H13.3333C16.25 2.91663 17.5 4.58329 17.5 7.08329Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99607 11.4168H10.0036"
        stroke={`var(--${stroke})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91209 11.4168H6.91957"
        stroke={`var(--${stroke})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.91209 13.9168H6.91957"
        stroke={`var(--${stroke})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSchedule;
