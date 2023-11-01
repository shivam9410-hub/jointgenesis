import React from "react";
import TestimonalCard from "./testimonal";
import "./testimonal.css";
const TestimonialPage = () => {
  const testimonials = [
    {
      Name: "MARK B.NEW YORK ,USA",
      verified: "Verified Purchase",
      imgsrc:"https://images.unsplash.com/flagged/photo-1577973371814-78b04a45ce5e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070",
      description:
        "Before EndoPeak, I thought my top performance days were gone. As a retired officer, staying fit was crucial. But age caught up and ED struc. Thankfully, I found Endopeak in the nick of time. Now, I feel like I'm back in my prime! My partner and I enjoy a satisfying love life, just like in our younger years.",
    },
    {
      Name: "THOMAS J.ARIZONA, USA",
      verified: "Verified Purchase",
      imgsrc:"https://www.ndfya.com/wp-content/uploads/fimgs/711-testimonial-student.jpg",
      description:
        "I work a demanding job in the financial sector, which means it can take me a awhile to unwind before I'm able to perform in the sack. But with EndoPeak that time is down to basically zero. Since I started taking one capsule every day with my morning coffee, I've never had a problem achieving full fledged erections in seconds. I can now keep up with my young wife in the bedroom.Needless to say, this has made both of us very happy.",
    },

    {
      Name: "CHAD B .TEXAS, USA",
      verified: "Verified Purchase",
      imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtu3ZNkNA6PR9zDRUzZlOy5gmw_tHZPYBC5A&usqp=CAU",
      description:
        "I was always self-conscious about performance in bed.Fear held me back. Then I found EndoPeak. It transformed Everything. Improved stamina, reliable erections,otherworldly confidence- you nameit.EndoPeak changed my love life forever!",
    },
  ];
  return (
    <div className="testimonalpage">
      {testimonials.map((obj) => {
        return (
          <TestimonalCard
            name={obj.Name}
            verified={obj.verified}
            description={obj.description}
            imgsrc= {obj.imgsrc}
          />
        );
      })}
    </div>
  );
};

export default TestimonialPage;
