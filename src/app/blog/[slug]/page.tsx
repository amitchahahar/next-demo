import Image from 'next/image';
import blogList from '../../../utils/blogData.json';
import { Metadata } from 'next';

export async function generateMetadata({
	params,
}: any): Promise<Metadata> {
	const { slug } = params;
	console.log(slug);
	const blogObj = blogList.find((item, index) => {
		return item.Slug == slug;
	});
	return {
		title: blogObj?.Slug,
		description: blogObj?.PostSummary,
		authors: [
			{
				name: 'NaorisProtocol Team',
				url: 'https://naorisprotocol.com/',
			},
		],
		openGraph: {
			type: 'article',
			url: `/blog/${slug}`,
			title: blogObj?.Slug,
			description: blogObj?.PostSummary,
			siteName: 'SmartspyAI',
			images: [
				{
					url: blogObj?.MainImage!,
					width: 1200,
					height: 630,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			site: '@smartspyAi',
			title: slug,
			description: blogObj?.PostSummary,
			creator: '@smartspyAi',
			images: {
				url: blogObj?.ThumbnailImage!,
				alt: `Preview image for ${slug}`,
			},
		},
	};
}
function Blog({ params }: any) {
	const { slug } = params;

	const blogObj = blogList.find((item, index) => {
		return item.Slug == slug;
	});
	return (
		<div>
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
