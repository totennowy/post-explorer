import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  const defaultProps = {
    currentPage: 1,
    totalCount: 100,
    siblingCount: 1,
    pageSize: 10,
    onPageChange: jest.fn(),
  };

  it('should render pagination component', () => {
    render(<Pagination {...defaultProps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should call onPageChange when next button is clicked', () => {
    render(<Pagination {...defaultProps} />);
    fireEvent.click(screen.getByText('>'));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
  });

  it('should call onPageChange when previous button is clicked', () => {
    render(<Pagination {...defaultProps} currentPage={2} />);
    fireEvent.click(screen.getByText('<'));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(1);
  });

  it('should render DOTS when necessary', () => {
    render(<Pagination {...defaultProps} totalCount={1000} />);
    const dotsElement = screen.getByText((content, element) => {
      return element?.classList.contains('dots') || false;
    });
    expect(dotsElement).toBeInTheDocument();
  });

  it('should have "selected" class on the current page', () => {
    render(<Pagination {...defaultProps} currentPage={3} />);
    expect(screen.getByText('3')).toHaveClass('selected');
  });
});
