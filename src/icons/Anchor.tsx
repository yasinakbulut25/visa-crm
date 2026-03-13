const Anchor = ({
  width = 24,
  height = 24,
  color = "#292D32",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 22H20.5"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 22L3.5 5"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 6L9 16"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 13.3357V6H11.6643"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Anchor;
