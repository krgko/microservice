import React from 'react'
import { Panel, Form, FormGroup, Col, FormControl, Button, Well } from 'react-bootstrap'
import { connect } from 'react-redux'
import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
})

const getMessage = async () => {
  const data = await instance.get('http://5bd1420cbded6100135c2ebd.mockapi.io/messages')
  // const data = await instance.get('http://139.5.140.195:9000/')
  return data
}

// import { getMessage } from '../actions'

class Home extends React.Component {
  state = {
    message: ''
  }

  componentWillReceiveProps(nextProps) {
    
  }

  onButtonClick() {
    getMessage()
      .then(data => {
        this.setState({
          message: data.data.message
        })
      })
  }

  render() {
    return (
      <div>
        <Panel bsStyle="primary">
          <Form inline style={{ marginTop: 10, marginBottom: 10 }}>
            {/* <FormGroup controlId="txtSearch">
              <Col sm={5}>
                <FormControl type="text" placeholder="Search" />
              </Col>
            </FormGroup> */}
            <Button bsStyle="primary" id="btnSearch" onClick={this.onButtonClick.bind(this)}>Get Message</Button>
          </Form>
        </Panel>
        <Panel bsStyle="primary">
          <Panel.Body>{ this.state.message ? this.state.message : '' }</Panel.Body>
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = ({ pokemons }) => {
  return {
    pokemons
  }
}

export default connect(mapStateToProps, {  })(Home)