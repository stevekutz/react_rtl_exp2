import React, {Fragment} from 'react';


function Speaker(props) {
    const {speak, message = "" } = props;

    return (
        <Fragment>
            <button onClick = {speak}>Speak</button>
            <div>{message}</div>
        </Fragment>
    )

}

export default Speaker;