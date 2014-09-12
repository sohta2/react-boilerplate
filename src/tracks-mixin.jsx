/** @jsx React.DOM */

var tracks = require('./tracks');

module.exports = {
  componentWillMount() {
    this.tracks = tracks;
    this.setState({ tracks: [] });
  },
  componentDidMount() {
    tracks.on("all", this.setTracks, this);
  },
  componentWillUnmount() {
    tracks.off("all", this.setTracks, this);
  },
  setTracks() {
    this.setState({
      tracks: tracks.map( (track) => { return track.attributes } )
    });
  },
};