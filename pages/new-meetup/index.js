import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpForm = (enteredMeetUpData) => {
  function addMeetUpPage() {}
  return <NewMeetupForm onAddMeetUp={addMeetUpPage} />;
};

export default NewMeetUpForm;
