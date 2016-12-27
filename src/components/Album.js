import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


class Album extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Image 
                    source={{ uri: this.props.album.image }}
                    style={{ width: 400, height: 400 }}
                    />
                </CardSection>
                <CardSection>
                    <Text>Album: {this.props.album.title}</Text>
                </CardSection>
                <CardSection>
                    <Text>Artist: {this.props.album.artist}</Text>
                </CardSection>
            </Card>
        );
    }
}

export default Album;
