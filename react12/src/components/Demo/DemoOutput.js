import React from 'react'
import MyParagraph from './MyParagraph';

function DemoOutput(props) {
    // console.log('DemoOutput RUNNING');
    return (
        <div>
            <p>{props.show ? 'This is New!' : ''}</p>
        </div>
    )
}

export default React.memo(DemoOutput)

//3mul reexcute la hayda comp iza tgaayr el props bas..hik bta3mul memo hon
// iza mafi new value ma tamul rexexutr