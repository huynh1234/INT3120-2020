import React, { Component } from 'react'
import { Container, Content, Header, Left, Button, Body, Right, Icon, Title } from 'native-base'
export default class EachCourses extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation} = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={32} />
                    </Button>
                    </Left>
                    <Body>
                        <Title>Chi tiết khóa học</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    
                </Content>
            </Container>
        )
    }
}
