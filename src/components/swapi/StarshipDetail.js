const StarshipDetail = ( {starship} ) => {
  return (
    <div style={{border:'solid blue 2px'}}>
      <strong>{starship.name}</strong>
      <div>{starship.model}</div>
      <div>{starship.crew}</div>
    </div>
  )
}
export default StarshipDetail