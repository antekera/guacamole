/**
 * Fetcher
 */

export const fetcher = async path => {
  const URL = `${process.env.HOST}/api${path}`
  const res = await fetch(URL)

  if (!res.ok) {
    return { notFound: true }
  }

  return res.json()
}
