import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Album from './Album';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => this.setState({ albums: response.data }));
    }
    renderAlbums() {
        return this.state.albums.map((album) => 
        <Album album={album} key={album.title} />
        );
    }
      render() { 
          console.log('HERE ARE YOUR ALBUMS', this.state.albums);
          return (
              <View>
              
            {this.renderAlbums()}
        </View>
        );
}
}

export default AlbumList;
