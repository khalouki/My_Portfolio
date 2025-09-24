import { ContactSection } from '../ContactSection';
import { ThemeProvider } from '../ThemeProvider';

export default function ContactSectionExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}