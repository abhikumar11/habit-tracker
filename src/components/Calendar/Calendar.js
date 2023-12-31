import { useState } from "react";
import {
    format,
    startOfWeek,
    addDays,
    isSameDay,
    lastDayOfWeek,
    addWeeks,
    subWeeks
} from "date-fns";
import './styles.css'

const Calendar = (props, { showDetailsHandle }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const changeWeekHandle = (btnType) => {
        if (btnType === "prev") {
            setCurrentMonth(subWeeks(currentMonth, 1));
        }
        if (btnType === "next") {
            setCurrentMonth(addWeeks(currentMonth, 1));
        }
    };

    const onDateClickHandle = (day, dayStr) => {
        setSelectedDate(day);
        showDetailsHandle(dayStr);
    };

    const renderHeader = () => {
        const dateFormat = "MMM yyyy";
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={() => changeWeekHandle("prev")}>
                        prev week
                    </div>
                </div>

                <div className="col col-start">

                </div>
                <div className="col col-center">
                    <span>{format(currentMonth, dateFormat)}</span>
                </div>
                <div className="col col-end">

                </div>
                <div className="col col-end" onClick={() => changeWeekHandle("next")}>
                    <div className="icon">next week</div>
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const dateFormat = "EEE";
        const days = [];
        let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    };

    const renderCells = () => {
        const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
        const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        const status = props.props.status;
        const clr = status === "Not Done" ? "red" : status === "Done" ? "green" : "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                days.push(
                    <div
                        className={`col cell ${isSameDay(day, new Date())
                            ? "today"
                            : isSameDay(day, selectedDate)
                                ? "selected"
                                : ""
                            }`}
                        style={{
                            backgroundColor: `${isSameDay(day, new Date()) ? clr : ''}`
                        }}
                        key={day}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = addDays(day, 1);
            }

            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    };

    const renderDetails = () => {
        return (
            <div className="content">
                <div className="ui right floated button disabled">{props.props.time}</div>
                <div className="header">{props.props.name}</div>
            </div>
        );
    }

    return (
        <div className="calendar">
            {renderHeader()}
            {renderDetails()}
            {renderDays()}
            {renderCells()}
        </div>
    );
};

export default Calendar;