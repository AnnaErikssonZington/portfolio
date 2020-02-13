import React from 'react';
import Project from './components/Project';
import Footer from './components/Footer';
import Text from './components/Text';
import Hero from './components/Hero';
import TextImage from './components/TextImage';

export const getComponentFromSlice = item => {
    switch (item.slice_type) {
        case 'project':
            return <Project props={item} />;
        case 'hero':
            return <Hero props={item} />;
        case 'text':
            return <Text props={item} />;
        case 'footer':
            return <Footer props={item} />;
        case 'text_w_image':
            return <TextImage props={item} />;
        default:
            return <></>;
    }
};
