import { FC } from 'react';

import { Button, Center, Container, Flex, Stack, Text } from '@mantine/core';

import { CTAForm } from '../CTAForm/CTAForm';
import heroClasses from './Hero.module.css';

export const Hero: FC = () => (
    <Container size="2xl" className={heroClasses['hero-wrapper']}>
        <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 'lg', lg: 0 }}>
            <div className={heroClasses['section-group']}>
                <Stack ml={{ lg: 'xl' }}>
                    <Flex
                        w="min"
                        gap="md"
                        align={{ lg: 'center' }}
                        direction={{ base: 'column-reverse', lg: 'row' }}
                    >
                        <div className={heroClasses['header-indicator']} />
                        <Text fw={500} fz={{ base: 'md', sm: 'xl' }}>
                            Melbourne&apos;s best cleaning service
                        </Text>
                    </Flex>
                    <Text
                        lh="xs"
                        fw={600}
                        maw={{ base: 768, lg: 'unset' }}
                        fz={{ base: 'xl', xs: 32, sm: 48, lg: 56 }}
                    >
                        Reliable solutions for a Sparkling Home and more time for you
                    </Text>
                    <Flex ml={{ lg: 32 }}>
                        <Text
                            fw={600}
                            lh={1}
                            fz={{ base: 'xl', lg: 56 }}
                            display={{ base: 'none', lg: 'block' }}
                        >
                            &quot;
                        </Text>
                        <Text
                            lh="xs"
                            fw={400}
                            fz={{ sm: 'lg', lg: 'xl' }}
                            ml={{ lg: 32 }}
                            c="dimmed"
                        >
                            Unburden your schedule and leave your living spaces with us &ndash; From
                            thorough home cleanings to specialized property care, we offer the gift
                            of time and a sparkling, stress-free home.
                        </Text>
                    </Flex>
                    <Button color="teal" display={{ lg: 'none' }} w="min-content">
                        Schedule now!
                    </Button>
                </Stack>
            </div>
            <div className={heroClasses['section-group']}>
                <Center>
                    <CTAForm />
                </Center>
            </div>
        </Flex>
    </Container>
);
