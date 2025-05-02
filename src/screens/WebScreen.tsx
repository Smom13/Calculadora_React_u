import React from 'react';
import { WebView } from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';

type WebScreenRouteProp = RouteProp<{ params: { url: string } }, 'params'>;

export default function WebScreen() {
  const route = useRoute<WebScreenRouteProp>();
  const { url } = route.params;

  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
}