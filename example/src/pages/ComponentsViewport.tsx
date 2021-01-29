import React, { PureComponent } from 'react';
import ButtonShowCase from './../components/ButtonShowcase';
import InputShowcase from './../components/InputShowcase';

export default class ComponentsViewport extends PureComponent {
    render(): JSX.Element {
        return (
            <>
                <ButtonShowCase />
                <InputShowcase />
            </>
        );
    }
}
