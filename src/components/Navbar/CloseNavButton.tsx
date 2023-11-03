import CloseIcon from "@/components/Navbar/CloseIcon";

type TCloseNavButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function CloseNavButton({ onClick }: TCloseNavButtonProps) {
  return (
    <button className="block sm:hidden" onClick={onClick}>
      <CloseIcon />
    </button>
  );
}
