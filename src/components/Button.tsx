
interface ButtonProps {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <button className="text-black px-8 py-2 bg-primary font-bold">
      {label}
    </button>
  )
}

export { Button }

