// Libraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { PreviewCourseImg } from '@/adapters/assets/images';
import { PdfIcon, PlayVideoIcon, UploadIcon } from '@/adapters/assets/icons';
import { ButtonBackComponent, ButtonComponent, ViewResponsive } from '@/adapters/components';

// Constants & Utilities
import { fontFamilyApp } from '@/adapters/utilities';
import { palette, stylesShared } from '@/adapters/constants';

export const TopicDetailsScreen = () => {
    const navigation = useNavigation();

    return (
        <ViewResponsive
            background={palette.white}
            header={
                <View style={styles.header}>
                    <ButtonBackComponent onPress={() => navigation.goBack()} />
                    <View style={styles._contentTextHeader}>
                        <Text style={styles._textTitleHeader}>DD/MM/AAAA</Text>
                        <Text style={styles.textShared}>Título de la clase</Text>
                    </View>
                </View>
            }
        >
            <ScrollView contentContainerStyle={styles.contentBody}>
                <View style={styles.contentVideo}>
                    <Image source={PreviewCourseImg} style={styles._video} resizeMode="cover" />
                    <PlayVideoIcon style={styles._icon} />
                </View>
                <View style={styles.contentShared}>
                    <Text style={styles.textShared}>Recursos</Text>
                    <View style={styles.contentCard}>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <View style={styles.contentResources} key={index}>
                                <PdfIcon />
                                <Text style={styles._textTitleResource}>ejemplo-titulo.pdf</Text>
                                <Text style={styles._textDownload}>Descargar</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.contentShared}>
                    <Text style={styles.textShared}>Adjuntar entrega</Text>
                    <View style={styles.contentCard}>
                        <View style={styles._contentDashed}>
                            <UploadIcon stroke={palette.black_2} height={40} width={40} />
                            <Text style={styles._textTitleUpload}>Adjunta aquí tu entrega</Text>
                            <Text style={styles._textDescriptionUpload}>
                                Recuerda que el tamaño máximo de archivo es de 5MB, solo se permite adjuntar un archivo
                                a la vez. Tipos de archivo aceptados: .doc, .pdf, .xlsx, .jpg, .png
                            </Text>
                        </View>
                        <ButtonComponent
                            title="Seleccionar archivo"
                            onPress={() => {}}
                            customStyle={{ button: { height: 40 } }}
                        />
                    </View>
                </View>
            </ScrollView>
        </ViewResponsive>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
        height: 70,
        paddingHorizontal: 24,
        width: '100%',
    },
    _contentTextHeader: {
        flexShrink: 1,
        flex: 1,
    },
    _textTitleHeader: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 14,
    },
    textShared: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
    },
    contentBody: {
        paddingVertical: 30,
        paddingHorizontal: 24,
        gap: 30,
    },
    contentVideo: {
        backgroundColor: palette.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        gap: 12,
        paddingBottom: 20,
        ...stylesShared.shadow,
    },
    _video: {
        borderRadius: 10,
        height: 200,
        width: '100%',
    },
    _icon: {
        marginLeft: 10,
    },
    contentShared: {
        gap: 14,
    },
    contentCard: {
        backgroundColor: palette.white,
        borderRadius: 8,
        gap: 20,
        padding: 20,
        ...stylesShared.shadow,
    },
    _contentDashed: {
        alignItems: 'center',
        borderColor: palette.gray_2,
        borderRadius: 10,
        borderStyle: 'dashed',
        borderWidth: 1,
        gap: 10,
        height: 180,
        justifyContent: 'center',
        padding: 20,
    },
    _textTitleUpload: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 16,
    },
    _textDescriptionUpload: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 8,
        textAlign: 'center',
    },
    contentResources: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
    },
    _textTitleResource: {
        color: palette.black_2,
        flex: 1,
        fontFamily: fontFamilyApp[700],
        fontSize: 12,
    },
    _textDownload: {
        color: palette.blue,
        fontFamily: fontFamilyApp[700],
        fontSize: 12,
        textDecorationLine: 'underline',
    },
});
