import React from 'react'
import MyParagraph from './MyParagraph';

function DemoOutput(props) {
    console.log('DemoOutput RUNNING');
    return (
        <div>
            <p>{props.show ? 'This is New!' : ''}</p>
            <MyParagraph />
        </div>
    )
}

export default React.memo(DemoOutput)