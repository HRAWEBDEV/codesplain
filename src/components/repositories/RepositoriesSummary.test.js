import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';

test('should display repository details', () => {
 const repository = {
  language: 'javascript',
  stargazers_count: 5,
  forks: 30,
  open_issuesL: 1,
 };

 render(<RepositoriesSummary repository={repository} />);
 Object.keys(repository).forEach((key) => {
  const element = screen.getByText(new RegExp(repository[key], 'i'));
  expect(element).toBeInTheDocument();
 });
});
