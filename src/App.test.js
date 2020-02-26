import React from 'react';
import { 
    render,
    fireEvent,
    waitForElement,
    wait,
    getByTestId
} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { fetchShow as mockFetchShow } from './api/fetchShow';
import App from './App'
import testData from './testData'

jest.mock('./api/fetchShow');
console.log(mockFetchShow);

test('App fetches show data and renders initial content', async () => {
    mockFetchShow.mockResolvedValueOnce(testData);

    const { getByText, queryAllByText } = render(<App/>);

    getByText(/fetching data/i);

    await wait(() => {
        // const dropdown = getByText(/select a season/i)
        // userEvent.click(dropdown);

        // expect(queryAllByText(/season/i)).toHaveLength(4)

        getByText(/select a season/i)
    })
    
})