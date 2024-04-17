'use client';

import { Button, Text } from '../../../../shared/ui';
import { setCookie } from '../../../../shared/hooks/useCookie';

interface PageProps {
	params: {
		courseId: string;
	};
}

export default function CoursePage({ params }: PageProps) {
	const onClickCourseHandler = () => {
		setCookie('test', 4, { 'max-age': 3600 });
	};

	return (
		<>
			<h3 style={{ textAlign: 'center' }}>Курс № {params.courseId}</h3>
			<div style={{ border: '1px solid black', margin: '0 auto', width: '600px', padding: '10px' }}>
				<span> Курс {params.courseId}</span>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, est. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Dolores, est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
					est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, est. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Dolores, est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
					est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, est.
				</p>
				<Text text="Текст"></Text>
				<Button type="button" text="Купить" onClick={onClickCourseHandler} />
			</div>
		</>
	);
}
