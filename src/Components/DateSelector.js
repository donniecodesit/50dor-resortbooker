import React from 'react';
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = (props) => {
    let { checkinDate, checkoutDate, totalDays, invalidRange, onCheckInChange, onCheckOutChange } = props;

    return (
        <div>
            <h2>Date Range</h2>
            <DatePicker 
                selected={checkinDate}
                onChange={onCheckInChange}
            />
            <DatePicker 
                selected={checkoutDate}
                onChange={onCheckOutChange}
            />
            <span>
                {totalDays} Nights
            </span>
            {
                invalidRange && <p>Invalid Range</p>
            }
        </div>
    )
}

DateSelector.propTypes = {
    checkinDate: PropTypes.instanceOf(Date).isRequired,
    checkoutDate: PropTypes.instanceOf(Date).isRequired,
    onCheckInChange: PropTypes.func.isRequired,
    onCheckOutChange: PropTypes.func.isRequired,
    totalDays: PropTypes.number.isRequired
}

export default DateSelector;