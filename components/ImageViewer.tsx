import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import PagerView from 'react-native-pager-view';

type Props = {
    imgSource: string;
    selectedImages?: [string | undefined],
};

export default function ImageViewer({ imgSource, selectedImages }: Props) {
    if (!selectedImages || selectedImages[0] === undefined) {
        return <Image source={imgSource} style={styles.image} />
    } else {
        return (
            <View style={styles.container}>
                <PagerView style={styles.container} initialPage={0}>
                    {selectedImages.map((image, index) => {
                            return (
                                <View style={styles.page} key={index}>
                                    <Image source={image} style={styles.image}/>
                                </View>
                            )
                        }
                    )}
                </PagerView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    container: {
        width: 400,
        height: 500,
    },
    text: {
      fontSize: 18,
      color: "#fff"
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
