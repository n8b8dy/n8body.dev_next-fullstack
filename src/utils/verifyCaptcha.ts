export const verifyCaptcha = async (token: string) => {
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })

  if (!response.ok) return false

  const { success } = await response.json() as {
    success: boolean
    challenge_ts: string
    hostname: string
    'error-codes': string[]
  }

  return success
}
