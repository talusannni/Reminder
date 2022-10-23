import React, { Component } from "react";
import DataTable from "./components/DataTable";

export default class ReactDataTableApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = ['id', 'name', 'status', 'schedule_at',''];
    return (
      <DataTable url="/api/reminders/" columns={columns} />
    );
  }
}