import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { getSession } from '~/app/lib/data';

import { SignInButton } from './components/SignInButton';

export default async function SignInPage() {
  const providers = await getProviders();
  const session = await getSession();

  if (session) {
    return redirect('/');
  }

  return (
    <>
      {Object.values(providers || {}).map((provider) => (
        <div key={provider.name}>
          <SignInButton provider={provider} />
        </div>
      ))}
    </>
  );
}
