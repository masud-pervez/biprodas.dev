import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { appConfig } from '@/config';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex items-center justify-between p-3">
        <small>
          <Link href="/">Biprodas Roy</Link>
          <span className="ms-1">&copy; {dayjs().format('YYYY')} all right reserved</span>
        </small>
        <small>
          <span className="mr-1">Developed with ♥ by</span>
          <Link href={appConfig.links.linkedIn} target="_blank" rel="noopener noreferrer">
            biprodas.ry
          </Link>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
