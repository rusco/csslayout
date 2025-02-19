import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Breadcrumb">
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'center',
                                padding: '8px',
                            }}
                        >
                            <div style={{ alignItems: 'center', display: 'flex' }}>
                                <div style={{ width: '128px' }}><Rectangle height={16} /></div>
                                <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '36px', margin: '0 4px' }}>/</div>
                                <div style={{ width: '32px' }}><Rectangle height={16} /></div>
                                <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '36px', margin: '0 4px' }}>/</div>
                                <div style={{ width: '64px' }}><Rectangle height={16} /></div>
                                <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '36px', margin: '0 4px' }}>/</div>
                                <div style={{ width: '32px' }}><Rectangle height={16} /></div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Content is centered vertically */
    align-items: center;
    display: flex;
">
    <!-- Breadcrumb item -->
    <a>...</a>

    <!-- Separator -->
    <div style="margin: 0 8px;">/</span>

    <!-- Repeated items and separators -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
