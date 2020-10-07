import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/field-validation'
import { MinLengthValidation } from './min-length-validation'

describe('MinLengthValidation', () => {
  test('Should return error if values is invalid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if values is valid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
