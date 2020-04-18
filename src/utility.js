import React from 'react';
import Project from './components/Project';
import Footer from './components/Footer';
import Text from './components/Text';
import Hero from './components/Hero';
import TextImage from './components/TextImage';

export const getComponentFromSlice = (item, index) => {
    switch (item.slice_type) {
        case 'project':
            return <Project props={item} key={index} />;
        case 'hero':
            return <Hero props={item} key={index} />;
        case 'text':
            return <Text props={item} key={index} />;
        case 'footer':
            return <Footer props={item} key={index} />;
        case 'text_w_image':
            return <TextImage props={item} key={index} />;
        default:
            return <></>;
    }
};
