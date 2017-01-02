import React, { Component } from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


class Album extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image 
                        source={{ uri: this.props.album.thumbnail_image }}
                        style={styles.thumbnailStyle}
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.props.album.title}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image 
                    source={{ uri: this.props.album.image }}
                    style={styles.imageStyle}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={() => Linking.openURL(this.props.album.url)}>
                        Buy now
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
       fontSize: 18 
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default Album;
