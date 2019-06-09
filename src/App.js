import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import drfProvider from 'ra-data-drf';
import { GoalList } from './components/lists/goals';
import { ActionList } from './components/lists/actions';
import { IntentionList } from './components/lists/intentions';
import { MeasurementList } from './components/lists/measurements';
import { ReviewList } from './components/lists/reviews';
import { RewardList } from './components/lists/rewards';
import './App.css';

const dataProvider = drfProvider('http://127.0.0.1:8000');

const App = () => (
      <Admin dataProvider={dataProvider}>
            <Resource name="goals" list={GoalList} />
            <Resource name="actions" list={ActionList} />
            <Resource name="measurements" list={IntentionList} />
            <Resource name="intentions" list={MeasurementList} />
            <Resource name="reviews" list={ReviewList} />
            <Resource name="rewards" list={RewardList} />
        </Admin>
  );

export default App;
