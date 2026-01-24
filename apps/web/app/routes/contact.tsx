import { contactInfo } from '@/content/contact';
import { container, section } from '@/styles/utils.css';
import { Card } from '@/components/ui/Card';
import {
  pageTitle,
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
        <h1 className={pageTitle}>{contactInfo.title}</h1>
        <p className={pageDescription}>{contactInfo.description}</p>

        <div className={contactGrid}>
          {contactInfo.methods.map((method) => (
            <Card key={method.type} elevation="raised">
              <div className={contactCard}>
                <div className={contactIcon}>{method.icon}</div>
                <h3 className={contactLabel}>{method.label}</h3>
                <p className={contactValue}>{method.value}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
