import React, { Component } from "react";
import SearchBar from "./common/searchBar";
import { connect } from "react-redux";
import TracksDeck from "./tracksDeck";
import { getTracksByName, loadTracks, searchTracks } from "../store/tracks";

class Tracks extends Component {
  componentDidMount() {
    this.props.loadTracks();
  }
  handleSearch = text => {
    this.props.searchTracks(text);
  };

  render() {
    const { tracks } = this.props;

    return (
      <React.Fragment>
        <h1>Top Tracks</h1>
        <div>
          <SearchBar
            name="searchBar"
            label="Search for track or album"
            onChange={this.handleSearch}
          />
        </div>
        <div>
          <TracksDeck tracks={tracks} />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  tracks: getTracksByName(state),
});

const mapDispatchToProps = dispatch => ({
  loadTracks: () => dispatch(loadTracks()),
  searchTracks: searchText => dispatch(searchTracks(searchText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
