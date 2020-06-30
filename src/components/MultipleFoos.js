import React from 'react'
import Foo from './Foo'
import Bar from './Bar'

function MultipleFoos() {
    return (
        <div className="in-foos">
            <Foo />
            <Bar />
            <Foo />
            <Foo />
        </div>
    )
}

export default MultipleFoos
