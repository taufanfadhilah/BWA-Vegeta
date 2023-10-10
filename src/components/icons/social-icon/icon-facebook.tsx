import { IconProps } from "@/types/common";

const IconFacebook: React.FC<IconProps> = ({
  className = "",
  fill = "primary",
  stroke = "accent",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3332 10.0505C18.3332 5.41996 14.6026 1.66663 9.99984 1.66663C5.39706 1.66663 1.6665 5.41996 1.6665 10.0505C1.6665 14.2361 4.71317 17.7044 8.69761 18.3333V12.4744H6.58206V10.05H8.69761V8.20329C8.69761 6.10218 9.9415 4.94107 11.8454 4.94107C12.7565 4.94107 13.7109 5.10496 13.7109 5.10496V7.16829H12.6593C11.6243 7.16829 11.3021 7.81496 11.3021 8.47829V10.0505H13.6132L13.2437 12.4738H11.3021V18.3333C15.2865 17.7044 18.3332 14.2361 18.3332 10.0505Z"
        fill={`var(--${fill})`}
      />
    </svg>
  );
};

export default IconFacebook;
