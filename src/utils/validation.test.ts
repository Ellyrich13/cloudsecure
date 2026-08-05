import { describe, it, expect } from 'vitest'
import { validateContactForm, validateSignUpForm } from './validation'

describe('validateContactForm', () => {
  it('rejects a short name', () => {
    expect(validateContactForm('J', 'j@x.com', 'A real message here').name).toBeDefined()
  })

  it('rejects an invalid email', () => {
    expect(validateContactForm('John Smith', 'not-an-email', 'A real message here').email).toBeDefined()
  })

  it('rejects a short message', () => {
    expect(validateContactForm('John Smith', 'j@x.com', 'short').message).toBeDefined()
  })

  it('accepts valid input', () => {
    const errors = validateContactForm('John Smith', 'j@x.com', 'A real message here')
    expect(Object.keys(errors)).toHaveLength(0)
  })
})

describe('validateSignUpForm', () => {
  it('rejects a short password', () => {
    expect(validateSignUpForm('John Smith', 'j@x.com', '123').password).toBeDefined()
  })

  it('accepts valid input', () => {
    const errors = validateSignUpForm('John Smith', 'j@x.com', 'password123')
    expect(Object.keys(errors)).toHaveLength(0)
  })
})