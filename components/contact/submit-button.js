import { useContext } from 'react';
import NotificationContext from '../../store/notification-context';

import classes from './submit-button.module.css';

const SubmitButton = () => {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <div className={classes.actions}>
      <button
        disabled={activeNotification && activeNotification.status === 'pending'}
        className={
          activeNotification && activeNotification.status === 'pending'
            ? classes.blocked
            : undefined
        }
      >
        {activeNotification && activeNotification.status === 'pending'
          ? 'Sending...'
          : 'Send Message'}
      </button>
    </div>
  );
};

export default SubmitButton;
