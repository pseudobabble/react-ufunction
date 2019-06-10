import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import drfProvider from 'ra-data-drf';
import { GoalList } from './components/lists/goals';
import { ActionList } from './components/lists/actions';
import { IntentionList } from './components/lists/intentions';
import { MeasurementList } from './components/lists/measurements';
import { ReviewList } from './components/lists/reviews';
import { RewardList } from './components/lists/rewards';
import './App.css';
import { GoalCreate } from "./components/create_forms/goal_create";

const dataProvider = drfProvider('http://127.0.0.1:8000');

const App = () => (
      <Admin dataProvider={dataProvider}>
            <Resource name="goals" list={GoalList} create={GoalCreate} edit={EditGuesser}/>
            <Resource name="actions" list={ActionList} edit={EditGuesser} />
            <Resource name="measurements" list={IntentionList} edit={EditGuesser} />
            <Resource name="intentions" list={MeasurementList} edit={EditGuesser} />
            <Resource name="reviews" list={ReviewList} edit={EditGuesser} />
            <Resource name="rewards" list={RewardList} edit={EditGuesser} />
        </Admin>
  );

export default App;
