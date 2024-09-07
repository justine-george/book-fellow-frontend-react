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
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <BookOpen className="h-8 w-8 mr-2" />
            <h1 className="text-3xl font-extrabold">Book Fellow</h1>
          </div>
          <nav>
            <ul className="flex items-center space-x-4 sm:space-x-8">
              <li>
                <a
                  href="#features"
                  className="text-lg hover:underline font-medium transition-colors duration-200 hover:text-secondary"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-lg hover:underline font-medium transition-colors duration-200 hover:text-secondary"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="/login">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg font-semibold bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-200"
                  >
                    Log In
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="text-lg font-semibold"
                  >
                    Sign Up
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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
                  icon: <BookOpenText className="w-16 h-16" />,
                  title: "Detailed Reviews",
                  description: "Write and read in-depth book reviews",
                },
                {
                  icon: <UsersRound className="w-16 h-16" />,
                  title: "Community",
                  description: "Connect with other book enthusiasts",
                },
                {
                  icon: <ListCollapse className="w-16 h-16" />,
                  title: "Reading Lists",
                  description: "Create and share personalized reading lists",
                },
                {
                  icon: <Activity className="w-16 h-16" />,
                  title: "Activity Tracking",
                  description: "Follow friends' reading activities",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="flex flex-col items-center text-center p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="flex flex-col items-center flex-grow">
                    <div className="mb-6 text-primary">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground">
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
                  className="p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent>
                    <p className="text-xl mb-6 italic">"{testimonial.quote}"</p>
                    <p className="text-lg font-semibold">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Join Our Community of Book Lovers
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Sign up now and start sharing your literary journey with fellow
              book enthusiasts!
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex justify-center max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mr-4 bg-primary-foreground text-primary text-lg py-6"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="text-lg px-8"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto text-center">
          <p className="text-lg">
            &copy; 2024 Book Fellow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
