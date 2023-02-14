import { useContext, useState } from 'react';
import NotificationContext from '../../store/notification-context';

import { sendContactData } from '../../helpers/form-utils';

import SubmitButton from './submit-button';
import FormInput from './form-input';

import classes from './contact-form.module.css';

const ContactForm = () => {
  const notificationCtx = useContext(NotificationContext);

  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    notificationCtx.showNotification({
      status: 'pending',
      title: 'Sending message...',
      message: "Your message is on it's way",
    });

    try {
      const data = await sendContactData({
        email: emailInput,
        name: nameInput,
        message: messageInput,
      });

      notificationCtx.showNotification({
        status: 'success',
        title: 'Success!',
        message: data.message,
      });

      //Clear fields
      setEmailInput('');
      setNameInput('');
      setMessageInput('');
    } catch (error) {
      notificationCtx.showNotification({
        status: 'error',
        title: 'Error!',
        message: error.message || 'Something went wrong! =(',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <FormInput
          label='Your Email'
          type='email'
          id='email'
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
        />
        <FormInput
          label='Your Name'
          type='text'
          id='name'
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
      </div>
      <FormInput
        label='Your message'
        id='message'
        rows='5'
        value={messageInput}
        onChange={(event) => setMessageInput(event.target.value)}
      />
      <SubmitButton />
    </form>
  );
};

export default ContactForm;
