import React from 'react';
import { render, screen } from '@testing-library/react';
import SkeletonLoader from './SkeletonLoader';

describe('SkeletonLoader', () => {
  it('should render the default number of skeleton rows (20)', () => {
    render(
      <table>
        <SkeletonLoader />
      </table>,
    );
    const skeletonRows = screen.getAllByRole('row');
    expect(skeletonRows).toHaveLength(20);
  });

  it('should render the specified number of skeleton rows', () => {
    render(
      <table>
        <SkeletonLoader rows={10} />
      </table>,
    );
    const skeletonRows = screen.getAllByRole('row');
    expect(skeletonRows).toHaveLength(10);
  });
});
