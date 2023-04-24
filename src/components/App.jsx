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
  );
};
