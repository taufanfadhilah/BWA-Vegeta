import { IconProps } from "@/types/common";

const IconBag: React.FC<IconProps> = ({
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
      <path
        d="M5 1.66669L2.5 5.00002V16.6667C2.5 17.1087 2.67559 17.5326 2.98816 17.8452C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8452C17.3244 17.5326 17.5 17.1087 17.5 16.6667V5.00002L15 1.66669H5Z"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 5H17.5"
        stroke={`var(--${stroke})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3334 8.33331C13.3334 9.21737 12.9822 10.0652 12.3571 10.6903C11.732 11.3155 10.8841 11.6666 10.0001 11.6666C9.11603 11.6666 8.26818 11.3155 7.64306 10.6903C7.01794 10.0652 6.66675 9.21737 6.66675 8.33331"
        stroke={`var(--${stroke})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconBag;
