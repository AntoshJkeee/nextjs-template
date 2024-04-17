import Link from 'next/link';
import { ROUTER_PATHS } from '../../../shared/constants/routes';

export default function CoursesPage() {
	const arrCournse = [
		{ id: 1, name: 'Курс 1' },
		{ id: 2, name: 'Курс 2' },
		{ id: 3, name: 'Курс 3' },
	];

	return (
		<>
			<h3 style={{ textAlign: 'center' }}>Динамические роуты</h3>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '0 auto', width: '600px' }}>
				{arrCournse.map((course) => (
					<Link
						style={{ color: 'black', textDecoration: 'none' }}
						key={course.id}
						href={`${ROUTER_PATHS.COURSES}/${course.id}`}
					>
						{course.name}
					</Link>
				))}
			</div>
		</>
	);
}
