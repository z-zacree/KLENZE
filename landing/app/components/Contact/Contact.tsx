import { Container, Flex, Group, Stack, Text } from '@mantine/core';
import { IconMail, IconPhoneCall } from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';

export const Contact: FC = () => (
    <Container size="2xl" py="xl" w="100%">
        <Flex gap="lg" direction={{ base: 'column', lg: 'row' }}>
            <Stack style={{ flex: 1 }}>
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

                <Flex gap="lg" direction={{ base: 'column', lg: 'row' }}>
                    <Stack gap="xs" style={{ flex: 1 }}>
                        <IconMail color="var(--mantine-color-teal-8)" />
                        <Text fw="bolder">Email</Text>
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
                        <IconPhoneCall color="var(--mantine-color-teal-8)" />
                        <Text fw="bolder">Phone</Text>
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
            <Group align="center" justify="center" style={{ flex: 1 }}>
                <ContactForm />
            </Group>
        </Flex>
    </Container>
);
