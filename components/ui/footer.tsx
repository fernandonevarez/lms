import Image from 'next/image';
import Link from 'next/link';

import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconPaperclip,
} from '@tabler/icons-react';

const Footer = () => {
  const socialLinks = {
    discord: 'https://discord.gg/codedevils',
    sundevilsync: 'https://asu.campuslabs.com/engage/organization/codedevils/',
    linkedin: 'https://www.linkedin.com/company/codedevils-official/',
    instagram: 'https://www.instagram.com/codedevils.asu/',
    github: 'https://github.com/ASU-CodeDevils/',
  };
  const { discord, sundevilsync, linkedin, instagram, github } = socialLinks;
  return (
    <footer className='w-full bg-gray mt-auto'>
      <div className='mx-auto max-w-screen-2xl py-2'>
        {/* Just for boiler plate so i can see the footer o the page */}
        <div className='h-[150px] text-center flex items-center justify-center'>
          footer content goes here
        </div>
      </div>
    </footer>
  );
};

export default Footer;
