export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

export function validateContactForm(name: string, email: string, message: string): ContactFormErrors {
  const errors: ContactFormErrors = {}
  if (name.trim().length < 2) errors.name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.'
  if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'
  return errors
}

export interface SignUpFormErrors {
  name?: string
  email?: string
  password?: string
}

export function validateSignUpForm(name: string, email: string, password: string): SignUpFormErrors {
  const errors: SignUpFormErrors = {}
  if (name.trim().length < 2) errors.name = 'Enter your full name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.'
  if (password.length < 6) errors.password = 'Password must be at least 6 characters.'
  return errors
}