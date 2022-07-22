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

//3mul re-excute la hayda component iza tgayar el props bas..hik el  memo hon
// iza mafi new value ma tamul re-execute