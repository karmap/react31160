const MovieCard = ( props ) => {
  
  const {title, director, year, duration, img} = props.movie

  const defaultImg = 'https://previews.123rf.com/images/pavlostv/pavlostv1806/pavlostv180600511/102793693-icono-de-pel%C3%ADcula-vector-de-stock.jpg?fj=1'

  return (
    <div className="card card-side bg-base-100 shadow-xl">
    <figure><img className="h-80 w-52 m-10" src={img ?? defaultImg} alt="Movie"/></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <div>{director}</div>
      <div>{year}</div>
      <div>{duration}</div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Ver</button>
      </div>
    </div>
  </div>
  )
}
export default MovieCard