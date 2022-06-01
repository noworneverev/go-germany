import { useScrollTrigger } from '@mui/material';
// import React from 'react';
import * as React from 'react';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
  darkMode: boolean;
}

const ScrollHandler = (props: Props) => {
  // const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    // target: props.window ? window() : undefined,
  });

  function getBackgroundColor(trigger: boolean, darkmode: boolean) {
    if (!trigger && !darkmode) {
      return 'white';
    }
    if (trigger && !darkmode) {
      return 'rgba(255, 255, 255, 0.7)';
    }
    if (!trigger && darkmode) {
      return 'rgb(39,39,39)';
    }
    if (trigger && darkmode) {
      return 'rgb(39,39,39,0.7)';
    }
  }

  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
    style: {
      // backgroundColor: trigger ? 'rgba(255, 255, 255, 0.7)' : 'white',
      backgroundColor: getBackgroundColor(trigger, props.darkMode),
      backdropFilter: 'blur(20px)',
    },
    // style: {
    //   backgroundColor: trigger ? 'red' : 'transparent',
    //   color: trigger ? 'white' : 'black',
    //   transition: trigger ? '0.3s' : '0.5s',
    //   boxShadow: 'none',
    //   padding: '10px 0px',
    // },
  });
};

const ScrollToOpacity = (props: Props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToOpacity;
