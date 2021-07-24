import React from 'react'

export default function cocktailDetail({props}) {
    return (
        <div>
            {props.match.params.cocktailName}
            hi
        </div>
    )
}
