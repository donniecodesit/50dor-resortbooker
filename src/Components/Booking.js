import React, { Component } from 'react';
import Billing from './Billing';
import DateSelector from './DateSelector';
import RoomDetails from './RoomDetails';

function dateDiffInDays(a, b) {
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2-utc1)/86400000);
}

export default class Booking extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const checkout = new Date();
        checkout.setDate(today.getDate() + 1);

        this.state = {
            checkinDate: today,
            checkoutDate: checkout,
            occupants: 1,
            roomType: 'Standard'
        }
    }

    static getDerivedStateFromProps(props, state) {
        const totalDays = dateDiffInDays(state.checkinDate, state.checkoutDate);
        const invalidRange = totalDays <= 0 || totalDays >= 14;
        return { totalDays, invalidRange };
    }

    onCheckInChange = (checkinDate) => {
        this.setState({ checkinDate });
    }

    onCheckOutChange = (checkoutDate) => {
        this.setState({ checkoutDate });
    }

    onOccupantsChange = (occupants) => {
        this.setState({ occupants });
    }

    onRoomTypeChange = (roomType) => {
        this.setState({ roomType });
    }

    render() {
        return (
            <div>
                <h2>Booking</h2>
                <DateSelector
                    checkinDate={this.state.checkinDate}
                    checkoutDate={this.state.checkoutDate}
                    totalDays={this.state.totalDays}
                    invalidRange={this.state.invalidRange}
                    onCheckInChange={this.onCheckInChange}
                    onCheckOutChange={this.onCheckOutChange}
                />
                <RoomDetails 
                    occupants={this.state.occupants}
                    roomType={this.state.roomType}
                    onRoomTypeChange={this.onRoomTypeChange}
                    onOccupantsChange={this.onOccupantsChange}
                />
                { !this.state.invalidRange && 
                    <Billing 
                        roomType={this.state.roomType}
                        totalDays={this.state.totalDays}
                        occupants={this.state.occupants}
                    />
                }
            </div>
        )
    }
}