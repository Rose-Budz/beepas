import { contactInfo } from '@/content/contact';
import { container, section, sectionCard, pageTitle } from '@/styles/utils.css';
import {
  pageDescription,
  contactGrid,
  contactCard,
  contactIcon,
  contactLabel,
  contactValue,
} from './contact.css';

export default function Contact() {
  return (
    <div className={section}>
      <div className={container}>
        <div className={sectionCard}>
          <h1 className={pageTitle}>{contactInfo.title}</h1>
          <p className={pageDescription}>{contactInfo.description}</p>

          <div className={contactGrid}>
            {contactInfo.methods.map((method) => (
              <div key={method.type} className={contactCard}>
                <div className={contactIcon}>{method.icon}</div>
                <h3 className={contactLabel}>{method.label}</h3>
                <p className={contactValue}>{method.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
