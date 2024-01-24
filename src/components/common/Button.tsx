interface ButtonType {
  text: string
  state?: boolean
  textState?: string
  onClick?: () => void
  outline?: boolean
}

const Button = ({ text, state, textState, onClick, outline }: ButtonType) => {
  return (
    <button
      type="submit"
      className="flex justify-center items-center relative rounded-xl cursor-pointer w-fit outline-none font-medium group"
      onClick={onClick}
    >
      <div
        className={`${
          outline
            ? 'bg-gray-800 group-hover:bg-gray-950'
            : 'bg-violet-500 group-hover:bg-violet-900'
        } relative px-7 py-2.5 rounded-md border-2 border-gray-950 text-white z-20 text-md m-[3px] transition capitalize`}
      >
        {state && textState ? textState : text}
      </div>

      <div className="blinking-color absolute opacity-0 top-0 group-hover:opacity-100 w-full h-full rounded-lg transition" />
      <div className="absolute opacity-100 top-0 group-hover:opacity-0 w-full h-full rounded-md transition" />
    </button>
  )
}

export default Button
