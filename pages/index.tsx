import type { NextPage } from 'next'
import { Provider } from '../src/context'
import { WelcomeScreen } from '../src/screens/welcome-screen'

const Home: NextPage = () => {
  return (
    <Provider>
      <WelcomeScreen/>
    </Provider>

  )
}

export default Home
