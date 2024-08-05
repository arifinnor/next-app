import Table from './components/table';
import Link from 'next/link';
import { Suspense } from 'react';
import { TwButton } from '@/components';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import type { Params } from '@/types/params';

export default async function Page(params: Params) {
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;
  const perPage = Number(params?.perPage) || 10;

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold leading-7 text-gray-900">Users</h1>

        <Link href="/user/create">
          <TwButton
            type="submit"
            title="Add User"
            variant="success"
            icon={<PlusCircleIcon className="h-5 w-5" aria-hidden="true" />}
          />
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
          <Table query={query} page={currentPage} perPage={perPage}  />
        </Suspense>
      </div>
    </>
  );
}
