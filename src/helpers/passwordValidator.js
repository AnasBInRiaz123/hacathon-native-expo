export function passwordValidator(password) {
  if (!password) return "Password can't be Empty."
  if (password.length < 5) return 'Password must be at least 5 characters long.'
  return ''
}
