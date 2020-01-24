import { getLetterMatchCount } from './index'

describe ('test of getLetterMatchCount', ()=> { 
  const secretWord = 'party'

  it('should return correct count 0', () => {
    expect(getLetterMatchCount('bones',secretWord)).toBe(0)
  })

  it('should return correct count 3', () => {
    expect(getLetterMatchCount('train',secretWord)).toBe(3)
  })
  it('should return correct count duplicate letter', () => {
    expect(getLetterMatchCount('parka',secretWord)).toBe(3)
  })
})
