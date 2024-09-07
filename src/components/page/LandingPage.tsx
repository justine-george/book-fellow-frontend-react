import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Activity,
  BookOpen,
  BookOpenText,
  UsersRound,
  ArrowRight,
  ListCollapse,
  Quote,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 mr-2" />
              <h1 className="text-2xl sm:text-3xl font-extrabold">Book Fellow</h1>
            </div>
            <nav className="hidden sm:block">
              <ul className="flex items-center space-x-4">
                <li>
                  <Link to="/login">
                    <Button variant="outline" size="default" className="font-semibold">
                      Log In
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <Button variant="secondary" size="default" className="font-semibold">
                      Sign Up
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="sm:hidden bg-primary text-primary-foreground py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2">
              <li>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="default" className="w-full font-semibold">
                    Log In
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="secondary" size="default" className="w-full font-semibold">
                    Sign Up
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cGF0aCBkPSJNMzYgMjRMNDggMjRMNDggMzZMNDggNDhMMzYgNDhMMjQgNDhMMjQgMzZMMjQgMjRMMzYgMjRaIiBmaWxsPSIjZjFmMWYxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD4KPC9zdmc+')] bg-repeat"></div>
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-6xl font-extrabold mb-6 leading-tight">
              Connect with Fellow
              <br />
              Book Lovers
            </h2>
            <p className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto">
              Share reviews, create reading lists, and discover your next
              favorite book in our vibrant community.
            </p>
            <Link to="/home">
              <Button
                size="lg"
                className="text-xl bg-white text-primary hover:bg-primary-foreground hover:text-primary transition-colors duration-300 px-8 py-6"
              >
                Get Started <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </section>

        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: <BookOpenText className="w-10 h-10 text-primary" />,
                  title: "Detailed Reviews",
                  description: "Write and read in-depth book reviews",
                },
                {
                  icon: <UsersRound className="w-10 h-10 text-primary" />,
                  title: "Community",
                  description: "Connect with other book enthusiasts",
                },
                {
                  icon: <ListCollapse className="w-10 h-10 text-primary" />,
                  title: "Reading Lists",
                  description: "Create and share personalized reading lists",
                },
                {
                  icon: <Activity className="w-10 h-10 text-primary" />,
                  title: "Activity Tracking",
                  description: "Follow friends' reading activities",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-secondary/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  name: "Alice Johnson",
                  quote:
                    "Book Fellow has revolutionized how I discover new books and connect with other readers!",
                },
                {
                  name: "Mark Thompson",
                  quote:
                    "The detailed reviews on Book Fellow have helped me find my new favorite authors.",
                },
                {
                  name: "Sarah Lee",
                  quote:
                    "I love sharing my reading lists and seeing what my friends are reading. It's like a book club that never ends!",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="w-10 h-10 text-primary mb-4" />
                    <p className="text-lg flex-grow mb-4">"{testimonial.quote}"</p>
                    <p className="text-base font-semibold text-primary">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/10">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Join Our Community of Book Lovers
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground">
              Sign up now and start sharing your literary journey with fellow book enthusiasts!
            </p>
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-lg py-6"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg"
                  >
                    Sign Up
                  </Button>
                </form>
              </CardContent>
            </Card>
            <p className="mt-6 text-sm text-muted-foreground">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-background text-foreground py-8 border-t">
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
    </div>
  );
}
