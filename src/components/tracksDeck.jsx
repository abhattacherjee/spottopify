import React from "react";
import Card from "./common/card";

const TracksDeck = ({ tracks }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4">
      {tracks.map(track => {
        return (
          <Card
            key={track.id}
            image={track.album.images[0].url}
            imageUrl={track.href}
            title={track.name}
            url={track.external_urls.spotify}
            // labels={track.genres}
            textBody={`${track.name} on Spotify`}
          />
        );
      })}
    </div>
  );
};

export default TracksDeck;
