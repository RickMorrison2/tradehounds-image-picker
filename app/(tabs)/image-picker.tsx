import { View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker/src/ImagePicker';
import { useState } from 'react';

import Button from "@/components/Button"
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function ImagePickerScreen() {
    const [selectedImages, setSelectedImages] = useState<[string | undefined ]>([undefined]);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            quality: 1,
            allowsMultipleSelection: true
        });

        if (result.cancelled || result.canceled) {
            alert('You did not select any image.');
        } else {
            let existingImages = [...selectedImages.filter((img) => img !== undefined)];
            result.assets.forEach((img) => existingImages.push(img.uri))
            setSelectedImages(existingImages)
        }
    };

    const resetPhotos = () => {
        setSelectedImages([undefined])
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} selectedImages={selectedImages} />
            </View>
            <View style={styles.buttonContainer}>
                <Button label="Select photos" onPress={pickImageAsync} />
                <Button label="Reset photos" onPress={resetPhotos} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1
    },
    buttonContainer: {
      flex: 1 / 3,
        alignItems: 'center',
    },
});
