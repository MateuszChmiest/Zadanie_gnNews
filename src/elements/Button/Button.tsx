import clsx from "clsx"

const Button = ({className, text, onClick}: ButtonProps) => (
  <button className={clsx("bg-primary rounded-md text-whiteColor hover:bg-whiteColor hover:text-blackColor duration-500", className)} onClick={onClick}>{text}</button>
)

type ButtonProps = {
    className?: string;
    text: string;
    onClick?: React.MouseEventHandler;
}


export default Button