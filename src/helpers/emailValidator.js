export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email can't be Empty."
  if (!re.test(email)) return 'Ooops! We need a valid email address.'
  return ''
}
