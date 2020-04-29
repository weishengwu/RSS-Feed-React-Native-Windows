import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

class ContentScreen extends Component {

  render() {
    const runFirst = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={ { uri: this.props.url } }
          injectedJavaScript={runFirst}
        />
      </View>
    );
  }
}

export default ContentScreen;