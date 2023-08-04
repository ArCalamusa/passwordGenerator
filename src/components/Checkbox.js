import React from 'react'

function Checkbox(props) {
    const { value, onChange } = props;

    return (
        <>
            <input type="checkbox" checked={value} onChange={onChange} />
        </>
    )
}
export default Checkbox;