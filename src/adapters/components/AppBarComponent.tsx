// Libraries
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { AvatarIcon, LogoMorshiIcon } from '../assets/icons';

// Utilities - Constants
import { palette } from '../constants';
import { fontFamilyApp } from '../utilities';

// Interfaces
import { TabNavigationParamList } from '../navigation';

export const AppBarComponent = () => {
    const navigation = useNavigation<NativeStackNavigationProp<TabNavigationParamList>>();

    return (
        <View style={styles.content}>
            <LogoMorshiIcon />
            <TouchableOpacity
                activeOpacity={1}
                style={styles.avatarContainer}
                onPress={() => navigation.navigate('ProfileScreen')}
            >
                <View style={styles.contentInfoUser}>
                    <Text style={styles.titleUser} numberOfLines={1}>
                        Edward Vega
                    </Text>
                    <Text style={styles.textOccupation}>Estudiante</Text>
                </View>
                <AvatarIcon width={30} height={30} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        gap: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
    avatarContainer: {
        alignItems: 'center',
        backgroundColor: palette.blue_3,
        borderRadius: 10,
        flexDirection: 'row',
        flexShrink: 1,
        gap: 12,
        paddingLeft: 20,
        paddingRight: 12,
        paddingVertical: 6,
    },
    contentInfoUser: {
        flexShrink: 1,
    },
    titleUser: {
        color: palette.white,
        flexShrink: 1,
        flexWrap: 'wrap',
        fontFamily: fontFamilyApp[700],
        fontSize: 16,
    },
    textOccupation: {
        color: palette.white,
        fontFamily: fontFamilyApp[400],
        fontSize: 12,
        textAlign: 'right',
    },
});
