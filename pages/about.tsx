import React from 'react'

import { Page } from 'layouts/page'
import { space, Colors } from 'ui/theme'

export const About = () => {
  return (
    <Page style={{ justifyContent: 'initial' }}>
      <section className="mx-auto my-10 max-w-screen-sm">
        <h1 className="text-4xl mb-8">Sobre o projeto ndi</h1>

        <p className="text-gray-200 mb-5 text-lg leading-8">
          O projeto ndi é um projeto brasileiro para criar consciência em
          palavras e expressões que usamos no nosso dia a dia que são racistas
          e/ou sexistas.
        </p>

        <p className="text-gray-200 mb-5 text-lg leading-8">
          Nós tentamos concientizar e mostrar o porque da palavra ou expressão
          usada é racista ou sexista, e também mostramos uma melhor maneira de
          se expressar substituindo a palavra.
        </p>

        <h2 className="mt-10 mb-5 text-2xl">
          Quero ajudar a contribuir e melhorar
        </h2>

        <p className="text-gray-200 mb-5 text-lg leading-8">
          Somos um projeto Open Source, o código do projeto está disponível no{' '}
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/bukinoshita/naodigaisso/blob/main/contributing.md"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . Se você for desenvolvedor, pode ajudar a gente a contribuir com
          novas features e bugs.
        </p>

        <hr className="border-t border-gray-100 mx-auto mt-6 mb-7" />

        <p className="text-gray-200 mb-5 text-lg leading-8">
          Nós temos bastante cuidado ao adicionar uma nova palavra ou expressão,
          mas o ndi pode conter palavras ou expressões incorretas. Estamos
          sempre dispostos a aprender e melhorar qualquer expressão mal
          utilizada.
        </p>

        <p className="text-gray-200 mb-5 text-lg leading-8">
          Se você viu algum bug ou alguma expressão sendo mal utilizada, por
          favor entre em contato com a gente criando um ticket no nosso{' '}
          <a
            className="text-blue-700 hover:underline"
            href="https://github.com/bukinoshita/naodigaisso/issues/new?template=1.Bug_report.md"
          >
            GitHub
          </a>
          .
        </p>

        <hr className="border-t border-gray-100 mx-auto mt-6 mb-7" />

        <p className="text-gray-200 mb-5 text-lg leading-8">
          Você pode ajudar a gente a sugerir novas features, reportando
          expressões mal utilizadas e bugs, adicionando novas expressões e
          compartilhando nosso projeto.
        </p>

        <h3>
          Thanks!{' '}
          <span role="img" aria-label="Heart">
            ♥️
          </span>
        </h3>
      </section>

      <style jsx>{`
        hr {
          max-width: 75px;
        }
      `}</style>
    </Page>
  )
}

export default About
