import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { CustomAlert } from "@/components/ui/CustomAlert";

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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const restOfContentControls = useAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    // Here you would typically call an API to add the email to a mailing list
    setEmail(""); // Clear the input after submission
    setShowAlert(true); // Show the success alert
    setTimeout(() => setShowAlert(false), 5000); // Hide the alert after 5 seconds
  };

  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerChildren: Variants = {
    visible: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const heroStagger: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.5,
        when: "beforeChildren",
        delayChildren: 0.5,
      },
    },
  };

  const heroFadeIn: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const restOfContentFadeIn: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleLogoClick = useCallback(() => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  useEffect(() => {
    const sequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for hero animations
      await restOfContentControls.start("visible");
    };
    sequence();
  }, [restOfContentControls]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Book Fellow</title>
        <meta
          name="description"
          content="Book Fellow is a platform for book lovers to connect, share reviews, and discover new books."
        />
        <meta
          name="keywords"
          content="book, fellow, book lovers, book reviews, book discovery, reading lists, book community"
        />
        <meta name="author" content="Book Fellow" />
        <meta property="og:title" content="Book Fellow" />
        <meta
          property="og:description"
          content="Book Fellow is a platform for book lovers to connect, share reviews, and discover new books."
        />
        <meta
          property="og:image"
          content="https://book-fellow-frontend-react.pages.dev/og-image.png"
        />
        <meta
          property="og:url"
          content="https://book-fellow-frontend-react.pages.dev"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Book Fellow" />
        <meta property="og:image:type" content="image/png" />
      </Helmet>
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={handleLogoClick}
            >
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
                      className="font-semibold hover:bg-secondary-foreground hover:text-secondary transition-colors"
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
        <div className="sm:hidden bg-primary text-primary-foreground py-4 fixed top-[72px] left-0 right-0 z-50 shadow-md">
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
                    className="w-full font-semibold hover:bg-secondary-foreground hover:text-secondary transition-colors"
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
          initial="hidden"
          animate="visible"
          variants={heroStagger}
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
                      hidden: {
                        opacity: 0,
                        [index % 2 === 0 ? "x" : "y"]:
                          index % 2 === 0 ? -50 : 50,
                      },
                      visible: {
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
            variants={heroStagger}
          >
            <motion.h2
              className="text-6xl font-extrabold mb-6 leading-tight"
              variants={heroFadeIn}
            >
              <motion.span className="block" variants={heroFadeIn}>
                Connect with Fellow
              </motion.span>
              <motion.span className="block" variants={heroFadeIn}>
                Book Lovers
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-2xl mb-10 opacity-90 max-w-2xl mx-auto"
              variants={heroFadeIn}
            >
              Share reviews, create reading lists, and discover your next
              favorite book in our vibrant community.
            </motion.p>
            <motion.div variants={heroFadeIn}>
              <Link to="/home">
                <Button
                  size="lg"
                  className="text-xl bg-white text-primary hover:bg-primary-foreground hover:text-primary duration-300 px-8 py-6 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:scale-105 transform transition-all"
                >
                  Get Started <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.div
          initial="hidden"
          animate={restOfContentControls}
          variants={restOfContentFadeIn}
        >
          <motion.section
            id="features"
            className="py-12 sm:py-16 bg-background"
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
                    description: "Create and share reading lists",
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
                        <h3 className="text-xl font-bold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-base text-muted-foreground">
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
            className="py-6 sm:py-6 bg-secondary/10"
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
                    <Card className="hover:shadow-md transition-shadow duration-300 h-52 sm:h-52 md:h-72 lg:h-64 xl:h-56 flex flex-col">
                      <CardContent className="p-6 flex flex-col h-full">
                        <Quote className="w-10 h-10 text-primary mb-4 flex-shrink-0" />
                        <p className="text-base flex-grow mb-4 overflow-y-auto">
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

          <motion.section className="py-16 sm:py-16 bg-secondary/10">
            <div className="container mx-auto text-center px-4">
              <motion.h2
                className="text-4xl font-bold mb-12"
                variants={fadeInDown}
              >
                Join Our Community
              </motion.h2>
              <motion.p
                className="text-xl mb-10 max-w-2xl mx-auto text-muted-foreground"
                variants={fadeInDown}
              >
                Get weekly book recommendations, reading challenges, and
                literary insights delivered straight to your inbox!
              </motion.p>
              <motion.div variants={fadeInDown}>
                <Card className="max-w-md mx-auto">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Input
                          type="email"
                          placeholder="Your email address"
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
                        Join the Club
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.p
                className="mt-12 text-sm text-muted-foreground"
                variants={fadeInDown}
              >
                Subscribe for weekly reading recommendations. Your inbox is safe
                with us, and you can opt-out at any time.
              </motion.p>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <motion.footer
        className="bg-background text-foreground py-8 border-t"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
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

      {showAlert && (
        <div className="fixed top-24 right-8 z-50">
          <CustomAlert
            title="Success!"
            description="You've successfully joined our book club. Check your email for confirmation."
            className="border-green-500 bg-green-50 text-green-800"
          />
        </div>
      )}
    </div>
  );
}
