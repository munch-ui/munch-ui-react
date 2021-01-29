import React from 'react';
import { Input, Card } from 'munch-ui-react';
import ComponentShowcase from './ComponentShowcase';

const InputShowCase = (): JSX.Element => {
    return (
        <ComponentShowcase title='Buttons'>
            <div className='grid grid-cols-4 gap-4'>
                <Card title='Default'>
                    <div className='flex items-center justify-between'>
                        <Input type='text' placeholder='First name' />
                    </div>
                </Card>
            </div>
        </ComponentShowcase>
    );
};

export default InputShowCase;
