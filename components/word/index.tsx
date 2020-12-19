import React, { Fragment } from 'react'
import { space } from 'ui/theme'

export const Word = ({ word }: any) => {
  return (
    <section>
      <h1
        title={word?.term?.title?.slug}
        className="text-blue-600 font-medium leading-relaxed text-8xl tracking-tight"
      >
        {word?.term?.title?.formatted.map((syllabus: string, index: number) => {
          const isLast = word?.term?.title?.formatted.length === index + 1

          return (
            <Fragment key={index}>
              {syllabus}
              {!isLast && (
                <span className="h-4 w-4 inline-block bg-blue-600 mx-3 rounded-full align-middle" />
              )}
            </Fragment>
          )
        })}
      </h1>

      <p className="text-7xl font-medium leading-normal tracking-tight">
        {word?.term?.description}
      </p>

      <div>
        <h3 className="text-xl font-medium mt-20 mb-4">Subtstituir por:</h3>

        <ul className="flex">
          {word.replacements.map((replacement: string) => {
            return (
              <li className="mr-3 text-lg" key={replacement}>
                {replacement}
              </li>
            )
          })}
        </ul>
      </div>

      <style jsx>{`
        li:after {
          content: '/';
          padding-left: ${space.spacing(4)};
        }

        li:last-child:after {
          content: '';
        }
      `}</style>
    </section>
  )
}
