import React from 'react';

import { Container } from 'semantic-ui-react';

import Navbar from '../../components/navbar/Navbar';

class MainContainer extends React.Component {
  render(){
    return (
      <Container>
        <Navbar />
      </Container>
    )
  }
}

export default MainContainer;
