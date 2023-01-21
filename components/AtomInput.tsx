const AtomInput = ({placeHolder}) => {
  return (
    <div className="mt-3 h400-normal-16px">
      <input className="w-36 text-sm text-center rounded-3xl border border-primary-gray outline-none p-2.5" type="text" placeholder={placeHolder} />
    </div>
  )
}

export default AtomInput