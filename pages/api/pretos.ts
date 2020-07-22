import { NextApiRequest, NextApiResponse } from 'next'
import { pretos as expressions } from 'ndi-expressions'

type Data = Array<{
  term: {
    title: {
      formatted: string[]
      slug: string
    }
    description: string
  }
  replacements: string[]
}>

const pretos = (request: NextApiRequest, response: NextApiResponse<Data>) => {
  response.status(200).json(expressions)
}

export default pretos
