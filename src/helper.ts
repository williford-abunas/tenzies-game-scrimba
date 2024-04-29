import { nanoid } from 'nanoid'

export function allNewDice() {
  let randomNumsArr: { value: number; isHeld: boolean; id: string }[] = []
  for (let i = 1; i <= 10; i++) {
    const randomNums: number = Math.floor(Math.random() * 6) + 1
    randomNumsArr.push({ value: randomNums, isHeld: false, id: nanoid() })
  }

  return randomNumsArr
}
