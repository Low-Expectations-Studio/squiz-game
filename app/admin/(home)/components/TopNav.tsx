'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { HiOutlineUser } from 'react-icons/hi';

export function TopNav() {
  const session = useSession();

  return (
    <div className="flex w-full items-center justify-between p-6 pb-0">
      <h1 className="text-3xl font-bold">Admin</h1>

      {session.data?.user && (
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              {session.data.user.image ? (
                <Image
                  src={session.data.user.image}
                  alt="user photo"
                  width={40}
                  height={40}
                  priority
                  title={session.data.user.name || ''}
                />
              ) : (
                <div className="flex h-[40px] w-[40px] items-center justify-center bg-gray-200">
                  <HiOutlineUser className="h-6 w-6 text-gray-600" />
                </div>
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu-compact dropdown-content menu rounded-box menu-sm w-52 bg-gray-100 p-2 shadow"
          >
            <li className="menu-title">Hi {session.data.user.name} !</li>
            <li>
              <button onClick={() => signOut()}>Sign Out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
