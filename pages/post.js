import React from 'react'

export default (props) => (
    <div>
        <h1>{props.url.query.title}</h1>
        <p>Qwerty Uiop</p>
        <style jsx>{`
          h1 {
            font-family: 'Courier New';
          }
        `}</style>
    </div>
)