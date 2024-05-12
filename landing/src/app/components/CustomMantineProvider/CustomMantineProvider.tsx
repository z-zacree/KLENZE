'use client';

import { FC, PropsWithChildren } from 'react';

import { Container, createTheme, MantineProvider, rem } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';

const CONTAINER_SIZES: Record<string, string> = {
    '2xs': rem(360),
    xs: rem(540),
    sm: rem(720),
    md: rem(960),
    lg: rem(1140),
    xl: rem(1320),
    '2xl': rem(1560),
};

const theme = createTheme({
    /* Put your mantine theme override here */
    components: {
        Container: Container.extend({
            vars: (_, { size, fluid }) => ({
                root: {
                    '--container-size': fluid
                        ? '100%'
                        : size !== undefined && size in CONTAINER_SIZES
                        ? CONTAINER_SIZES[size]
                        : rem(size),
                },
            }),
        }),
    },
});

export const CustomMantineProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <MantineProvider theme={theme}>
            <NavigationProgress color="teal" />
            {children}
        </MantineProvider>
    );
};
