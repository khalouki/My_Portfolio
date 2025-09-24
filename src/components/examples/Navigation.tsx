import { Navigation } from '../Navigation';
import { ThemeProvider } from '../ThemeProvider';

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 p-8">
          <p className="text-foreground">Scroll to see the navigation background effect</p>
        </div>
      </div>
    </ThemeProvider>
  );
}