import React from 'react'
import { Card } from './common'

export function Home() {

    const fakeArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    return (
        <div className={'subgrid'}>
            {fakeArr.map(num => (
            <Card />
        ))}
        </div>
    );
}