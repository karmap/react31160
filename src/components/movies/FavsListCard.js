const FavsListCard = ( { movie } ) => {

  const defaultImg = 'https://previews.123rf.com/images/pavlostv/pavlostv1806/pavlostv180600511/102793693-icono-de-pel%C3%ADcula-vector-de-stock.jpg?fj=1'

  return (
    <div>
        <img
            className="h-8"
            src={movie.img ?? defaultImg}
            alt="Movie"
        />
        {movie.title}
    </div>
  )
}
export default FavsListCard