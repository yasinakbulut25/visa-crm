const Edit = ({
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
      d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.04 3.01976L8.16 10.8998C7.86 11.1998 7.56 11.7898 7.5 12.2198L7.07 15.2298C6.91 16.3198 7.68 17.0798 8.77 16.9298L11.78 16.4998C12.2 16.4398 12.79 16.1398 13.1 15.8398L20.98 7.95976C22.34 6.59976 22.98 5.01976 20.98 3.01976C18.98 1.01976 17.4 1.65976 16.04 3.01976Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Edit;
