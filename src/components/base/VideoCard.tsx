
interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploadDate: string;
  category: string;
  onClick?: () => void;
}

export default function VideoCard({ 
  title, 
  thumbnail, 
  duration, 
  views, 
  uploadDate, 
  category,
  onClick 
}: VideoCardProps) {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-48 object-cover object-top rounded-t-xl group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
        <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{views} views</span>
          <span>{uploadDate}</span>
        </div>
      </div>
    </div>
  );
}
