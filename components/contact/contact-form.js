import { useState, useEffect } from 'react';

import Notification from '../ui/notification';

import classes from './contact-form.module.css';

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
};

const ContactForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [requestStatus, setRequestStatus] = useState(); //pending, success, error
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setErrorMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({
        email: emailInput,
        name: nameInput,
        message: messageInput,
      });
      setRequestStatus('success');
      setEmailInput('');
      setNameInput('');
      setMessageInput('');
    } catch (error) {
      setErrorMessage(error.message);
      setRequestStatus('error');
    }
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: "Your message is on it's way",
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: errorMessage,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={nameInput}
              onChange={(event) => setNameInput(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your message</label>
          <textarea
            id='message'
            rows='5'
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button
            disabled={requestStatus === 'pending'}
            className={requestStatus === 'pending' && classes.blocked}
          >
            {requestStatus === 'pending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
          onClick={() => setRequestStatus(null)}
        />
      )}
    </section>
  );
};

export default ContactForm;
