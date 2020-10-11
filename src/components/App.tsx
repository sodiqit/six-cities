import React from 'react';

interface HelloWorldProps {
  userName: string;
  projectName: string;
}

export const App = (props: HelloWorldProps): JSX.Element => {
  const { userName, projectName } = props;
  return (
    <h2>
      Hi {userName}! Welcome to {projectName}!
    </h2>
  );
};
