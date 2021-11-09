import React from 'react';

import { ScheduleComponent, Day, Week, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
export default class UserCalendar extends React.Component {
    constructor() {
        super(...arguments);
        this.data = extend([], [], null, true);
    }
    render() {
        return <ScheduleComponent renderCell={()=><div>hola</div>} timeScale={{ enable: false }} width='100%' height='350px' selectedDate={new Date(2018, 1, 15)}>
  <ViewsDirective>
    <ViewDirective option='Week' interval={1} displayName='1 Weeks' showWeekend={true} isSelected={true}/>
  </ViewsDirective>
  <Inject services={[Week]}/>
</ScheduleComponent>;
    }
}
;
