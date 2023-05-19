export const paginationLogic = (pokemonsFilter, currentPage) => {
  //cantidad de pagina 
  const pokemonPerPage = 12;
  //poquemos que se va a mostrar
  const sliceStart = (currentPage - 1) * pokemonPerPage;
  //sliceStart comienza con cero
  const sliceEnd = sliceStart + pokemonPerPage;
  const pokemonsInPage = pokemonsFilter.slice(sliceStart, sliceEnd);
  // ultimo pagina

  const lastPage = Math.ceil(pokemonsFilter.length / pokemonPerPage) || 1



  //bloque Actual
  const pagesPerBlock = 5
  const actualBlock = Math.ceil(currentPage / pagesPerBlock)
  //paginas que se van a mostar
  const pagesInBlock = [];

  const minPage = (actualBlock * pagesPerBlock - pagesPerBlock) + 1
  const maxPage = actualBlock * pagesPerBlock
  for (let i = minPage; i <= maxPage; i++) {
    if (i <= lastPage) {
      pagesInBlock.push(i)
    }
  }
  return { pagesInBlock, lastPage, pokemonsInPage }
}