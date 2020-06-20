import unfetch from 'isomorphic-unfetch'

export const fetch = async <JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> => {
  const res = await unfetch(input, init)
  return res.json()
}
