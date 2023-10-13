// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import Spinner from '../components/Spinner'
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('sanity', () => {
  expect(true).toBe(true)
})

afterEach(() => {
  cleanup()
})

test('Spinner renders on prop on being true', async () => {
  render(<Spinner on={true} />)
  const waitMessage = screen.getByText(/Please wait.../i)

  await waitFor(() => {
    expect(waitMessage).toBeInTheDocument()
  })
})

test('Spinner does not render when prop is false', async () => {
  render(<Spinner on={false} />)
  const waitMessage = screen.queryByText(/Please wait.../i)

  await waitFor(() => {
    expect(waitMessage).not.toBeInTheDocument()
  })
})