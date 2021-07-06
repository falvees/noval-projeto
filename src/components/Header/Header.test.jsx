import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';

describe('Header Component', () => {
    test('Pass the subTitle through the props', () => {
        render(<Header subTitle="Test" />);

        const HeaderTitle = screen.getByText('Test');

        expect(HeaderTitle).toBeInTheDocument();
    });
})