import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import { theme } from '../theme';
import './app.css';

export const metadata = {
    title: 'Klenze',
    description:
        'Klenze is the cleaning service for Airbnb in Australia. We go above and beyond to ensure your property is clean, safe, and well-maintained. While also offering some of the most competitive rates around.',
};

export default function RootLayout({ children }: { children: any }) {
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
            <body>
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    );
}
