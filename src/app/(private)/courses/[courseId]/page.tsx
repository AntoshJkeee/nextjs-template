export default function CoursePage({ params }: { params: { courseId: string } }) {
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
			</div>
		</>
	);
}
