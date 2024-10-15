import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './business.css'
import Footer from './Footer';
import TopNav from '../components/TopNav';

export default function Business() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
                    params: {
                        token: '6b27b054e31d90827b9ed5785dfe50c9',
                        lang: 'en',
                        max: 12,
                        topic: 'business'
                    },
                });
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching the news:', error);
            }
        };
        fetchNews();
    }, []);

    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            />
            <TopNav />
            <h2 className='text-center' style={{ borderBottom: "1px solid black" }}>Latest<span className=' bg-danger' style={{ color: "white" }}>News</span></h2>
            <div className='content ' style={{ borderBottom: "1px solid black" }}>
                <CardGroup style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                    {news.length > 0 ? (
                        news.map((article, index) => (
                            <Card data-aos="zoom-out-up" key={index} style={{ margin: '10px', flex: '1 0 21%' }}>
                                <Card.Img variant="top" src={article.image || '/img/politics.jpg'} alt={article.title} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>{article.description}</Card.Text>

                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Published on: {new Date(article.publishedAt).toLocaleDateString()}</small>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Read More
                                    </button>
                                </Card.Footer>
                            </Card>
                        ))
                    ) : (
                        <p>Loading latest news...</p>
                    )}
                </CardGroup>
            </div>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}
