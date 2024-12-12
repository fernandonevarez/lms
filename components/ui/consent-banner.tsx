/*

TODO:
  - update google analytics functions to be called to update when the user accepts, deny, or creates a custom acceptance of cookies

*/

'use client';

import { useState, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useCookies } from '@/hooks/use-cookies';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogBody,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { X } from 'lucide-react';

const formSchema = z.object({
  necessary_cookies: z.boolean(),
  analytics_cookies: z.boolean(),
  marketing_cookies: z.boolean(),
});

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { updateCookies } = useCookies();

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookieConsent');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  // useEffect(() => {
  //   window.gtag('consent', 'default', {
  //     ad_storage: 'denied',
  //     ad_user_data: 'denied',
  //     ad_personalization: 'denied',
  //     analytics_storage: 'denied',
  //   });
  // }, [localStorage.getItem('cookieConsent')]);

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    updateCookies({
      necessary_cookies: true,
      updated_analytics_cookies: true,
      updated_marketing_cookies: true,
    });
    // window.gtag('consent', 'update', {
    //   ad_storage: 'granted',
    //   ad_user_data: 'granted',
    //   ad_personalization: 'granted',
    // });
    setIsVisible(false);
  };

  const rejectAllCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    updateCookies({
      necessary_cookies: true,
      updated_analytics_cookies: false,
      updated_marketing_cookies: false,
    });
    setIsVisible(false);
  };

  const cookieForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      necessary_cookies: true,
      analytics_cookies: false,
      marketing_cookies: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // localStorage.setItem('cookieConsent', 'true');
    updateCookies({
      necessary_cookies: values.necessary_cookies,
      updated_analytics_cookies: values.analytics_cookies,
      updated_marketing_cookies: values.marketing_cookies,
    });
    // setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className='fixed bottom-4 p-2'>
      <div className='relative bottom-0 max-w-sm bg-white rounded-lg shadow-lg p-6 space-y-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <button
          onClick={() => setIsVisible(false)}
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          aria-label='Close'
        >
          <X size={20} />
        </button>
        <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>
          Cookie Consent
        </h2>
        <p className='text-sm text-gray-600 dark:text-gray-300'>
          Codevera uses cookies to enhance user experience, analyze site
          performance, and improve content. By clicking &quot;Accept All
          Cookies&quot;, you agree to our use of cookies.
        </p>
        <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 text-sm'>
          <Button
            variant={'action'}
            onClick={acceptAllCookies}
            className='w-full sm:w-auto'
          >
            Accept All Cookies
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant='outline'>Manage Cookies</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>About cookies on this site</AlertDialogTitle>
                <AlertDialogDescription className='flex flex-col'>
                  Codevera uses cookies to enhance user experience, analyze site
                  performance, and improve content. You can manage your cookie
                  preferences below.
                </AlertDialogDescription>
                <div className='flex gap-x-2 pt-6'>
                  <AlertDialogAction onClick={() => acceptAllCookies()}>
                    Accept All Cookies
                  </AlertDialogAction>
                  <AlertDialogCancel onClick={() => rejectAllCookies()}>
                    Deny All
                  </AlertDialogCancel>
                </div>
              </AlertDialogHeader>
              <AlertDialogBody>
                <Form {...cookieForm}>
                  <form
                    onSubmit={cookieForm.handleSubmit(onSubmit)}
                    className='space-y-8 my-4'
                  >
                    <FormField
                      control={cookieForm.control}
                      name='necessary_cookies'
                      render={({ field }) => (
                        <FormItem className='flex gap-x-4'>
                          <FormControl className=''>
                            <Switch checked={field.value} aria-readonly />
                          </FormControl>
                          <div className='flex flex-col gap-y-2'>
                            <FormLabel className='w-full'>
                              Necessary Cookies
                            </FormLabel>
                            <FormDescription className=''>
                              Some cookies are required to provide core
                              functionality. The website won&apos;t function
                              properly without these cookies and they are
                              enabled by default and cannot be disabled.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={cookieForm.control}
                      name='analytics_cookies'
                      render={({ field }) => (
                        <FormItem className='flex gap-x-4'>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onClick={() => {
                                cookieForm.setValue(
                                  'analytics_cookies',
                                  !field.value
                                );
                              }}
                            />
                          </FormControl>
                          <div className='flex flex-col gap-y-2'>
                            <FormLabel>Analytics Cookies</FormLabel>
                            <FormDescription className='space-y-2'>
                              Analytical cookies help us improve our website by
                              collecting and reporting information on its usage.
                              We use Google Analytics to track user activity.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={cookieForm.control}
                      name='marketing_cookies'
                      render={({ field }) => (
                        <FormItem className='flex gap-x-4'>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onClick={() => {
                                cookieForm.setValue(
                                  'marketing_cookies',
                                  !field.value
                                );
                              }}
                            />
                          </FormControl>
                          <div className='flex flex-col gap-y-2'>
                            <FormLabel>Marketing Cookies</FormLabel>
                            <FormDescription className='space-y-2'>
                              Marketing cookies are used to track visitors
                              across websites. The intention is to display ads
                              that are relevant and engaging for the individual
                              user.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <AlertDialogAction type='submit'>
                      Save settings
                    </AlertDialogAction>
                  </form>
                </Form>
              </AlertDialogBody>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export { ConsentBanner };
