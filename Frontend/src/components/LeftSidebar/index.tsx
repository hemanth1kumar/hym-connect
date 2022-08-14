import React from 'react';
import { Box, createStyles, Navbar, ScrollArea, Text } from '@mantine/core';
import MainLinks from '../MainLink';

const LeftSidebar = (): JSX.Element => (
  <Navbar
    width={{ base: 200 }}
    height="100%"
    p="xs"
    position={{ top: 0, left: 0 }}
  >
    {/* <Navbar.Section>Brand logo</Navbar.Section> */}
    <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
      <Box py="xs">
        <MainLinks />
      </Box>
    </Navbar.Section>
    <Navbar.Section grow>
      <Box py="xs">
        <Text>Profile</Text>
        <MainLinks />
      </Box>
    </Navbar.Section>
    <Navbar.Section>
      <NavFooter />
    </Navbar.Section>
  </Navbar>
);

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    borderTop: `1px solid ${theme.colors.gray[2]}`,
  },
}));

const NavFooter = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Box my="md">Footer</Box>
    </div>
  );
};

export default LeftSidebar;
