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

import Sidebar from 'react-native-sidebar';
import { default as CustomSideBar } from './src/SideBar/SideBar';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;
const tabletDevice = (aspectRatio > 1.6 ? false : true)

const App: () => React$Node = () => {

  const [widthSidebar, setWidthSidebar] = useState(280);
  const [orientation, setOrientation] = useState(' -initial');
  // const [sideBarOpen, setSideBarOpen] = useState(tabletDevice ? 2: false);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   console.log('tabletDevice 000', tabletDevice)
  //   if(tabletDevice) {
  //     getOrientation();

  //     Dimensions.addEventListener('change', () => {
  //       getOrientation();
  //     });
  //   }
  // });

  const toogleSidebar = () => {
    // _drawer.open()
    if (widthSidebar === 280)
      setWidthSidebar(80)
    else
      setWidthSidebar(280)

    _drawer.leftSidebarWidth = widthSidebar
    _drawer.width = widthSidebar
  }

  // const openSidebar= () => {
  //   // _drawer.open()
  //   if (tabletDevice)
  //     setWidthSidebar(280)
  //   setSideBarOpen(true)
  // }

  // const closeSidebar= () => {
  //   // _drawer.close()
  //   if (tabletDevice)
  //     setWidthSidebar(0)
  //   setSideBarOpen(false)
  // }

  // const getOrientation = () => {
  //   if (_drawer) {
  //     if (Dimensions.get('window').width < Dimensions.get('window').height) {
  //       setOrientation('portrait');
  //       if(sideBarOpen === 2)
  //         closeSidebar()
  //     }
  //     else {
  //       setOrientation('landscape');
  //       if(sideBarOpen)
  //         openSidebar()
  //     }
  //   }
  // }
  console.log('widthSidebar==', widthSidebar)
  return (
    <>
      <Sidebar
        ref={(ref) => _drawer = ref}
        open={'left'}
        // leftThreshold= {0}
        leftSidebarWidth={widthSidebar}
        leftSidebar={
          <CustomSideBar
            minimized={widthSidebar == 280 ? false : true}
            widthSidebar={widthSidebar}
            toogleSidebar={() => toogleSidebar()}
          />
        }
        style={{ flex: 1, backgroundColor: 'transparent' }}>

        <StatusBar barStyle="dark-content" />

        <SafeAreaView style={{ width: Dimensions.get('window').width - widthSidebar, zIndex: 1, flex: 1 }}>
          {/* <HeaderBase>
          <Left>
            <Button transparent onPress={()=> {
              if(widthSidebar == 0) {
                openSidebar()
              }else {
                closeSidebar()
              }
            }}>
              <Icon name={sideBarOpen ? 'ios-expand' : 'arrow-back'} />
            </Button>
          </Left>
          <Body>
            <Title>Header- {orientation}</Title>
          </Body>
          <Right>
          </Right>
        </HeaderBase> */}

          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
              </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                </Text>
              </View>
            </View>
          </ScrollView>
          <Footer>
            <FooterTab>
              <Button>
                <Text style={styles.footerText}>Folder</Text>
              </Button>
              <Button active>
                <Text style={styles.footerText}>...</Text>
              </Button>
            </FooterTab>
          </Footer>
        </SafeAreaView>
      </Sidebar>
    </>
  );
};

const styles = StyleSheet.create({
  footerText: {
    fontSize: 30,
    color: 'white'
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
