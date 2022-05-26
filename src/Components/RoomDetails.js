import React from 'react';

const Select = ({ selectedValue, options, onDataChange }) => {
    return ( 
        <select onChange={({target: {value}}) => onDataChange(value)} value={selectedValue}>
            {options.map((option) => (
                <option value={option.value} key={option.name}>
                    {option.name}
                </option>
            ))}
        </select>
    )
}

const occupantsOptions = [
    {name: "1", value: 1},
    {name: "2", value: 2},
    {name: "3", value: 3},
    {name: "4", value: 4}
]

const roomTypeOptions = [
    {name: "Standard", value: "Standard"},
    {name: "Deluxe", value: "Deluxe"},
    {name: "Luxury", value: "Luxury"}
]

const RoomDetails = (props) => {
    const { roomType, occupants, onRoomTypeChange, onOccupantsChange } = props;
    return (
        <div>
            <h2>Room Details</h2>

            <div className="flex" style={{flexDirection: "column", alignContent: "center"}}>
                <label>Room Type</label>
                <Select 
                    selectedValue={roomType} 
                    options={roomTypeOptions}
                    onDataChange={onRoomTypeChange}
                />

                <label>Occupants</label>
                <Select 
                    selectedValue={occupants}
                    options={occupantsOptions}
                    onDataChange={onOccupantsChange}
                />
            </div>
        </div>
    )
}

export default RoomDetails;