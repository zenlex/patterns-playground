'use client';
import { trpc } from '@/trpc/client';

export function ClientGreeting() {
  const greeting = trpc.hello.useQuery({text:"world"})
  return (
    <div>TRPC Client Health Check:
      <span>
        {greeting.data ? greeting.data.greeting : 'Loading...'}
      </span>
    </div>
  )
}
