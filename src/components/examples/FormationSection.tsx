import { FormationSection } from '../FormationSection';
import { ThemeProvider } from '../ThemeProvider';

export default function FormationSectionExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <FormationSection />
      </div>
    </ThemeProvider>
  );
}