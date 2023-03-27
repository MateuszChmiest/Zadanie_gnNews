import clsx from "clsx";
import React from "react";

const News = ({ articles }: newsPropsType) => {
    let list = false;
	return (
		<div className={clsx("grid grid-cols-2 gap-3 my-6 mx-4",{" grid-cols-none": list})}>
			{articles.map((article) => (
				<div className='flex flex-col justify-between p-4 w-full border-2 rounded-md border-secondary' key={article.title}>
					<p className="text-primary">{article.source.name}</p>
					<div className="flex my-2">
						<h2 className="font-bold cursor-pointer">{article.title}</h2>
						{article.urlToImage && (
							<img className="w-24 h-16 ml-3 border-2 border-primary rounded-xl" src={article.urlToImage} alt='article img' />
						)}
					</div>
                    <p className="my-2">{article.description}</p>
                    <p className="text-backgroundColor">{article.publishedAt.substring(10, 0)}</p>
				</div>
			))}
		</div>
	);
};

interface newsPropsType {
	articles: [
		{
			title: string;
			source: {
				name: string;
			};
			publishedAt: string;
			urlToImage: string;
			description: string;
			url: string;
			author: string;
		}
	];
}

export default News;
