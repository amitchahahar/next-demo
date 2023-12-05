import Image from 'next/image';
import blogList from '../../../utils/blogData.json';
import Head from 'next/head';

function Blog({ params }: any) {
	const { slug } = params;

	const blogObj = blogList.find((item, index) => {
		return item.Slug == slug;
	});
	return (
		<div>
			<Head>
				<title>{blogObj?.Slug}</title>
				<meta
					name='description'
					content={blogObj?.PostSummary}
				/>
				{/* Open Graph tags */}
				<meta
					property='og:title'
					content={blogObj?.Slug}
				/>
				<meta
					property='og:description'
					content={blogObj?.PostSummary}
				/>
				<meta
					property='og:image'
					content={blogObj?.MainImage}
				/>
				<meta
					property='og:url'
					content={`https://yourwebsite.com/blog/${slug}`}
				/>
				<meta property='og:type' content='article' />
				{/* Twitter card */}
				<meta
					name='twitter:card'
					content='summary_large_image'
				/>
				<meta
					name='twitter:title'
					content={blogObj?.Slug}
				/>
				<meta
					name='twitter:description'
					content={blogObj?.PostSummary}
				/>
				<meta
					name='twitter:image'
					content={blogObj?.MainImage}
				/>
			</Head>
			<div className='body-smartspyai-home'>
				<section className='smartspyai-blog'>
					<div className='w-layout-blockcontainer webflow-container w-container'>
						<div className='smartspyai-blog-content'>
							<div className='smartspyai-date'>
								{blogObj?.CreatedOn}
							</div>
							<h2 className='smartspyai-blog-heading'>
								{blogObj?.Name}
							</h2>

							<Image
								loading='lazy'
								src={blogObj?.MainImage!}
								alt={blogObj?.Slug!}
								fill
								className='smartspyai-blog-image'
							/>
							<div className='blog-rich-text-block w-richtext'>
								<div
									dangerouslySetInnerHTML={{
										__html: blogObj?.PostBody!,
									}}
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
export default Blog;
