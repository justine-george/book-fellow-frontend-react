import { BookOpen } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/10 text-foreground py-8 border-t border-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <BookOpen className="h-6 w-6 mr-2 text-primary" />
            <span className="text-xl font-bold">Book Fellow</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-6">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-6 text-center sm:text-left text-sm text-muted-foreground">
          <p>&copy; 2024 Book Fellow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
