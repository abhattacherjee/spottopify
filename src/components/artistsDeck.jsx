import React from "react";
import Card from "./common/card";

const ArtistsDeck = ({ artists }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4">
      {artists.map(artist => (
        <Card
          key={artist.id}
          image={artist.images[1].url}
          imageUrl={artist.href}
          title={artist.name}
          url={artist.external_urls.spotify}
          labels={artist.genres}
          textBody={`${artist.name} on Spotify`}
        />
      ))}
    </div>
  );
};

export default ArtistsDeck;
