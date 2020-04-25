import React, { Component } from 'react';
import {
  Container, Header, Search, Grid, Card, Image, Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Map from '../../components/GoogleMap/GoogleMap';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container style={{ marginTop: '30px' }}>
        <Header as="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus amet voluptas ipsum nihil corrupti eum sapiente est vitae repellat facere voluptatibus, eaque sed illo consequatur ut rerum quisquam harum in.</Header>
        <Search
          fluid
          input={{ fluid: true }}
          size="big"
          placeholder="Поиск"
        />
        <br />
        <Map />
        <Grid style={{ marginTop: '30px' }}>
          <Header as="h1">Фермеры</Header>
          <Grid.Row widths={12}>
            <Grid.Column width={4}>
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="profile">
                    <Icon name="user" />
                    Посмотреть профиль
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="profile">
                    <Icon name="user" />
                    Посмотреть профиль
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="profile">
                    <Icon name="user" />
                    Посмотреть профиль
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to="profile">
                    <Icon name="user" />
                    Посмотреть профиль
                  </Link>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
  <div id="rec184782710" class="r t-rec t-rec_pt_75 t-rec_pb_90" style="padding-top:75px;padding-bottom:90px;background-color:#171717; " data-animationappear="off" data-record-type="464" data-bg-color="#171717">
<!-- T464 -->
<div class="t464"> <div class="t-container t-align_left"> <div class="t464__col t-col t-col_4"> <img src="https://static.tildacdn.com/tild3364-3466-4139-b538-623137346437/11.png" class="t464__logo" imgfield="img" alt="MENU"> <div class="t464__text t-descr t-descr_xxs" field="text" style="">© All Rights Reserved. Tilda Publishing Design Co.<br /></div> </div> <div class="t464__floatbeaker_lr3"></div> <div>	<div class="t464__col t-col t-col_2 t-prefix_4"> <div class="t464__title t-name t-name_xs t464__title_uppercase" field="title" style="color: #525252;">MENU</div> <div class="t464__descr t-descr t-descr_xxs" field="descr" style="color: #ffffff;"><ul> <li> Home page </li> <li>Services</li> <li> Prices </li><li>Contacts</li></ul></div> </div> <div class="t464__col t-col t-col_2"> <div class="t464__title t-name t-name_xs t464__title_uppercase" field="title2" style="color: #525252;">FOLLOW US</div> <div class="t464__descr t-descr t-descr_xxs" field="descr2" style="color: #ffffff;"><ul> <li>Facebook</li> <li>Twitter</li><li> LinkedIn</li></ul></div> </div> </div> </div>
</div>
</div>
</div>
<!--/allrecords-->

}

export default Home;
