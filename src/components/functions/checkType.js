export default checkType = (el) => {
  let backgroundColor = '#353340'
  if (el === 'normal' || el === 1) {
    return backgroundColor = '#95965A'
  }
  if (el === 'fighting' || el === 2) {
    return backgroundColor = '#AA240B'
  }
  if (el === 'flying' || el === 3) {
    return backgroundColor = '#977CE4'
  }
  if (el === 'poison' || el === 4) {
    return backgroundColor = '#8A227D'
  }
  if (el === 'ground' || el === 5) {
    return backgroundColor = '#D2AC5C'
  }
  if (el === 'rock' || el === 6) {
    return backgroundColor = '#A88B30'
  }
  if (el === 'bug' || el === 7) {
    return backgroundColor = '#99A91A'
  }
  if (el === 'ghost' || el === 8) {
    return backgroundColor = '#5D4491'
  }
  if (el === 'steel' || el === 9) {
    return backgroundColor = '#A7A7C5'
  }
  if (el === 'fire' || el === 10) {
    return backgroundColor = '#E96C30'
  }
  if (el === 'water' || el === 11) {
    return backgroundColor = '#5683DE'
  }
  if (el === 'grass' || el === 12) {
    return backgroundColor = '#5CC140'
  }
  if (el === 'electric' || el === 13) {
    return backgroundColor = '#F3C723'
  }
  if (el === 'psychic' || el === 14) {
    return backgroundColor = '#FD4174'
  }
  if (el === 'ice' || el === 15) {
    return backgroundColor = '#8BCBD2'
  }
  if (el === 'dragon' || el === 16) {
    return backgroundColor = '#5B2FF0'
  }
  if (el === 'dark' || el === 17) {
    return backgroundColor = '#594735'
  }
  if (el === 'fairy' || el === 18) {
    return backgroundColor = '#DC91DD'
  }
  else return backgroundColor
}