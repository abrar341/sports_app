import { useEffect, useState } from 'react';

const SoccerNews = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchNews = async () => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:3000/api/v1/soccer/news/soccerNews?page=${page}&limit=2`);
            const json = await res.json();

            setNews(json.data.data || []); // 👈 this is the array inside json.data.data
            setTotalPages(json.data.totalPages || 1);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [page]);

    return (
        <div className="p-4 text-white max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Soccer News</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {news.map((item) => (
                        <div key={item._id} className="border p-4 rounded shadow mb-4">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">{new Date(item.newsDate).toLocaleDateString()}</p>
                            <p className="mt-2">{item.description}</p>
                            <div className="mt-2 text-blue-600 underline">
                                {item.sources.map((src, i) => (
                                    <a key={i} href={src} target="_blank" rel="noreferrer" className="block">
                                        {src}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <span>
                            Page {page} of {totalPages}
                        </span>
                        <button
                            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default SoccerNews;
