export function validateEmail(email: string): string | null {
  if (!email) return "Please enter your email";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return "This is not valid email address.";
  return null;
}
