import React from "react";
import { Button, Icon, Item, ItemContent, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem({event}) {
    
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                        <ItemContent>
                            <Item.Header content={event.description} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </ItemContent>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"/> {event.date}
                    <Icon name="marker"/> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventListAttendee attendee={attendee} key={attendee.id}/>
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button color="teal" floated="right" content="View" />
            </Segment>
        </Segment.Group>
    )
}