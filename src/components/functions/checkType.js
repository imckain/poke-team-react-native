export default checkType = (el) => {
  return (
    el === 'normal' || el === 1 ? 
      '#95965A'
    : el === 'fighting' || el === 2 ? 
      '#AA240B'
    : el === 'flying' || el === 3 ? 
      '#977CE4'
    : el === 'poison' || el === 4 ? 
      '#8A227D'
    : el === 'ground' || el === 5 ? 
      '#D2AC5C'
    : el === 'rock' || el === 6 ? 
      '#A88B30'
    : el === 'bug' || el === 7 ? 
      '#99A91A'
    : el === 'ghost' || el === 8 ? 
      '#5D4491'
    : el === 'steel' || el === 9 ? 
      '#A7A7C5'
    : el === 'fire' || el === 10 ? 
      '#E96C30'
    : el === 'water' || el === 11 ? 
      '#5683DE'
    : el === 'grass' || el === 12 ? 
      '#5CC140'
    : el === 'electric' || el === 13 ? 
      '#F3C723'
    : el === 'psychic' || el === 14 ? 
      '#FD4174'
    : el === 'ice' || el === 15 ? 
      '#8BCBD2'
    : el === 'dragon' || el === 16 ? 
      '#5B2FF0'
    : el === 'dark' || el === 17 ? 
      '#594735'
    : el === 'fairy' || el === 18 ? 
      '#DC91DD'
    : '#000000'
  )
}