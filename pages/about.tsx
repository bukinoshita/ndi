import React from 'react'

import { Page } from 'layouts/page'
import { space, Colors } from 'ui/theme'

export const About = () => {
  return (
    <Page style={{ justifyContent: 'initial' }}>
      <section>
        <h1>Sobre o projeto ndi</h1>

        <p>
          O projeto ndi é um projeto brasileiro para criar consciência em
          palavras e expressões que usamos no nosso dia a dia que são racistas
          e/ou sexistas.
        </p>

        <p>
          Nós tentamos concientizar e mostrar o porque da palavra ou expressão
          usada é racista ou sexista, e também mostramos uma melhor maneira de
          se expressar substituindo a palavra.
        </p>

        <h2>Quero ajudar a contribuir e melhorar</h2>

        <p>
          Somos um projeto Open Source, o código do projeto está disponível no{' '}
          <a
            href="https://github.com/bukinoshita/naodigaisso/blob/main/contributing.md"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . Se você for desenvolvedor, pode ajudar a gente a contribuir com
          novas features e bugs.
        </p>

        <hr />

        <p>
          Nós temos bastante cuidado ao adicionar uma nova palavra ou expressão,
          mas o ndi pode conter palavras ou expressões incorretas. Estamos
          sempre dispostos a aprender e melhorar qualquer expressão mal
          utilizada.
        </p>

        <p>
          Se você viu algum bug ou alguma expressão sendo mal utilizada, por
          favor entre em contato com a gente criando um ticket no nosso{' '}
          <a href="https://github.com/bukinoshita/naodigaisso/issues/new?template=1.Bug_report.md">
            GitHub
          </a>
          .
        </p>

        <hr />

        <p>
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
        section {
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          margin-top: ${space.spacing(10)};
        }

        h1 {
          font-size: 32px;
          margin-bottom: ${space.spacing(8)};
        }

        h2 {
          font-size: 24px;
          margin-top: ${space.spacing(8)};
          margin-bottom: ${space.spacing(5)};
        }

        a {
          color: ${Colors.Primary};
        }

        p {
          font-size: 18px;
          line-height: 1.75;
          margin-bottom: ${space.spacing(5)};
        }

        hr {
          border-top: 1px solid ${Colors.GrayLighter};
          margin: ${space.spacing(6)} auto ${space.spacing(7)};
          max-width: 75px;
        }
      `}</style>
    </Page>
  )
}

export default About
