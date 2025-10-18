// Libraries
import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { type Edges, SafeAreaView } from 'react-native-safe-area-context';

// Constants
import { palette } from '../constants';

interface IProps {
    children: React.ReactNode;
    background?: string;
    edges?: Edges;
    footer?: React.ReactNode;
    header?: React.ReactNode;
    shadowFooter?: boolean;
}

export const ViewResponsive = (props: PropsWithChildren<IProps>) => {
    const {
        children,
        footer = null,
        header = null,
        edges = ['top', 'bottom'],
        background,
        shadowFooter = true,
    } = props;

    return (
        <SafeAreaView edges={edges} style={{ ...styles.contentMain, backgroundColor: background }}>
            {header ? (
                <View style={styles.header}>
                    <StatusBar barStyle={'dark-content'} backgroundColor={palette.white} />
                    {header}
                </View>
            ) : null}

            <View style={styles.contentChildren}>{children}</View>

            {footer ? <View style={[styles.footer, shadowFooter && styles.footerShadow]}>{footer}</View> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentMain: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    header: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    contentChildren: {
        flex: 1,
        width: '100%',
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    footerShadow: {
        shadowColor: palette.black,
        shadowOffset: { width: 0, height: -25 },
        shadowOpacity: 0.05,
        shadowRadius: 16,
        ...Platform.select({
            android: {
                borderColor: palette.white,
                borderTopWidth: 1,
                elevation: 10,
            },
        }),
    },
});
