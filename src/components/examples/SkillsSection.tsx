import { SkillsSection } from '../SkillsSection';
import { ThemeProvider } from '../ThemeProvider';

export default function SkillsSectionExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <SkillsSection />
      </div>
    </ThemeProvider>
  );
}