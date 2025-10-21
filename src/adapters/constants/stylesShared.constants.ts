// Libraries
import { StyleSheet } from 'react-native';

// Constants - Utilities
import { palette } from './colors';

export const HEIGHT_TAB_NAVIGATION = 80;

export const stylesShared = StyleSheet.create({
    shadow: {
        shadowColor: palette.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    contentIcon: {
        alignItems: 'center',
        borderColor: palette.gray_3,
        borderRadius: 8,
        borderWidth: 1,
        height: 30,
        justifyContent: 'center',
        width: 30,
    },
});
