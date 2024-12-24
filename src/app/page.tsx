import HoverablePaper from '@/components/HoverablePaper';
import Link from 'next/link';
import { ClientGreeting } from './client-greeting';
export default function Home() {
	return (
		<main>
			<div className='flex justify-around w-full bg-gray-100'>
				<HoverablePaper className='h-80'>
					<Link
						href={'/chat'}
						className='text-center w-[30vw] h-[80vh] grid items-center'>
						Chat about Patterns
					</Link>
				</HoverablePaper>
				<HoverablePaper>
					<Link
						href={'/catalog'}
						className='text-center w-[30vw] h-[80vh] grid items-center'>
						Browse Catalog
					</Link>
				</HoverablePaper>
			</div>
			<ClientGreeting />
		</main>
	);
}
