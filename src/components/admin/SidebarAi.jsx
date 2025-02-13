import React, { useState } from 'react';
import styled from 'styled-components';

const SidebarAi = () => {
    function getrandom(num , mul) {
        var value = [ ];
        for ( i=0; i <= num; i++ ) {
            var rand = Math.random() * mul;
            value.push(rand);
        }
        return value;
    }

    var trace1 =  {
        opacity: 0.5,
        color: 'rgba(255,127,80,0.7)',
        type: 'mesh3d',
        x: getrandom(50 , -75),
        y: getrandom(50 , 75),
        z: getrandom(50 , 75),
        scene: "scene1"
    };

    var trace2 =  {
        opacity: 0.5,
        color: 'pink',
        type: 'mesh3d',
        x: getrandom(50 , -75),
        y: getrandom(50 , 75),
        z: getrandom(50 , 75),
        scene: "scene2"
    };

    var trace3 = {
        opacity:0.4,
        color:'rgb(033,255,100)',
        type: 'mesh3d',
        x: getrandom(50 , -75),
        y: getrandom(50 , -75),
        z: getrandom(50 , -75),
        scene: "scene3",
    };

    var trace4 = {
        opacity: 0.5,
        color:'rgb(200,100,200)',
        type: 'mesh3d',
        x: getrandom(50 , -75),
        y: getrandom(50 , 75),
        z: getrandom(50 , 75),
        scene: "scene4"
    };

    var trace5 =  {
        opacity: 0.5,
        color:'rgb(00,150,200)',
        type: 'mesh3d',
        x: getrandom(50 , 100),
        y: getrandom(50 , 100),
        z: getrandom(50 , 100),
        scene: "scene5",
    }

    var layout = {
        scene1: {
            domain: {
                x: [0.0,  0.5],
                y: [0.5, 1.0]
            },},
        scene2: {
            domain: {
                x: [0.5, 1],
                y: [0.5, 1.0]
            }},
        scene3: {
            domain: {
                x: [0.0,  0.33],
                y: [0, 0.5]
            },},
        scene4: {
            domain: {
                x: [0.33, 0.66],
                y: [0, 0.5]
            }},
        scene5: {
            domain: {
                x: [0.66, 0.99],
                y: [0, 0.5]
            },},
        height: 600,
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
            pad: 0
        },
    }
};

export default SidebarAi;