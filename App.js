import React, { Fragment, Component } from 'react';
import { StyleSheet, View } from 'react-native';

import FeedScreen from './screens/FeedScreen';
import ContentScreen from './screens/ContentScreen';

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      url: 'https://blogs.windows.com/'
    }
  }

  getUrlFromItem = (data) => {
    console.log(data);
    this.setState( { url: data});
  }

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.parent}>

            <FeedScreen getUrlCallback={this.getUrlFromItem} />

            <Fragment>
              <ContentScreen url={this.state.url} />
            </Fragment>

          </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }

});