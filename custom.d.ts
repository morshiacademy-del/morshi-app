// GIF
declare module '*.gif' {
    import { type ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}

// SVG
declare module '*.svg' {
    import * as React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

// IMAGES
declare module '*.png' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}
declare module '*.jpg' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}
declare module '*.jpeg' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}
