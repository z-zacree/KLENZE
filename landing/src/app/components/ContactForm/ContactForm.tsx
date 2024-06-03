'use client';

import { FC, useState } from 'react';

import { Button, Flex, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import contactClasses from '../Contact/Contact.module.css';
import axios, { AxiosError } from 'axios';
import { notifications } from '@mantine/notifications';

export const ContactForm: FC = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        initialValues: {
            name: '',
            phone_number: '',
            email: '',
            message: '',
        },

        validate: {
            name: (val) => val.length < 1,
            phone_number: (val) => val.length < 1,
            email: (val) => val.length < 1,
            message: (val) => val.length < 1,
        },
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();

        form.onSubmit(async (formValues) => {
            setLoading(true);

            try {
                await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`, formValues);

                notifications.show({
                    color: 'teal',
                    title: 'Message sent!',
                    message: "We'll get back to you as soon as possible.",
                });
            } catch (e) {
                notifications.show({
                    color: 'red',
                    title: "Message wasn't delivered.",
                    message: "Oops! Let's try that again after a moment.",
                });
            }

            setLoading(false);
        })();
    };

    return (
        <form className={contactClasses.form} onSubmit={handleSubmit}>
            <Flex gap="md" direction={{ base: 'column', sm: 'row' }}>
                <TextInput
                    name="contact-name"
                    label="Name"
                    description="How should we address you"
                    style={{ flex: 1 }}
                    {...form.getInputProps('name')}
                />
                <TextInput
                    name="contact-number"
                    label="Contact Number"
                    description="Your preferred contact number"
                    style={{ flex: 1 }}
                    {...form.getInputProps('phone_number')}
                />
            </Flex>
            <TextInput
                name="email"
                label="Email"
                description="In case we can't get you on the line, we'll use this instead!"
                placeholder="you@xyz.com"
                {...form.getInputProps('email')}
            />
            <Textarea
                name="message"
                label="Message"
                placeholder="Leave us a message and we'll get to you as soon as we can!"
                autosize
                minRows={3}
                maxRows={5}
                {...form.getInputProps('message')}
            />
            <Button type="submit" color="teal" loading={loading}>
                Send message
            </Button>
        </form>
    );
};
