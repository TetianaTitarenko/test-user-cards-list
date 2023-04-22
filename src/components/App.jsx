import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../page/Home/home'));
const TweetsPage = lazy(() => import('../page/Tweets/tweets'));




export const App = () => {
  return (
          <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='tweets' element={<TweetsPage/>} />
        </Route>
      </Routes>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >

    //   <div>Wellcome/Home Page</div>
    //   <div>Tweets Page</div>
    // </div>
  );
};
