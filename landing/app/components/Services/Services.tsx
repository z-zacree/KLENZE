'use client';

import Image from 'next/image';
import { FC } from 'react';

import { Badge, Container, Flex, Stack, Text, Title } from '@mantine/core';
import { services } from '@models/Services';
import { IconArrowNarrowRight, IconSquareRoundedCheck } from '@tabler/icons-react';
import Link from 'next/link';

export const Services: FC = () => (
    <Container size="2xl" w="100%">
        <Badge variant="light" color="teal" size="lg">
            Services
        </Badge>

        <Title maw={560} order={2} mt="sm">
            Elevate Your Space with Our Expertise
        </Title>

        <Text maw={560} c="dimmed" mt="sm">
            Discover the range of cleaning services we offer to enhance your living environment and
            simplify your life.
        </Text>

        <Stack gap={48} mt={48}>
            {services.map(({ features, icon, imagePath, href, title, subtitle }, i) => (
                <Flex
                    key={i}
                    gap={{ base: 'md', lg: 'xl' }}
                    justify={{ lg: 'center' }}
                    direction={{ base: 'column', lg: i % 2 ? 'row-reverse' : 'row' }}
                >
                    <Stack gap={0} style={{ flex: 1 }}>
                        <Flex
                            gap={{ base: 'xs', lg: 'md' }}
                            direction={{ base: 'column', lg: 'row' }}
                            align={{ lg: 'center' }}
                        >
                            {icon}
                            <Text fw="bold" fz="xl">
                                {title}
                            </Text>
                        </Flex>
                        <Text c="dimmed">{subtitle}</Text>
                        {features && (
                            <Stack gap="lg" mx={{ base: 'sm', lg: 'xl' }} my="xl">
                                {features.map((feature, fi) => (
                                    <Flex key={fi} gap="md">
                                        <IconSquareRoundedCheck color="var(--mantine-color-teal-5)" />
                                        <Text style={{ flex: 1 }} fw={500}>
                                            {feature}
                                        </Text>
                                    </Flex>
                                ))}
                            </Stack>
                        )}
                        <Link
                            href={href}
                            className="plain-link"
                            style={{ width: 'min-content', color: 'var(--mantine-color-teal-5)' }}
                        >
                            <Flex gap="xs" align="center">
                                <Text truncate lh={1} mb={4} style={{ flex: 1 }}>
                                    Learn more
                                </Text>
                                <IconArrowNarrowRight style={{ top: 4 }} />
                            </Flex>
                        </Link>
                    </Stack>
                    <div style={{ flex: 1 }}>
                        <div
                            style={{
                                position: 'relative',
                                aspectRatio: '16/9',
                                borderRadius: '0.5rem',
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                fill
                                alt="depiction"
                                src={imagePath}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </Flex>
            ))}
        </Stack>
    </Container>
);
