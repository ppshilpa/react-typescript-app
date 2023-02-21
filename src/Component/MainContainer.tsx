import { Component, ReactNode } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { ModalBox } from './ModalBox';
interface stateToPass {
    modelShow: boolean ;
    canvasShow:boolean;
}

export class MainContainer extends Component<{},stateToPass> {
    constructor(props:{}) {
        super(props);
        this.state = {
            modelShow: false,
            canvasShow:false
        }
    }
    handleShow = () => {
        this.setState({ modelShow: true });
    }
    handleClose = () => {
        console.log('called From Child');
        this.setState({ modelShow: false });
    }
    render(): ReactNode {
        return (
            <><ModalBox  show={this.state.modelShow} closeHandle={this.handleClose}/>
                <Button variant="warning" size='lg' onClick={this.handleShow.bind(this)}>
                    Launch vertically centered modal
                </Button>
                <Table striped="columns">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}
