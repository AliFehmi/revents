import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import cuid from "cuid";
export default function EventForm({
  setFormOpen,
  setEvents,
  createEvent,
  selectedEvent,
  updateEvent,
}) {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);
  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  function handleFormSubmit() {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: "/assets/user.png",
        });
    setFormOpen(false);
  }
  return (
    <Segment clearing>
      <Header
        content={selectedEvent ? "Edit Event" : "Create New Event"}
      ></Header>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event Title'
            value={values.title}
            onChange={(e) => handleInputChange(e)}
            name='title'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            value={values.category}
            onChange={(e) => handleInputChange(e)}
            name='category'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            value={values.description}
            onChange={(e) => handleInputChange(e)}
            name='description'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            value={values.city}
            onChange={(e) => handleInputChange(e)}
            name='city'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
            name='venue'
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            value={values.date}
            onChange={(e) => handleInputChange(e)}
            name='date'
          />
        </Form.Field>
        <Button content='Submit' type='submit' floated='right' positive />
        <Button
          content='Cancel'
          onClick={() => setFormOpen(false)}
          type='submit'
          floated='right'
        />
      </Form>
    </Segment>
  );
}
