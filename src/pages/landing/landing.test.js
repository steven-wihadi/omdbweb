import LandingPage from './landing.page';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

it('Should create Landing Page', () => {
  const store = mockStore({
    movieListParams: {
      searchInput: 'Batman'
    }
  });

  const wrapper = mount(
    <Provider store={ store }>
      <LandingPage />
    </Provider>
  );

  expect(wrapper).toBeTruthy();
});
