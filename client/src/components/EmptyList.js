import React from 'react'

export default function EmptyList() {
    const emptyList = []

    return (
        <div>
            {emptyList.map(c => c.key)}
        </div>
    )
}
