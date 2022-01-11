import React from 'react'

export default function SelectDropdown(props) {
    return (
        <div>
            <select className='select-box' onChange={props.selectChange}>
                {props.list.map(types => <option key={types.key} value={types.key}>{types.name}</option>)}
            </select>
        </div>
    )
}
