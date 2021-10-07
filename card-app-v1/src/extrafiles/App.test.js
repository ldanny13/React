// import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
// import {unmountComponentAtNode } from "react-dom";
// import {render, screen, getByText} from '@testing-library/react';
// import { act } from "react-dom/test-utils";
import App from '../App';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
