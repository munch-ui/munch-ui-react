import React from 'react';
import { Button, Card } from 'munch-ui-react';
import ComponentShowcase from './ComponentShowcase';

const ButtonShowCase = (): JSX.Element => {
    return (
        <ComponentShowcase title='Buttons'>
            <div className='grid grid-cols-4 gap-4'>
                <Card title='Default'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div>
                            <Button>Primary</Button>
                        </div>
                        <div>
                            <Button shape='round'>Primary</Button>
                        </div>
                        <div>
                            <Button loading={true}>Primary</Button>
                        </div>
                    </div>
                </Card>
                <Card title='Outline'>
                    <Button type='outline'>Primary</Button>
                </Card>
            </div>
        </ComponentShowcase>
    );
};

export default ButtonShowCase;
