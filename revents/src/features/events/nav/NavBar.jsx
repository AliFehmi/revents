import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";

export default function NavBar({ setFormOpen }) {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  function handleSignOut() {
    navigate('/')
    setAuthenticated(false);
  }
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}

        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
}
