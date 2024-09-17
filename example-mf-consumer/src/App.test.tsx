import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the heading', () => {
    render(<App />);
    const heading = screen.getByText(/Rsbuild with React/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the paragraph', () => {
    render(<App />);
    const paragraph = screen.getByText(
      /Start building amazing things with Rsbuild./i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the ProviderButton component', () => {
    render(<App />);
    const button = screen.getByText((match) =>
      match.startsWith('Provider button'),
    );
    expect(button).toBeInTheDocument();
  });

  it('renders the content div', () => {
    render(<App />);
    const contentDiv = document.querySelector('.content');
    expect(contentDiv).toBeInTheDocument();
  });

  it('does not render non-existent text', () => {
    render(<App />);
    const nonExistentText = screen.queryByText(/Non-existent text/i);
    expect(nonExistentText).not.toBeInTheDocument();
  });
});
