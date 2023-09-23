import React from "react";
import { connect } from "react-redux";

import Calendar from "./Calendar/Calendar";

const WeekTask = (props) => {
     return (
          <div>
               {props.Tasks.map((task) => {
                    return <Calendar props={task} key={task.id} />;
               })}
          </div>
     );
};

const mapStateToProps = (state) => {
     return { Tasks: state.Tasks };
};

export default connect(mapStateToProps)(WeekTask);
