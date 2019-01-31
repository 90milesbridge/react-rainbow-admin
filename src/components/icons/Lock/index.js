import React from 'react';
import PropTypes from 'prop-types';

export default function Lock(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} height="16px" width="13px" version="1.1" viewBox="0 0 13 16">
            <g id="new-pages" fill="none" stroke="none" strokeWidth="1">
                <g id="admin-forms" transform="translate(-177.000000, -361.000000)">
                    <g id="Group-23" transform="translate(129.000000, 137.000000)">
                        <g id="Group-47">
                            <g id="lock" transform="translate(48.000000, 224.000000)">
                                <path id="Shape" d="M6.63541667,0 C3.84475,0.0029375 1.58327604,1.9413125 1.57984896,4.33334375 L1.57984896,7 C1.57984896,7.18409375 1.75397396,7.33334375 1.96875,7.33334375 L3.52431771,7.33334375 C3.73909375,7.33334375 3.91321875,7.18409375 3.91321875,7 L3.91321875,4.33334375 C3.91318229,3.04465625 5.13198438,2 6.63541667,2 C8.13884896,2 9.35765104,3.04465625 9.35765104,4.33334375 L9.35765104,7 C9.35765104,7.18409375 9.53177604,7.33334375 9.74655208,7.33334375 L11.3020833,7.33334375 C11.5168594,7.33334375 11.6909844,7.18409375 11.6909844,7 L11.6909844,4.33334375 C11.6875573,1.9413125 9.42608333,0.0029375 6.63541667,0 Z" fill="#009ACF" />
                                <path id="Shape" d="M1.93249786,6.66665625 L11.0918198,6.66665625 C12.1456786,6.66665625 13,7.41284375 13,8.3333125 L13,14.3333125 C13,15.2538125 12.1456786,16 11.0918198,16 L1.93249786,16 C0.878639155,16 0.0243177083,15.2538125 0.0243177083,14.3333437 L0.0243177083,8.33334375 C0.0243177083,7.41284375 0.878639155,6.66665625 1.93249786,6.66665625 Z" fill="#01B6F5" />
                                <path id="Shape" d="M8.29998416,10.3333437 C8.3040529,9.412875 7.52387224,8.66353125 6.55738272,8.65965625 C5.5908932,8.65578125 4.80408444,9.3988125 4.8000157,10.3192812 C4.79719383,10.9555312 5.1749631,11.5377812 5.77369114,11.82 L5.50348094,13.62 C5.47641071,13.8022812 5.60962909,13.9709375 5.80102387,13.9967187 C5.8172332,13.9989062 5.8336066,14 5.84997999,14 L7.24998706,14 C7.44328496,14.001875 7.60157202,13.8541562 7.60350796,13.6700625 C7.60367202,13.6530937 7.60252358,13.636125 7.59996422,13.6193437 L7.32975403,11.8193437 C7.92116489,11.5374687 8.29614511,10.963125 8.29998416,10.3333437 Z" fill="#FFFFFF" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Lock.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Lock.defaultProps = {
    className: undefined,
    style: undefined,
};