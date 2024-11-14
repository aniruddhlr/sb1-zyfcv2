import React from 'react';

interface Content {
  id: string;
  image: string;
  likes: string;
  comments: string;
}

interface ContentGalleryProps {
  contents: Content[];
}

export default function ContentGallery({ contents }: ContentGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {contents.map((content) => (
        <div key={content.id} className="relative group">
          <img
            src={content.image}
            alt="Content preview"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
            <div className="hidden group-hover:flex space-x-4 text-white">
              <span>❤️ {content.likes}</span>
              <span>💬 {content.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}