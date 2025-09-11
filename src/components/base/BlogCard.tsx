
interface BlogCardProps {
  title: string;
  excerpt: string;
  thumbnail: string;
  category: string;
  readTime: string;
  publishDate: string;
  tags: string[];
  slug: string;
  onClick?: () => void;
}

export default function BlogCard({ 
  title, 
  excerpt, 
  thumbnail, 
  category, 
  readTime, 
  publishDate, 
  tags,
  onClick 
}: BlogCardProps) {
  return (
    <article 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-48 object-cover object-top rounded-t-xl group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-700">
          <span>{readTime} read</span>
          <span>{publishDate}</span>
        </div>
      </div>
    </article>
  );
}
