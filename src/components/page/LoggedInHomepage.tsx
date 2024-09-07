import { useMemo, useCallback } from "react";
import { BookOpen, Heart, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Import components
import { Header } from "@/components/layout/Header";
import { ReadingActivity } from "@/components/features/reading/ReadingActivity";
import { CommunityFeed } from "@/components/features/community/CommunityFeed";
import { ReadingLists } from "@/components/features/reading/ReadingLists";
import { RecommendedBooks } from "@/components/features/books/RecommendedBooks";
import { CommunityChallenge } from "@/components/features/community/CommunityChallenge";
import { Footer } from "@/components/layout/Footer";

// Import images from assets
import userAvatar from "@/assets/profile.jpg";
import book_cover_great_gatsby from "@/assets/great-gatsby.webp";
import book_cover_1984 from "@/assets/1984.webp";
import book_cover_to_kill_a_mockingbird from "@/assets/to-kill-a-mockingbird.webp";
import book_cover_the_catcher_in_the_rye from "@/assets/the-catcher-in-the-rye.jpg";
import book_cover_dune from "@/assets/dune.webp";
import book_cover_pride_and_prejudice from "@/assets/pride-and-prejudice.jpg";
import book_cover_the_hobbit from "@/assets/the-hobbit.jpg";

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 40%, 75%)`;
}

export default function LoggedInHomepage() {
  const communityFeed = useMemo(
    () => [
      {
        user: "Alice",
        action: "finished reading",
        book: "1984",
        avatar: userAvatar,
        color: getRandomColor(),
        bookCover: book_cover_1984,
      },
      {
        user: "Bob",
        action: "wrote a review for",
        book: "To Kill a Mockingbird",
        avatar: userAvatar,
        color: getRandomColor(),
        bookCover: book_cover_to_kill_a_mockingbird,
      },
      {
        user: "Charlie",
        action: "added to their reading list",
        book: "The Catcher in the Rye",
        avatar: userAvatar,
        color: getRandomColor(),
        bookCover: book_cover_the_catcher_in_the_rye,
      },
    ],
    [],
  );

  const recommendedBooks = [
    {
      title: "Dune",
      author: "Frank Herbert",
      cover: book_cover_dune,
      rating: 4.5,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover: book_cover_pride_and_prejudice,
      rating: 4.7,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: book_cover_the_hobbit,
      rating: 4.6,
    },
  ];

  const readingLists = [
    { name: "To Read", icon: BookOpen, count: 12 },
    { name: "Favorites", icon: Heart, count: 8 },
    { name: "Book Club Picks", icon: Users, count: 5 },
  ];

  const currentlyReading = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: book_cover_great_gatsby,
    progress: 33,
    pagesRead: 112,
    totalPages: 340,
    timeSpent: "5h 23m",
    rating: 4,
  };

  const handleNewList = useCallback(() => {
    console.log("Creating new list");
    // Example: openNewListModal();
  }, []);

  const handleSelectList = useCallback(
    (list: { name: string; icon: any; count: number }) => {
      console.log("Selecting list", list.name);
      // Example: navigateToList(list.name);
    },
    [],
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Book Fellow: Home</title>
        <meta
          name="description"
          content="Book Fellow is a platform for book lovers to connect, share reviews, and discover new books."
        />
        <meta
          name="keywords"
          content="book, fellow, book lovers, book reviews, book discovery, reading lists, book community"
        />
        <meta name="author" content="Book Fellow" />
        <meta property="og:title" content="Book Fellow: Home" />
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
        <meta property="og:image:alt" content="Book Fellow: Home" />
        <meta property="og:image:type" content="image/png" />
      </Helmet>
      <Header userAvatar={userAvatar} />

      <div>
        <main className="flex-grow container mx-auto py-8 px-4 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-8">
            <ReadingActivity currentlyReading={currentlyReading} />
            <CommunityFeed communityFeed={communityFeed} />
          </div>

          <aside className="lg:w-1/3 space-y-8">
            <ReadingLists
              readingLists={readingLists}
              onNewList={handleNewList}
              onSelectList={handleSelectList}
            />
            <RecommendedBooks recommendedBooks={recommendedBooks} />
            <CommunityChallenge />
          </aside>
        </main>
      </div>

      <Footer />
    </div>
  );
}
