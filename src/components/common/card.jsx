import React from "react";

const Card = ({ title, image, imageUrl, text, labels, url, textBody }) => {
  return (
    <div className="col mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {text && <p className="card-text">{text}</p>}
          {labels &&
            labels.map(label => (
              <span className="badge badge-pill badge-dark">{label}</span>
            ))}
          <div className="m-2">
            <a href={url} className="href">
              {textBody}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
