import React from "react";

const renderStars = (rating) => {
  const totalStars = 5; // Total number of stars
  let stars = "";

  // Generate filled stars
  for (let i = 0; i < rating; i++) {
    stars += "★"; // Filled star
  }

  // Generate empty stars
  for (let i = rating; i < totalStars; i++) {
    stars += "☆"; // Empty star
  }

  return stars;
};

const reviews = [
  {
    rating: 4,
    review:
      "GThis application is very good and fresh mind and very hots girls it was so happy",
    username: "Ankit Patel",
    date: "27 July 2024",
  },
  {
    rating: 3,
    review:
      "I have used this app for more than a month, thanks to adult friend finder video chat app which helps me match with many attractive singles, so I can have fun every night near my area. ",
    username: "Rahul Verma",
    date: "5 June 2022",
  },
  {
    rating: 4,
    review:
      "5 star for me! | Super duper like this app because I have met a really wonderful persons in different areas, and it is really easy to use I really recommend this application for everyone! salute to the creators of this app",
    username: "Vikram Singh",
    date: "15 January 2023",
  },
  {
    rating: 5,
    review:
      "This hookup video chat app provides a good platform for adult friend finder to have a wild video chat with no strings attached. The customer service is very quick when you have issues about their app. Anyway, I will recommend you this aff video chat app for your hookup adventures.",
    username: "Ankit Desai",
    date: "10 Oct 2021",
  },
];

function RatingAndReviews() {
  return (
    <div className="max-w-2xl mx-auto text-left p-4">
      <h2 className="text-xl font-medium mb-2">Rating & Reviews</h2>
      <p className="pl-2 text-xs">Ratings and reviews are verified</p>
      <div className="flex items-center justify-between p-2">
        <div className="">
          <h4 className="text-3xl">4.1</h4>
          <p className="text-green-700">★★★★★</p>
          <p>3.07L reviews</p>
        </div>
        <div className="w-[70%] flex flex-col">
          <div className="w-full flex justify-between items-center">
            5
            <div className="h-[10px] w-[90%] rounded-full overflow-hidden bg-slate-300">
              <div className="bg-green-500 w-2/3 h-full rounded-full"></div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            4
            <div className="h-[10px] w-[90%] rounded-full overflow-hidden bg-slate-300">
              <div className="bg-green-500 w-3/5 h-full rounded-full"></div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            3
            <div className="h-[10px] w-[90%] rounded-full overflow-hidden bg-slate-300">
              <div className="bg-green-500 w-1/2 h-full rounded-full"></div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            2
            <div className="h-[10px] w-[90%] rounded-full overflow-hidden bg-slate-300">
              <div className="bg-green-500 w-1/6 h-full rounded-full"></div>
            </div>
          </div>

          <div className="w-full flex justify-between items-center">
            1
            <div className="h-[10px] w-[90%] rounded-full overflow-hidden bg-slate-300">
              <div className="bg-green-500 w-1/2 h-full rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {reviews.map((review, index) => (
          <div>
            <div className="flex">
              <span>{review.username}</span>
            </div>
            <div className="pl-4">
              <span className="text-green-700">{renderStars(review.rating)}</span>
              {review.date}
            </div>
            <div className="pl-4">
              <p className="text-sm">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingAndReviews;
