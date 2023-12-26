import Link from 'next/link';
import { FC } from 'react';

import { Container, Divider, Flex, Group, Stack, Text } from '@mantine/core';
import { IconMail, IconPhoneCall } from '@tabler/icons-react';

import { ContactForm } from '../ContactForm/ContactForm';

import contactClasses from './Contact.module.css';

export const Contact: FC = () => (
    <Container id="contact" size="2xl" py="xl" className={contactClasses['contact-wrapper']}>
        <Flex gap="lg" direction={{ base: 'column', lg: 'row' }}>
            <Stack style={{ flex: 1 }} p={{ base: 'md', lg: 0 }}>
                <Text c="teal" fw={700}>
                    Contact us
                </Text>

                <Text fz={32} fw={500}>
                    Get in touch
                </Text>

                <Text c="dimmed">
                    We&apos;d love to hear from you! Contact us or fill up this form for us to get
                    back to you.
                </Text>

                <Flex gap="lg" direction={{ base: 'column', sm: 'row' }}>
                    <Stack gap="xs" style={{ flex: 1 }}>
                        <Group gap="md" align="center">
                            <IconMail color="var(--mantine-color-teal-8)" />
                            <Text fw="bolder">Email</Text>
                        </Group>
                        <Text c="dimmed">Our friendly team is here to help.</Text>
                        <Text
                            c="teal.6"
                            fw={500}
                            component={Link}
                            href="mailto:sales@klenze.com.au"
                            style={{ width: 'min-content' }}
                        >
                            sales@klenze.com.au
                        </Text>
                    </Stack>
                    <Stack gap="xs" style={{ flex: 1 }}>
                        <Group gap="md" align="center">
                            <IconPhoneCall color="var(--mantine-color-teal-8)" />
                            <Text fw="bolder">Phone</Text>
                        </Group>
                        <Text c="dimmed">Mon-Fri from 8am to 6pm.</Text>
                        <Text
                            truncate
                            fw={500}
                            c="teal.6"
                            component={Link}
                            href="tel:+61475226233"
                            style={{ width: 'min-content' }}
                        >
                            04 7522 6233
                        </Text>
                    </Stack>
                </Flex>
            </Stack>
            <Divider display={{ lg: 'none' }} mx="lg" label="Or fill up this form" />
            <Group align="center" justify="center" style={{ flex: 1 }}>
                <ContactForm />
            </Group>
        </Flex>
    </Container>
);
