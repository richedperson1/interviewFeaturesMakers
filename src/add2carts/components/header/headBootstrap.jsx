import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function FormExample() {
    return (
        <Navbar className="bg-black justify-content-between">

            <Form className='flex justify-between w-full'>
                <Row className='flex w-full justify-between mx-5 items-center py-3'>
                    <Col xs="auto">
                        <h1 className='text-white text-2xl font-extrabold'>Shopping cart</h1>
                    </Col>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                        />
                    </Col>

                    <Col xs="auto">
                        <Button variant="primary">Cart 🛒</Button>{' '}

                    </Col>
                </Row>
            </Form>
        </Navbar>
    );
}

export default FormExample;