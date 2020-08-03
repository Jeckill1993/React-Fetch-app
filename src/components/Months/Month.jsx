import React, {useState} from 'react';
import classes from './Months.module.css';
import '../../main.css';

const Month = ({month}) => {
    const[isVisible, setVisible] = useState(false);

    let over = () => {
        setVisible(true);
    }
    let out = () => {
        setVisible(false);
    }

    let element = month.peopleBoth.map(user => {
        return <li key={user.id}>
            <p>{user.firstName + ' ' + user.lastName + ' ' + user.dob}</p>
        </li>
    })

    return (
        <div className={classes.monthsListItem}>
            <div onMouseOver={over} onMouseOut={out} className={`${classes.monthItem} ${month.color}`}>{month.nameOfMonth}</div>
            <div className={`${classes.usersInfo} ${isVisible ? classes.visible : classes.hidden}`}>
                <ul>
                    {element}
                </ul>
            </div>
        </div>

    )
}

export default Month;
