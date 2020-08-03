import React from 'react';
import '../App.css';
import Month from "./Months/Month";
import classes from "./Months/Months.module.css";

const App = ({months}) => {


  let element = months.map(month => {
    return <Month key={month.numberOfMonth} month={month} />
  })

  return (
      <div className={classes.content}>
        {element}
      </div>
  )
}

export default App;
