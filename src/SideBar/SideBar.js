/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Container,
  Header as HeaderBase,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Footer,
  FooterTab
} from 'native-base';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const routes = [
  { name: 'Home', icon: 'home', title: 'Home' },
  { name: 'Profile', icon: 'user', title: 'Profile' },
  {
    name: 'CreateTournament',
    icon: 'plus-circle',
    title: 'Create Tournament',
  },
  {
    name: 'PlayPaymentHistory',
    icon: 'history',
    title: 'Play Payment History',
  },
  {
    name: 'VenuePaymentHistory',
    icon: 'history',
    title: 'Venue Payment History',
  },
  {
    name: 'CoachingPaymentHistory',
    icon: 'history',
    title: 'Coaching Payment History',
  },
  { name: 'PlayVenues', icon: 'list-ul', title: 'All Venues' },
  {
    name: 'PlayVenues',
    icon: 'list-ul',
    title: 'My Venues',
    user_wise: true,
  },
  { name: 'Coachings', icon: 'list-ul', title: 'All Coachings' },
  {
    name: 'Coachings',
    icon: 'list-ul',
    title: 'My Coachings',
    user_wise: true,
  },
  { name: 'App Creator', icon: 'phone-square', title: 'About Us/Contact Us' },
  { name: 'PrivacyPolicy', icon: 'user-secret', title: 'Privacy Policy' },
  { name: 'TermsConditions', icon: 'list-alt', title: 'Terms & Conditions' },
  { name: 'CancellationRefund', icon: 'inr', title: 'Cancellation/Refund' },
  { name: 'Logout', icon: 'sign-out', title: 'Logout' },
];

const SideBar: () => ReactSideBar = (props) => {
  const [firstState, setFirstState] = useState(true)
  console.log('props==', props)

  return (
    <Container style={{ backgroundColor: 'transparent' }}>
      <HeaderBase>
        <Left>
          <Button transparent onPress={() => {
            props.toogleSidebar()
          }}>
            <Icon name={'arrow-back'} />
          </Button>
        </Left>
        <Body>
          <Title>Inner Header</Title>
        </Body>
        <Right>
        </Right>
      </HeaderBase>

      <ScrollView
        style={{ backgroundColor: 'black' }}
        contentInsetAdjustmentBehavior="automatic" >

        {routes.map((u, i) => {
          return (
            <TouchableOpacity
              key={i}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                backgroundColor: 'transparent',
                flexDirection: 'row',
                paddingLeft: 10,
                paddingTop: 10,
              }}

              onPress={() => props.toogleSidebar() + setFirstState(false)}
            >
              <Icon name='arrow-back' style={{ fontSize: 30, color: 'white', alignSelf: 'center', padding: 5 }} />
              {
                props.minimized || firstState ?
                  <Text style={{ backgroundColor: 'transparent', color: 'white', fontSize: 20 }}>{u.title}</Text>
                  :
                  null
              }
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default SideBar;