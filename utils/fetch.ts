import unfetch from 'isomorphic-unfetch'

export const fetch = async <JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> => {
  const response = await unfetch(input, init)
  return response.json()
}
