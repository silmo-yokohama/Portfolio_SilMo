import { Head } from '@inertiajs/react';
import React from 'react';

const GuestLayout = (props) => {
  const { pageTitle } = props;

  return (
    <div>
      <Head title={pageTitle} />
    </div>
  );
};

export default GuestLayout;
