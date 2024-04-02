import { FC } from 'react';

import { Container, Divider, Flex, Group, Text } from '@mantine/core';

export const Testimonial: FC = () => (
    <Container size="xl" py="xl">
        <Divider my="xl" />
        <Group my="lg" justify="center">
            <Text>Company Logo</Text>
        </Group>
        <Text fw={500} fz={{ base: 'xl', lg: 32 }} ta="center">
            Choosing Klenze was a game-changer for our properties. Their attention to detail during
            regular cleanings has kept our space consistently spotless. The changeover cleaning
            service made hosting stress-free, and the deep cleaning transformed our home into a
            rejuvenated haven. Their professionalism and thoroughness exceeded our expectations.
        </Text>
        <Flex direction="column" my="lg" gap={0} align={{ lg: 'center' }}>
            <Text>Name</Text>
            <Text>Title, Company</Text>
        </Flex>
        <Divider my="xl" />
    </Container>
);
