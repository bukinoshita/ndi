import { NextApiRequest, NextApiResponse } from 'next'
import list from '../../words/pretos.json'

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
  response.status(200).json(list)
}

export default pretos
