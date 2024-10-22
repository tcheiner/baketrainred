import React, { useState, useEffect, useRef } from 'react';
import { Text, View,  Button} from 'tamagui';
import {StyleSheet, Animated} from 'react-native';

export default function MeditateScreen() {
//     return (
//         <View flex={1} alignItems="center" justifyContent="center" bg="$background">
//             <Text fontSize={20} color="$blue10">
//                 Meditate
//             </Text>
//         </View>
//     );
// };
    const [breathCount, setBreathCount] = useState(0);
    const [isBreathing, setIsBreathing] = useState(false);
    const breathAnimation = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        if (isBreathing) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(breathAnimation, {
                        toValue: 1.5,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                    Animated.timing(breathAnimation, {
                        toValue: 1,
                        duration: 4000,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        } else {
            breathAnimation.stopAnimation();
        }
    }, [isBreathing, breathAnimation]);

    const startBreathing = () => {
        setIsBreathing(true);
    };

    const stopBreathing = () => {
        setIsBreathing(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wim Hof Breathing Exercise</Text>
            <Text style={styles.counter}>Breaths: {breathCount}</Text>
            <Button onPress={isBreathing ? stopBreathing : startBreathing} >{isBreathing ? "Stop" : "Start"}</Button>
                <Text style={styles.instructions}>
                Inhale deeply through the nose or mouth, then exhale unforced. Repeat for 30 breaths.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    counter: {
        fontSize: 20,
        marginBottom: 20,
    },
    instructions: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
});