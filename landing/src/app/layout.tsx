import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';

import './globals.css';

import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import { ColorSchemeScript } from '@mantine/core';

import { CustomMantineProvider } from './components';

const notoSans = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Klenze',
    description:
        'Klenze is the cleaning service for Airbnb in Australia. We go above and beyond to ensure your property is clean, safe, and well-maintained. While also offering some of the most competitive rates around.',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
                <link rel="shortcut icon" href="/favicon.svg" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </head>
            <body className={notoSans.className}>
                <CustomMantineProvider>{children}</CustomMantineProvider>
            </body>
        </html>
    );
};

export default RootLayout;
