import React, { Component } from "react";
import ArtistsDeck from "./artistsDeck";
import { getArtistsByName, loadArtists, searchArtists } from "../store/artists";
import { connect } from "react-redux";
import SearchBar from "./common/searchBar";

class Artists extends Component {
  componentDidMount() {
    this.props.loadArtists();
  }

  handleSearch = text => {
    this.props.searchArtists(text);
  };

  render() {
    const { artists } = this.props;
    return (
      <React.Fragment>
        <h1>Top Artists</h1>
        <div>
          <SearchBar
            name="searchBar"
            label="Search for artists"
            onChange={this.handleSearch}
          />
        </div>
        <div>
          <ArtistsDeck artists={artists} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  artists: getArtistsByName(state),
});

const mapDispatchToProps = dispatch => ({
  loadArtists: () => dispatch(loadArtists()),
  searchArtists: searchText => dispatch(searchArtists(searchText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
