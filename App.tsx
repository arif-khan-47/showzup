import * as React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
import { store } from './src/Redux/store'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"


function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'black' }}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default App





