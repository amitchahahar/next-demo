import Image from 'next/image';
import blogList from '../../utils/blogData.json';
import Link from 'next/link';

function Blogs() {
	// const [color, setColor] = useState('transparent');
	const blogListElement = () => {
		if (!blogList) {
			return <div>No Blogs available</div>;
		}
		if (blogList?.length === 0) {
			return <div>No Blogs available</div>;
		}
		const list = blogList.map((blog, index) => {
			return (
				<div
					key={blog?.Slug + '-' + index}
					role='listitem'
					className='w-dyn-item'
				>
					<Link
						href={`/blog/${blog?.Slug}`}
						className='collection-item-link w-inline-block'
					>
						<Image
							loading='lazy'
							src={blog?.ThumbnailImage}
							width={500}
							height={500}
							alt=''
							className='collection-item-image'
						/>
						<div className='collection-item-date'>
							{blog?.CreatedOn}
						</div>
						<h1 className='collection-item-title'>
							{blog?.Name}
						</h1>
						<p className='collection-item-summary'>
							{blog?.PostSummary}
						</p>
					</Link>
				</div>
			);
		});
		return list;
	};

	return (
		<div className='body-smartspyai-home'>
			<section className='smartspyai-blog'>
				<div className='w-layout-blockcontainer webflow-container w-container'>
					<div
						data-w-id='53056b52-8a46-65d2-e853-fd5c2cbceff3'
						className='smartspyai-blog-content'
					>
						<div className='text-center'>
							<h2 className='smartspyai-blog-heading'>
								Blog
							</h2>
							<div className='smartspyai-text-paragraph'>
								SmartSpyAi latest news, product
								updates, announcements, and more
							</div>
						</div>
						<div className='collection-list-wrapper w-dyn-list mt-10'>
							<div
								role='list'
								className='collection-list w-dyn-items'
							>
								{blogListElement()}
							</div>
							{/* <div className="w-dyn-empty">
        <div>No items found.</div>
      </div> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Blogs;
