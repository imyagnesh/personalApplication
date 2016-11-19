/*
 * App.menu Messages
 *
 * This contains all the text for the App.menu component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  headerText: {
    id: 'app.containers.Contact.HeaderText',
    defaultMessage: 'LETS HAVE A CHAT',
  },
  subHeaderText: {
    id: 'app.containers.Contact.SubHeaderText',
    defaultMessage: 'Reach out and send a friendly hello.',
  },
  contactFormHeader: {
    id: 'app.containers.Contact.ContactForm.Header',
    defaultMessage: 'Get a website that looks amazing and actually works',
  },
  socialIcons: [
    {
      id: 'app.containers.App.socilaIcons.Facebook',
      defaultMessage: 'Facebook',
      path: '/',
      icon: 'FacebookIcon',
    },
    {
      id: 'app.containers.App.socilaIcons.Twitter',
      defaultMessage: 'Twitter',
      path: '/about',
      icon: 'TwitterIcon',
    },
    {
      id: 'app.containers.App.socilaIcons.LinkedIn',
      defaultMessage: 'LinkedIn',
      path: '/resume',
      icon: 'LinkedInIcon',
    },
    {
      id: 'app.containers.App.socilaIcons.Instagram',
      defaultMessage: 'Instagram',
      path: '/portfolio',
      icon: 'InstagramIcon',
    },
    {
      id: 'app.containers.App.socilaIcons.Github',
      defaultMessage: 'Github',
      path: '/blog',
      icon: 'GithubIcon',
    },
    {
      id: 'app.containers.App.socilaIcons.Mail',
      defaultMessage: 'Mail',
      path: '/contact',
      icon: 'MailIcon',
    },
  ],
});
