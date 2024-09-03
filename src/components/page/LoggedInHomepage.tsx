import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { BookOpen, PenTool, Users, List, Star, Bell, Search } from "lucide-react"

export default function LoggedInHomepage() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search query
    console.log('Search query:', searchQuery)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Book Fellow</h1>
          <form onSubmit={handleSearch} className="flex-grow max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary" />
              <Input
                type="search"
                placeholder="Search books, reviews, users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-primary-foreground text-primary"
              />
            </div>
          </form>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Reading Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <div className="flex-grow">
                  <h3 className="font-semibold">Currently Reading</h3>
                  <p>"The Great Gatsby" by F. Scott Fitzgerald</p>
                  <Progress value={33} className="mt-2" />
                </div>
                <Button size="sm">Update Progress</Button>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex-grow">
                  <PenTool className="mr-2 h-4 w-4" /> Write a Review
                </Button>
                <Button variant="outline" className="flex-grow">
                  <List className="mr-2 h-4 w-4" /> Update Reading List
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  { user: "Alice", action: "finished reading", book: "1984" },
                  { user: "Bob", action: "wrote a review for", book: "To Kill a Mockingbird" },
                  { user: "Charlie", action: "added to their reading list", book: "The Catcher in the Rye" },
                ].map((activity, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <span>
                      <strong>{activity.user}</strong> {activity.action} <em>"{activity.book}"</em>
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <aside className="lg:w-1/3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Reading Lists</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["To Read", "Favorites", "Book Club Picks"].map((list, index) => (
                  <li key={index}>
                    <Button variant="ghost" className="w-full justify-start">
                      <List className="mr-2 h-4 w-4" /> {list}
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended for You</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["Dune", "Pride and Prejudice", "The Hobbit"].map((book, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{book}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Read 5 classics this month</p>
              <Progress value={60} className="mb-2" />
              <p className="text-sm text-muted-foreground">3 out of 5 completed</p>
            </CardContent>
          </Card>
        </aside>
      </main>

      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2023 Book Fellow</p>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}