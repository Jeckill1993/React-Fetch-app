import React, {useEffect, useState} from 'react';
import App from "./App";


const ContainerApp = (props) => {
    let [isFetching, setStateFetching] = useState(false);
    let [months, setMonths] = useState(props.months);
    let monthsCopy = [...props.months];

    monthsCopy.peopleBoth = {...props.months.peopleBoth}
    monthsCopy.color = {...props.months.color}
    monthsCopy.numberOfMonth = {...props.months.numberOfMonth}



    useEffect(() => {
        setStateFetching(true);
        fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }).then(response => {
            if (response.ok) {
                setStateFetching(false);
                return response.json();
            }
        }).then(users => {
            users.map(user => {
                let date = new Date(user.dob);
                for (let i = 0; i < monthsCopy.length; i++) {
                    if (date.getMonth() === i) {
                        monthsCopy[i].peopleBoth.push(user);
                    }

                    if (monthsCopy[i].peopleBoth.length >= 0 && monthsCopy[i].peopleBoth.length <= 2) {
                        monthsCopy[i].color = 'grey';
                    } else if (monthsCopy[i].peopleBoth.length >= 3 && monthsCopy[i].peopleBoth.length <= 6) {
                        monthsCopy[i].color = 'blue';
                    } else if (monthsCopy[i].peopleBoth.length >= 7 && monthsCopy[i].peopleBoth.length <= 10) {
                        monthsCopy[i].color = 'green';
                    } else if (monthsCopy[i].peopleBoth.length >= 11) {
                        monthsCopy[i].color = 'red';
                    }
                }

            })
            setMonths(monthsCopy);
        });
    }, [])


    return (
        <div>
            <App months={months}/>
        </div>
    )
}

export default ContainerApp;