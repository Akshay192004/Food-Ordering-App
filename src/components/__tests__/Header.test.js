import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header'; // Adjust the path if necessary
import { appStore } from '../utils/appStore'; // Adjust this import based on your store setup

describe('Header Component', () => {
    it('Should load header component with a login button', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
    });
});
