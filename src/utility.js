import React from 'react';
import Project from './components/Project';
import Footer from './components/Footer';
import Text from './components/Text';
import Hero from './components/Hero';

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
        default:
            return <></>;
    }
};
