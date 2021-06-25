import React, { useState } from 'react';
import { Card, Button, Modal } from "react-bootstrap"

const NewsDetails = ({ news }) => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="mt-5 col-md-4">
                <Card style={{ width: '18rem' }} className="rounded">
                    <Card.Img variant="top" src={news.picture} />
                    <Card.Body>
                        <Card.Title>{news.headline}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{news.time}</Card.Subtitle>
                        <Card.Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam voluptatem rem facere dolor ea fugit deserunt velit.
                        </Card.Text>
                        <Button variant="success" onClick={() => setShow(true)}>
                            Read more
                        </Button>
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-100w"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    {news.headline}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                <p >
                                    Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                    ipsam atque a dolores quisquam quisquam adipisci possimus
                                    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                    deleniti rem!
                                    ipsam atque a dolores quisquam quisquam adipisci possimus
                                    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                    deleniti rem!accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                    deleniti rem!
                            </p>
                            </Modal.Body>
                        </Modal>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default NewsDetails;