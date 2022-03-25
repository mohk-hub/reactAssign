import React from 'react'
import { DescriptionBox } from './DescriptionBox'
import BoxArray from './BoxArray'

export const Box = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center gy-4 mt-3">
          {
            BoxArray.map((val, ind) => {
              return <DescriptionBox
                key={ind}
                title={val.title}
              />
            })
          }
        </div>
      </div>
    </>
  )
}
