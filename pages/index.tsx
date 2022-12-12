import React from 'react';
import dynamic from 'next/dynamic';

import Tree from 'react-d3-tree';

const orgChart = {
    name: 'CEO',
    children: [
        {
            name: 'Manager',
            attributes: {
                department: 'Production',
            },
            children: [
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: 'Foreman',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
            ],
        },
    ],
};

export default function Home() {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
        }}>
            <div style={{width: '100%', position: 'relative'}}>
                <div id="treeWrapper" style={{height: '100vh'}}>
                    <Tree translate={{x: 500, y: 500}} data={orgChart}/>
                </div>
            </div>
        </div>
    )
}
