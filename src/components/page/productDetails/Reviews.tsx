"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Review {
  author: string;
  comment: string;
  rating: number;
}

const Reviews = ({ productId }: { productId: string }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({
    author: "",
    comment: "",
    rating: 1,
  });

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(
        `http://localhost:5000/api/reviews/${productId}`
      );
      const data = await response.json();
      setReviews(data);
    };

    fetchReviews();
  }, [productId]);

  const handleAddReview = async () => {
    const reviewData = {
      productId,
      userReview: newReview.comment,
    };

    // export default async function Home() {
    //     const { data }: any = await nexiosInstance.get("/products", {
    //       cache: "no-store",
    //       next: {},
    //     });

    //     const products = data?.data as TProduct[];

    const response = await fetch(`http://localhost:5000/api/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    });

    if (response.ok) {
      const addedReview = await response.json();
      setReviews((prevReviews) => [
        ...prevReviews,
        {
          author: newReview.author,
          comment: newReview.comment,
          rating: newReview.rating,
        },
      ]);
      setNewReview({ author: "", comment: "", rating: 1 }); // Reset form after submission
    }
  };

  return (
    <div className="mt-8">
      <ul className="mt-2">
        {reviews.map((review, index) => (
          <li key={index} className="border-b border-gray-200 py-4">
            <p className="font-bold">{review.author}</p>
            <p className="text-gray-700">{review.comment}</p>
            <span className="text-yellow-500">
              {"⭐".repeat(review.rating)}
            </span>
          </li>
        ))}
      </ul>

      {/* Add Review Button and Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4">Add Review</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Add a Review</DialogTitle>
          <DialogDescription>
            Share your experience with this product.
          </DialogDescription>
          <div className="space-y-4 mt-4">
            <Input
              placeholder="Your Name"
              value={newReview.author}
              onChange={(e) =>
                setNewReview({ ...newReview, author: e.target.value })
              }
            />
            <Textarea
              placeholder="Your Review"
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Rating (1-5)"
              value={newReview.rating}
              min={1}
              max={5}
              onChange={(e) =>
                setNewReview({ ...newReview, rating: Number(e.target.value) })
              }
            />
          </div>
          <DialogFooter>
            <Button onClick={handleAddReview}>Submit Review</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Reviews;
