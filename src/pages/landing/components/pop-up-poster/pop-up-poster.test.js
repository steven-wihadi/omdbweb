import { render } from "@testing-library/react";
import PopUpPoster from './pop-up-poster';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

it('Popup poster should create', () => {
  const store = mockStore({
    popUpPosterConf: {
      isShow: false,
      imgLink: ''
    }
  });

  const wrapper = mount(
    <Provider store={ store }>
      <PopUpPoster />
    </Provider>
  );

  expect(wrapper).toBeTruthy();
});
