import React from 'react';

import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


export default class IndexPage extends React.Component {

  onChange(date, dateString) {
    console.log(date, dateString);
  }

  render() {
    return (
      // <Calendar onPanelChange={this.onPanelChange} />
      <div>
        <DatePicker onChange={this.onChange} />
        <br />
        <MonthPicker onChange={this.onChange} placeholder="Select month" />
        <br />
        <RangePicker onChange={this.onChange} />
        <br />
        <WeekPicker onChange={this.onChange} placeholder="Select week" />
      </div>
    )

  }
}

