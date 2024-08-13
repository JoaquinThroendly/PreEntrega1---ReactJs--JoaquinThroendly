import React, { useEffect, useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import data from "../components/productos.json";

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        new Promise((resolve) => {
            setTimeout(() => resolve(data), 2000);
        }).then((response) => {
            if (!id) {
                setItems(response);
            } else {
                const filtered = response.filter(i => i.category === id);
                setItems(filtered);
            }
        }).finally(() => setLoading(false));
    }, [id]);

    if (loading) return "wait";

    if (items.length === 0) return <p>No hay productos en esta categoría</p>;

    return (
        <Container className="mt-4 d-flex">
            {items.map(i => (
                <Card key={i.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={i.imageSrc} alt={i.title} />
                    <Card.Body>
                        <Card.Title>{i.title}</Card.Title>
                        <Card.Text>{i.category}</Card.Text>
                        <Card.Text>{i.price}</Card.Text>
                        <Link to={`/item/${i.id}`}>
                            <Button variant="primary">Ver</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};
