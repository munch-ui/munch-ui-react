import React from 'react';
import { Button, Card } from 'munch-ui-react';
import ComponentShowcase from './ComponentShowcase';
import { Download } from 'heroicons-react';

const ButtonShowCase = (): JSX.Element => {
    return (
        <ComponentShowcase title='Buttons'>
            <div className='grid grid-cols-4 gap-4'>
                <Card title='Default'>
                    <div className='flex items-center justify-between'>
                        <Button>Submit</Button>
                        <Button shape='circle'>Submit</Button>
                        <Button suffixIcon={<Download size={18} />}>
                            Download
                        </Button>
                    </div>
                </Card>
                <Card title='Outline'>
                    <div className='flex items-center justify-between'>
                        <Button color='danger' appearance='outline'>
                            Cancel
                        </Button>
                        <Button
                            color='warning'
                            appearance='outline'
                            shape='circle'
                        >
                            Close
                        </Button>
                        <Button
                            appearance='outline'
                            prefixIcon={<Download size={18} />}
                        >
                            Download
                        </Button>
                    </div>
                </Card>
                <div className='col-span-2'>
                    <Card title='Types'>
                        <div className='flex items-center justify-between'>
                            <Button>Submit</Button>
                            <Button appearance='ghost'>Close</Button>
                            <Button color='warning'>Warning</Button>
                            <Button color='danger'>Danger</Button>
                            <Button theme='bg-green-500'>Custom</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </ComponentShowcase>
    );
};

export default ButtonShowCase;
