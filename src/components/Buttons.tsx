interface Btnprop {
    btnText: string;
    btnstyle?: string;
    type?: "button" | "submit" | "reset";
}
function Buttons({btnText, btnstyle, type = "submit"}: Btnprop) {
  return (
    <button type={type} className={btnstyle}>{btnText}</button>
  )
}

export default Buttons
