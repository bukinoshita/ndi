import React, { Fragment } from 'react'
import { Colors, space, Weight, Responsive } from 'ui/theme'

if ('document' in global) {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  window.addEventListener('resize', () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

export const Word = ({ word }: any) => {
  return (
    <section>
      <div>
        <h1>
          {word?.term?.title?.formatted.map(
            (syllabus: string, index: number) => {
              const isLast = word?.term?.title?.formatted.length === index + 1

              return (
                <Fragment key={index}>
                  {syllabus}
                  {!isLast && <span />}
                </Fragment>
              )
            }
          )}
        </h1>

        <p>{word?.term?.description}</p>

        <div>
          <h3>Subtstituir por:</h3>

          <ul>
            {word.replacements.map((replacement: string) => {
              return <li key={replacement}>{replacement}</li>
            })}
          </ul>
        </div>
      </div>

      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          min-height: calc((var(--vh, 1vh) * 100) - 250px);
        }

        h1 {
          font-size: 40px;
          font-weight: ${Weight.Medium};
          letter-spacing: -1px;
          line-height: 150%;
          color: ${Colors.Primary};
        }

        p {
          font-size: 30px;
          font-weight: ${Weight.Medium};
          letter-spacing: -1px;
          line-height: 125%;
        }

        span {
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: ${Colors.Primary};
          border-radius: 50%;
          vertical-align: middle;
          margin-left: ${space.spacing(1)};
          margin-right: ${space.spacing(1)};
        }

        h3 {
          font-size: 20px;
          margin-top: ${space.spacing(20)};
          margin-bottom: ${space.spacing(4)};
        }

        ul {
          display: flex;
        }

        li {
          list-style: none;
          margin-right: ${space.spacing(4)};
          font-size: 18px;
        }

        li:after {
          content: '/';
          padding-left: ${space.spacing(4)};
        }

        li:last-child:after {
          content: '';
        }

        @media ${Responsive.Small} {
          h1 {
            font-size: 100px;
          }

          p {
            font-size: 80px;
          }

          span {
            width: 14px;
            height: 14px;
            margin-left: ${space.spacing(3)};
            margin-right: ${space.spacing(3)};
          }

          h3 {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  )
}
