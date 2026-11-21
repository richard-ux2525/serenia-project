 interface Btnprop {
    btnText: string;
    btnstyle?: string;
 }
function ButtonWhite({btnText, btnstyle}: Btnprop) {
  return (
    <div>
      <button className={`${btnstyle} bg-[#fafafa]`}>{btnText}</button>
    </div>
  )
}

export default ButtonWhite
  