/*
 * App.menu Messages
 *
 * This contains all the text for the App.menu component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  menu: [
    {
      id: 'app.containers.App.menu.Home',
      defaultMessage: 'Home',
      path: '/',
      icon: 'HomeIcon',
    },
    {
      id: 'app.containers.App.menu.About',
      defaultMessage: 'About',
      path: '/about',
      icon: 'AboutIcon',
    },
    {
      id: 'app.containers.App.menu.Resume',
      defaultMessage: 'Resume',
      path: '/resume',
      icon: 'ResumeIcon',
    },
    {
      id: 'app.containers.App.menu.Portfolio',
      defaultMessage: 'Portfolio',
      path: '/portfolio',
      icon: 'PortfolioIcon',
    },
    {
      id: 'app.containers.App.menu.Blog',
      defaultMessage: 'Blog',
      path: '/blog',
      icon: 'BlogIcon',
    },
    {
      id: 'app.containers.App.menu.Contact',
      defaultMessage: 'Contact',
      path: '/contact',
      icon: 'ContactIcon',
    },
  ],
  menuHeaderName: {
    id: 'app.containers.App.menu.HeaderName',
    defaultMessage: 'Yagnesh Modh',
  },
  menuHeaderDescription: {
    id: 'app.containers.App.menu.HeaderDescription',
    defaultMessage: 'Creative Full stack Developer',
  },
  socialIcons: [
    {
      id: 'app.containers.App.socilaIcons.Facebook',
      defaultMessage: 'Facebook',
      path: '/',
    },
    {
      id: 'app.containers.App.socilaIcons.Twitter',
      defaultMessage: 'Twitter',
      path: '/about',
    },
    {
      id: 'app.containers.App.socilaIcons.LinkedIn',
      defaultMessage: 'LinkedIn',
      path: '/resume',
    },
    {
      id: 'app.containers.App.socilaIcons.Instagram',
      defaultMessage: 'Instagram',
      path: '/portfolio',
    },
    {
      id: 'app.containers.App.socilaIcons.Github',
      defaultMessage: 'Github',
      path: '/blog',
    },
    {
      id: 'app.containers.App.socilaIcons.Mail',
      defaultMessage: 'Mail',
      path: '/contact',
    },
  ],
});
