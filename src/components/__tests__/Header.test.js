import React from 'react';
import { fireEvent,render,screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header'; // Adjust the path if necessary
import { appStore } from '../appStore'; 
import "@testing-library/jest-dom";

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
    const loginButton=screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton); // Simulate a click event on the login button

    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
});
