import { useContext } from 'react';
import NotificationContext from '../store/notification-context';

import Notification from '../components/ui/notification';
import ContactForm from '../components/contact/contact-form';
import FormSection from '../components/contact/form-section';

const ContactPage = () => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <FormSection>
      <h1>How can I help you?</h1>
      <ContactForm />
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          status={activeNotification.status}
          message={activeNotification.message}
        />
      )}
    </FormSection>
  );
};

export default ContactPage;
