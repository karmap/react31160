const NoVocals = () => {

  const onKeyDown = (event) => {
    console.log('se introdujo una tecla:', event.key);
    // const vocales = 'aeiouAEIOU';
    // if ( vocales.search(event.key) != -1 ) {
    //   event.preventDefault();
    // }
    const vocales = ['a', 'e', 'i', 'o', 'u']
    // vocales.includes(evt.key) && evt.preventDefault();
    if( vocales.includes( event.key.toLowerCase() ) ){
      event.preventDefault();
    }
  }

  return (
    <div>
      <div className="m-10">No se admiten vocales</div>
      <input onKeyDown={onKeyDown} type="text" placeholder="Type here" class="input w-full max-w-xs" />
    </div>
  )
}
export default NoVocals