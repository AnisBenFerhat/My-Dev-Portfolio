'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BiCode } from 'react-icons/bi';
import { BsFillSendFill } from 'react-icons/bs';
import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { useToast } from '@/components/ui/toast/UseToast';

// Define form schema
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});

// Define form data types
type FormData = {
  email: string;
  message: string;
};

const Contact = () => {
  // Initialize useForm hook
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: '',
    },
  });

  // Initialize useToast hook
  const { toast } = useToast();

  // Define state variables
  const [isSending, setIsSending] = useState(false);
  const [sentSuccessfully, setSentSuccessfully] = useState(false);

  // Define onSubmit function
  const onSubmit = async (data: FormData) => {
    setIsSending(true);
    try {
      // Simulate sending data to API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      form.reset();

      // Set success message
      setSentSuccessfully(true);

      // Display a toast with the success message
      toast({
        title: 'Thank you!',
        description: "Your message has been sent successfully. I'll get back to you shortly.",
      });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id='contact' className='scroll-mt-28 pb-12 py-6 xl:py-24 bg-primary-50/50'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          <BiCode className='inline-block text-4xl mr-2' /> Contact Me
        </h2>
        <p className='text-center mb-16 max-w-[500px] mx-auto'>
          Interested in working together? Drop me a message, and let's embark on an exciting journey!
        </p>
        <div className='max-w-xl xl:max-w-2xl mx-auto'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-foreground-70/80'>Your email</FormLabel>
                    <FormControl>
                      <Input placeholder='youremail@email.com' className='p-4' type='email' {...field} />
                    </FormControl>
                    <FormMessage className='text-red-500/70 text-sm  p-2' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-foreground-70/80'>What can I do for you?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Enter your message here...'
                        {...field}
                        className='w-full p-4 border rounded-md focus:outline-none focus:border-primary resize-y h-44'
                      />
                    </FormControl>
                    <FormMessage className='text-red-500/70 text-sm p-2' />
                  </FormItem>
                )}
              />
              <Button type='submit' className='flex items-center justify-left gap-x-2' disabled={isSending}>
                <BsFillSendFill />
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
