import React from 'react';
import { fetchUtils, Admin, Resource, EditGuesser, ListGuesser} from 'react-admin';
import './App.css';
import drfProvider from 'ra-data-drf';

import { GoalList } from './components/lists/goals';
import { ActionList } from './components/lists/actions';
import { IntentionList } from './components/lists/intentions';
import { MeasurementList } from './components/lists/measurements';
import { ReviewList } from './components/lists/reviews';
import { RewardList } from './components/lists/rewards';

import { GoalCreate } from "./components/create_forms/goal_create";
import { ActionCreate } from "./components/create_forms/action_create";
import { IntentionCreate } from "./components/create_forms/intention_create";
import { MeasurementCreate } from "./components/create_forms/measurement_create";
import { ReviewCreate } from "./components/create_forms/review_create";
import { RewardCreate } from "./components/create_forms/reward_create";

import { GoalEdit } from "./components/edit_forms/goal_edit";
import { ActionEdit } from "./components/edit_forms/action_edit";
import { IntentionEdit } from "./components/edit_forms/intention_edit";
import { MeasurementEdit } from "./components/edit_forms/measurement_edit";
import { ReviewEdit } from "./components/edit_forms/review_edit";
import { RewardEdit } from "./components/edit_forms/reward_edit";

const dataProvider = drfProvider('http://127.0.0.1:8000');


const App = () => (
      <Admin dataProvider={dataProvider}>
            <Resource name="goals"
                      list={GoalList}
                      create={GoalCreate}
                      edit={GoalEdit}
            />
            <Resource name="actions"
                      list={ActionList}
                      create={ActionCreate}
                      edit={ActionEdit}
            />
            <Resource name="intentions"
                      list={IntentionList}
                      create={IntentionCreate}
                      edit={IntentionEdit}
            />
            <Resource name="measurements"
                      list={MeasurementList}
                      create={MeasurementCreate}
                      edit={MeasurementEdit}
            />
            <Resource name="reviews"
                      list={ReviewList}
                      create={ReviewCreate}
                      edit={ReviewEdit}
            />
            <Resource name="rewards"
                      list={RewardList}
                      create={RewardCreate}
                      edit={RewardEdit}
            />
        </Admin>
  );

export default App;
