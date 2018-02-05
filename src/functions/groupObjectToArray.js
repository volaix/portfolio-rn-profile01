groupObjectToArray = (buttonObject) => {
  const sizeOfColumn = 3
  const createArray = (sizeofColumn) => {
    const numberOfObjects = Object.keys(buttonObject).length / sizeOfColumn
    const accumSetup = [] //[{}, {}, {}, {}]
    for (let i = 1; i <= numberOfObjects; i++) {
      accumSetup.push({})
    }
    return accumSetup
  }

  //reducer for result
  const reducer = (accum, buttonTitle, index) => {
    const group = Math.floor(index / 3)
    accum[group][buttonTitle] = buttonObject[buttonTitle]
    return [
      ...accum,
    ]
  }

  //the answer
  const result = Object.keys(buttonObject)
    .reduce(reducer, createArray(sizeOfColumn))

  return result
}

export default groupObjectToArray