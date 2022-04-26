const Card = (props) => {
  return (
    <div style={{border:'solid 2px blue'}}>
        <div>Empieza una card</div>
        {props.children}
        <div>Termina una card</div>
    </div>
  )
}
export default Card