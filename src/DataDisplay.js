import React from 'react';
import './App.css';
import { Container, Grid, Header, List } from 'semantic-ui-react';
import SlideDataSource from './data.json';

class DisplayTheData extends React.Component {

  render() {
    return(
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header>Data List</Header>
                <List>
                  {SlideDataSource.map(el => {
                    return (
                      <List.Item key={el.id}>
                        <List.Content>
                          {el.slideTitle} {el.slideContent}
                        </List.Content>
                        <List.Content>{el.slideCTA}</List.Content>
                      </List.Item>
                    );
                  })}
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

export default DisplayTheData;
