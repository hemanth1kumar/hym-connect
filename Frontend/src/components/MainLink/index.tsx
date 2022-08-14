import React from 'react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';

// icons, img
import {
  TbGitPullRequest,
  TbAlertCircle,
  TbMessages,
  TbDatabase,
} from 'react-icons/tb';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

const MainLink = ({ icon, color, label }: MainLinkProps): JSX.Element => (
  <UnstyledButton
    sx={(theme) => ({
      display: 'block',
      width: '100%',
      padding: theme.spacing.xs,
      borderRadius: theme.radius.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },
    })}
  >
    <Group>
      <ThemeIcon color={color} variant="light">
        {icon}
      </ThemeIcon>

      <Text size="sm">{label}</Text>
    </Group>
  </UnstyledButton>
);

const data = [
  {
    icon: <TbGitPullRequest size={16} />,
    color: 'blue',
    label: 'Pull Requests',
  },
  { icon: <TbAlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
  { icon: <TbMessages size={16} />, color: 'violet', label: 'Discussions' },
  { icon: <TbDatabase size={16} />, color: 'grape', label: 'Databases' },
];

const MainLinks = (): JSX.Element => {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
};

export default MainLinks;
