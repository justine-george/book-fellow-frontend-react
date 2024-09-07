import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
import bookCover1 from "@/assets/1984.webp";
import bookCover2 from "@/assets/dune.webp";
import bookCover3 from "@/assets/the-hobbit.jpg";
import bookCover4 from "@/assets/pride-and-prejudice.jpg";
import bookCover5 from "@/assets/to-kill-a-mockingbird.webp";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 5, ease: "easeInOut", delay: 0.5 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 5, ease: "easeInOut", delay: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer">
              <BookOpen className="h-8 w-8 mr-2" />
              <h1 className="text-2xl sm:text-3xl font-extrabold">
                Book Fellow
              </h1>
            </div>
            <nav className="hidden sm:block">
              <ul className="flex items-center space-x-4">
                <li>
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-semibold hover:bg-primary-foreground hover:text-primary"
                    >
                      Log In
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="font-semibold"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              className="sm:hidden p-2 rounded-md hover:bg-primary-foreground hover:text-primary transition-colors"
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
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full font-semibold hover:bg-primary-foreground hover:text-primary"
                  >
                    Log In
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full font-semibold"
                  >
                    Sign Up
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <motion.section
          className="bg-primary text-primary-foreground py-32 relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/90 to-primary/70 z-10"></div>
            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              variants={staggerChildren}
            >
              {[bookCover1, bookCover2, bookCover3, bookCover4, bookCover5].map(
                (cover, index) => (
                  <motion.img
                    key={index}
                    src={cover}
                    alt={`Book Cover ${index + 1}`}
                    className={`h-full object-cover opacity-40 ${index > 0 ? "ml-[-50px]" : ""}`}
                    variants={{
                      initial: {
                        opacity: 0,
                        [index % 2 === 0 ? "x" : "y"]:
                          index % 2 === 0 ? -50 : 50,
                      },
                      animate: {
                        opacity: 0.4,
                        [index % 2 === 0 ? "x" : "y"]: 0,
                      },
                    }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                  />
                ),
              )}
            </motion.div>
          </div>
          <motion.div
            className="container mx-auto text-center relative z-20 px-4"
            variants={staggerChildren}
          >
            <motion.h2
              className="text-6xl font-extrabold mb-6 leading-tight"
              variants={fadeInDown}
            >
              Connect with Fellow
              <br />
              Book Lovers
            </motion.h2>
            <motion.p
              className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto"
              variants={fadeInDown}
            >
              Share reviews, create reading lists, and discover your next
              favorite book in our vibrant community.
            </motion.p>
            <motion.div variants={fadeInDown}>
              <Link to="/home">
                <Button
                  size="lg"
                  className="text-xl bg-white text-primary hover:bg-primary-foreground hover:text-primary transition-colors duration-300 px-8 py-6"
                >
                  Get Started <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          id="features"
          className="py-12 sm:py-16 bg-background"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 sm:mb-16"
              variants={fadeInDown}
            >
              Features
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerChildren}
            >
              {[
                {
                  icon: <BookOpenText className="w-8 h-8 text-primary" />,
                  title: "Detailed Reviews",
                  description: "Write and read in-depth book reviews",
                },
                {
                  icon: <UsersRound className="w-8 h-8 text-primary" />,
                  title: "Community",
                  description: "Connect with other book enthusiasts",
                },
                {
                  icon: <ListCollapse className="w-8 h-8 text-primary" />,
                  title: "Reading Lists",
                  description: "Create and share personalized reading lists",
                },
                {
                  icon: <Activity className="w-8 h-8 text-primary" />,
                  title: "Activity Tracking",
                  description: "Follow friends' reading activities",
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeInDown}>
                  <Card className="hover:shadow-md transition-shadow duration-300 h-full">
                    <CardContent className="px-6 py-8 flex flex-col h-full">
                      <div className="mb-3">{feature.icon}</div>
                      <h3 className="text-lg font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="testimonials"
          className="py-12 sm:py-16 bg-secondary/10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-4xl font-bold text-center mb-12 sm:mb-16"
              variants={fadeInDown}
            >
              What Our Users Say
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
              variants={staggerChildren}
            >
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
                <motion.div key={index} variants={fadeInDown}>
                  <Card className="hover:shadow-md transition-shadow duration-300 h-64 flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="w-10 h-10 text-primary mb-4 flex-shrink-0" />
                      <p className="text-lg flex-grow mb-4 overflow-y-auto">
                        {testimonial.quote}
                      </p>
                      <p className="text-base font-semibold text-primary flex-shrink-0">
                        - {testimonial.name}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="py-12 sm:py-16 bg-secondary/10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto text-center px-4">
            <motion.h2
              className="text-4xl font-bold mb-6"
              variants={fadeInDown}
            >
              Join Our Community of Book Lovers
            </motion.h2>
            <motion.p
              className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground"
              variants={fadeInDown}
            >
              Sign up now and start sharing your literary journey with fellow
              book enthusiasts!
            </motion.p>
            <motion.div variants={fadeInDown}>
              <Card className="max-w-md mx-auto">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-lg py-6 cursor-text"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg cursor-pointer"
                    >
                      Sign Up
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            <motion.p
              className="mt-6 text-sm text-muted-foreground"
              variants={fadeInDown}
            >
              By signing up, you agree to our Terms of Service and Privacy
              Policy.
            </motion.p>
          </div>
        </motion.section>
      </main>

      <motion.footer
        className="bg-background text-foreground py-8 border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <BookOpen className="h-6 w-6 mr-2 text-primary" />
              <span className="text-xl font-bold">Book Fellow</span>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center sm:justify-end space-x-6">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors text-foreground"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors text-foreground"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors text-foreground"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-6 text-center sm:text-left text-sm text-muted-foreground">
            <p>&copy; 2024 Book Fellow. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
