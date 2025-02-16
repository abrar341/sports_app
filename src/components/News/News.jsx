import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

const SingleNews = ({ category, author, date, title, image }) => {
    return (
        <div className="flex items-center space-x-4  text-white p-4 rounded-2xl">
            <img src={image} alt={title} className="w-16 h-16 rounded-full object-cover" />
            <div>
                <p className="text-sm opacity-80">#{category}. {author} - {date}</p>
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
        </div>
    );
};

const News = () => {
    const newsItems = [
        {
            category: 'Cricket',
            author: 'Toni',
            date: '27 July 2024',
            title: 'Ireland Tour of England Test 2024',
            image: 'https://via.placeholder.com/50x50',
        },
        {
            category: 'Golf',
            author: 'Toni',
            date: '20 July 2024',
            title: 'Open Championship Royal Liverpool Golf',
            image: 'https://via.placeholder.com/50x50',
        },
        {
            category: 'Pollar',
            author: '87',
            date: '12 July 2024',
            title: 'Baku 2024 Taekwondo Championships',
            image: 'https://via.placeholder.com/50x50',
        },
    ];

    return (
        <div className="flex space-x-8 p-8 mx-40 rounded-2xl">
            <div className="space-y-4 flex-1">
                <h2 className="text-3xl font-bold text-white">Trending News</h2>
                {newsItems.map((news, index) => (
                    <SingleNews key={index} {...news} />
                ))}
                <button className="bg-blue-600 text-white w-full py-2 rounded-lg mt-4">See All</button>
            </div>
            <div className="flex-1 relative">
                <img src="https://via.placeholder.com/400x300" alt="Trending News" className="rounded-2xl w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 text-white">
                    <p className="opacity-80">Debits - 06 July 2024</p>
                    <h3 className="text-2xl font-bold">DISCOVER THE MEMBER BENEFITS OF USA Support!</h3>
                </div>
            </div>
        </div>
    );
};

export default News;
