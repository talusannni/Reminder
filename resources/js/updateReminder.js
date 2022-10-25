import React, { Component } from "react";
import EditReminder from "./components/create.reminder";

export default class UpdateReminderApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <EditReminder />
    );
  }
}