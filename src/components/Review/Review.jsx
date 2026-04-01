import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Navigation } from "swiper/modules";
import "./Review.css";

const Review = () => {
  const review = [
    {
      id: 1,
      name: "Naveen",
      heading: "Best Jeggings",
      content:
        "I’ve worn so many leggings brands, but Flybirdsreally nailed the comfort and stretch. It doesn’t lose shape even after long hours. I’ve worn so many leggings brands, but Flybirds really nailed the comfort and stretch. It doesn’t lose shape even after long hours.",
      review: 5,
      date: "31/03/2026",
    },
    {
      id: 2,
      name: "Sheik",
      heading: "The fit is absolutely perfect!",
      content:
        "I’ve worn so many leggings brands, but Flybirdsreally nailed the comfort and stretch. It doesn’t lose shape even after long hours. I’ve worn so many leggings brands, but Flybirds really nailed the comfort and stretch. It doesn’t lose shape even after long hours.",
      review: 4,
      date: "26/03/2026",
    },
    {
      id: 3,
      name: "Naveen",
      heading: "Best Jeggings",
      content:
        "I’ve worn so many leggings brands, but Flybirdsreally nailed the comfort and stretch. It doesn’t lose shape even after long hours. I’ve worn so many leggings brands, but Flybirds really nailed the comfort and stretch. It doesn’t lose shape even after long hours.",
      review: 3,
      date: "21/03/2026",
    },
    {
      id: 4,
      name: "Sheik",
      heading: "The fit is absolutely perfect!",
      content:
        "I’ve worn so many leggings brands, but Flybirdsreally nailed the comfort and stretch. It doesn’t lose shape even after long hours. I’ve worn so many leggings brands, but Flybirds really nailed the comfort and stretch. It doesn’t lose shape even after long hours.",
      review: 2,
      date: "12/03/2026",
    },
  ];
  return (
    <div className="review-main">
      <div className="review-header">
        <div className="review-header-left">
          <div className="review-i-tag">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h6>Be the first to write a review</h6>
        </div>
        <div className="review-header-border"></div>
        <div className="review-header-right">
          <button className="form-btn">Write a Review</button>
        </div>
      </div>
      <Splide
        options={{
          perPage: 3,
          gap: "20px",
          arrows: true,
          pagination: false,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
      >
        {review.map((item, index) => (
          <SplideSlide key={index}>
            <div className="review-swiper-item">
              <h4 className="mb-2">{item.heading}</h4>
              <h5 className="mb-3">{item.content}</h5>
              <div className="d-flex align-items-center justify-content-center column-gap-3 mb-3">
                <i className="far fa-user"></i>
                <h5 className="mb-0">{item.name}</h5>
              </div>
              <div className="d-flex align-items-center justify-content-center mb-2">
                {Array(item.review)
                  .fill(0)
                  .map((item, index) => (
                    <i
                      key={index}
                      className="fas fa-star"
                      style={{
                        color: item.review > index ? "#E9047C" : "#F8B700",
                      }}
                    ></i>
                  ))}
              </div>
              <h6>{item.date}</h6>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Review;
