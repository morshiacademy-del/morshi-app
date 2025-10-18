// Libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { ViewResponsive } from '@/adapters/components';
import { ArrowRightIcon, AvatarIcon, LogOutIcon, UserIcon } from '@/adapters/assets/icons';

// Constants - Utilities
import { palette } from '@/adapters/constants';
import { fontFamilyApp } from '@/adapters/utilities';

export const ProfileScreen = () => {
    const navigation = useNavigation();

    return (
        <ViewResponsive>
            <View style={styles.container}>
                <Text style={styles.title}>Mi perfil</Text>
                <View style={styles.contentInfo}>
                    <AvatarIcon width={60} height={60} />
                    <View style={styles.contentDescription}>
                        <Text style={styles.textNameUser} numberOfLines={1}>
                            Edward Vega
                        </Text>
                        <Text style={styles.textMail}>ejemplo@correo.com</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles._contentItemCard}
                        onPress={() => navigation.navigate('HomeStack', { screen: 'DetailsProfileScreen' })}
                    >
                        <View style={styles._contentIconItemCard}>
                            <UserIcon fill={palette.blue} height={18} width={18} />
                        </View>
                        <View style={styles._contentInfoItemCard}>
                            <Text style={styles._textItemCard}>Datos de perfil</Text>
                            <Text style={styles._textDescriptionItemCard}>
                                Edición y actualización de datos personales
                            </Text>
                        </View>
                        <ArrowRightIcon fill={palette.black_2} height={16} width={16} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles._contentItemCard}
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'AuthStack', params: { screen: 'WelcomeScreen' } }],
                            })
                        }
                    >
                        <View style={styles._contentIconItemCard}>
                            <LogOutIcon stroke={palette.blue} />
                        </View>
                        <Text style={styles._textItemCard}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ViewResponsive>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        gap: 30,
    },
    title: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
    },
    contentInfo: {
        backgroundColor: palette.black_2,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 14,
        paddingHorizontal: 14,
        paddingVertical: 20,
    },
    contentDescription: {
        justifyContent: 'center',
        gap: 8,
        flexShrink: 1,
    },
    textNameUser: {
        color: palette.white,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
    },
    textMail: {
        color: palette.white,
        fontFamily: fontFamilyApp[400],
        fontSize: 14,
    },
    card: {
        backgroundColor: palette.white,
        borderRadius: 8,
        gap: 24,
        paddingHorizontal: 16,
        paddingVertical: 20,

        shadowColor: palette.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    _contentItemCard: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 14,
    },
    _contentIconItemCard: {
        alignItems: 'center',
        backgroundColor: palette.gray_4,
        borderRadius: 25,
        height: 40,
        justifyContent: 'center',
        width: 40,
    },
    _contentInfoItemCard: {
        gap: 4,
        flexShrink: 1,
    },
    _textItemCard: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 14,
    },
    _textDescriptionItemCard: {
        color: palette.gray_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 12,
    },
});
