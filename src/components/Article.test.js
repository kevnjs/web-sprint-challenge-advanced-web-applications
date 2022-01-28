import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import Article from './Article';

const testArticle = {
    createdOn: Date.now(),
    image: null,
    headline: "A Test headline",
    author: "Test Author",
    summary: "Test Summary",
    body: "A test sentence to test this article",
    id: toString(123)
}

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)
    const headline = screen.getByTestId('headline')
    const author = screen.getByTestId('author')
    
    expect(headline).toBeInTheDocument()
    expect(headline).toHaveTextContent('A Test headline')
    expect(author).toBeInTheDocument()
    expect(author).toHaveTextContent('Test Author')
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={{...testArticle, author: null}}/>)

    const author = screen.getByTestId('author')

    expect(author).toHaveTextContent("By Associated Press")
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const fakeDelete = jest.fn()
    render(<Article article={testArticle} handleDelete={fakeDelete}/>)

    const delBtn = screen.getByTestId('deleteButton')
    userEvent.click(delBtn)
    expect(fakeDelete).toBeCalled()
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.