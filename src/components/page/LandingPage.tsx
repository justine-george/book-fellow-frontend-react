import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, List, Star } from "lucide-react"

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission (e.g., send to backend, show confirmation)
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Book Fellow</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><Button variant="secondary">Sign Up</Button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-primary to-primary-foreground text-primary-foreground py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Connect with Fellow Book Lovers</h2>
            <p className="text-xl mb-8">Share reviews, create reading lists, and discover your next favorite book.</p>
            <Button size="lg" className="text-lg">Get Started</Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <BookOpen className="w-10 h-10 mb-4" />, title: "Detailed Reviews", description: "Write and read in-depth book reviews" },
                { icon: <Users className="w-10 h-10 mb-4" />, title: "Community", description: "Connect with other book enthusiasts" },
                { icon: <List className="w-10 h-10 mb-4" />, title: "Reading Lists", description: "Create and share personalized reading lists" },
                { icon: <Star className="w-10 h-10 mb-4" />, title: "Activity Tracking", description: "Follow friends' reading activities" },
              ].map((feature, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent>
                    {feature.icon}
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Alice Johnson", quote: "Book Fellow has revolutionized how I discover new books and connect with other readers!" },
                { name: "Mark Thompson", quote: "The detailed reviews on Book Fellow have helped me find my new favorite authors." },
                { name: "Sarah Lee", quote: "I love sharing my reading lists and seeing what my friends are reading. It's like a book club that never ends!" },
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <CardContent>
                    <p className="mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community of Book Lovers</h2>
            <p className="mb-8">Sign up now and start sharing your literary journey!</p>
            <form onSubmit={handleSubmit} className="flex justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mr-2 bg-primary-foreground text-primary"
                required
              />
              <Button type="submit" variant="secondary">Sign Up</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Book Fellow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}