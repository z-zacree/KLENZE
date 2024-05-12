'use client';

import { FC, useContext, useMemo } from 'react';

import { Box, CloseButton, Divider, Grid, Group, Modal, Text } from '@mantine/core';

import { PricingContext } from '../../context/PricingContext';

type ComponentProps = {
    opened: boolean;
    close: () => void;
};

export const CostBreakdown: FC<ComponentProps> = ({ opened, close }) => {
    const { total, costBreakdown } = useContext(PricingContext);

    const { subtotal, gst } = useMemo(() => {
        let subtotal = (Math.floor(total * 90) / 100).toFixed(2);
        let gst = (Math.floor(total * 10) / 100).toFixed(2);

        return { subtotal, gst };
    }, [total]);

    const GRID_PADDING_HEIGHT = useMemo(() => '0.25rem', []);

    return (
        <Modal
            size="sm"
            opened={opened}
            onClose={close}
            withCloseButton={false}
            centered
            radius="md"
        >
            <Group mb="lg" justify="space-between">
                <Text fz="h4" fw={600}>
                    Payment summary
                </Text>
                <CloseButton onClick={close} />
            </Group>
            {costBreakdown.map(({ key, ppu, label, value }) => {
                if (value > 0)
                    return (
                        <Grid key={key}>
                            <Grid.Col span={1} py={GRID_PADDING_HEIGHT}>
                                <Text c="dimmed">
                                    {value}
                                    {key != 'bedroomCount' && key != 'bathroomCount' ? 'x' : ''}
                                </Text>
                            </Grid.Col>
                            <Grid.Col span="auto" py={GRID_PADDING_HEIGHT}>
                                <Text>{label}</Text>
                            </Grid.Col>

                            <Grid.Col span="content" py={GRID_PADDING_HEIGHT}>
                                <Text>${ppu * value}</Text>
                            </Grid.Col>
                        </Grid>
                    );
            })}
            <Divider my="md" mx={-16} />
            <Group>
                <Text c="dimmed">Subtotal</Text>
                <Box flex={1} />
                <Text fz="h6" fw={600}>
                    ${subtotal}
                </Text>
            </Group>
            <Group>
                <Text c="dimmed">GST</Text>
                <Box flex={1} />
                <Text fz="h6" fw={600}>
                    ${gst}
                </Text>
            </Group>
            <Divider my="md" mx={-16} />
            <Group>
                <Text>Total</Text>
                <Box flex={1} />
                <Text fz="sm" c="dimmed" mr={-10}>
                    AUD
                </Text>
                <Text c="teal" fz="h3" fw={600}>
                    ${total}
                </Text>
            </Group>
        </Modal>
    );
};
