import React, { useState } from 'react';
import { Text, View,  Button } from 'tamagui';

export default function ChartsScreen() {
    return (
        <View flex={1} alignItems="center" justifyContent="center" bg="$background">
            <Text fontSize={20} color="$blue10">
                Charts
            </Text>
        </View>
    );
};

