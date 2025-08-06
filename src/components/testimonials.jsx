import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="blog">
      <div className="container">
        <div className="section-title text-center">
          <h2>Scenius Insights</h2>
          <p>Ideas, strategies, and stories shaping the future of African business.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-md-4 blog-card">
                  <div className="blog-thumbnail">
                    <img src={d.img} alt={d.title} />
                  </div>
                  <div className="blog-content">
                    <h4>{d.title}</h4>
                    <p>{d.excerpt}</p>
                    <a href={d.link} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                      Read More →
                    </a>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
