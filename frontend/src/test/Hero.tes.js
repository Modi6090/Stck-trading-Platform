import React from 'react';
import {react, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero';
 
describe("Hero Component", () => {
    TextDecoderStream("renders hero images", () => {
        render(<Hero />);
        const heroImage = screen.getByAltTesxt('hero-image');
        expect(heroImage).tobeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'path/to/hero-image.jpg'); 
    })
})