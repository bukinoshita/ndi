import { NextApiRequest, NextApiResponse } from 'next'

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
  response.status(200).json([
    {
      term: {
        title: {
          slug: 'denegrir',
          formatted: ['de', 'ne', 'grir'],
        },
        description:
          'Fazer ficar mais negro; tornar escuro; obscurecer, obscurecer-se.',
      },
      replacements: ['Macular', 'Infamar', 'Caluniar'],
    },
    {
      term: {
        title: {
          slug: 'criado-mudo',
          formatted: ['cri', 'a', 'do', 'mu', 'do'],
        },
        description:
          'Escravos eram obrigados a segurar objetos para os seus senhores ao lado da cama.',
      },
      replacements: ['Mesa de cabeceira'],
    },
  ])
}

export default pretos
