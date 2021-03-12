import * as React from "react";

function SvgCtTreeNodeAdd(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1em"
            height="1em"
            {...props}
        >
            <defs>
                <linearGradient
                    xlinkHref="#ct_tree-node-add_svg__a"
                    id="ct_tree-node-add_svg__d"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 -1.42857 -2 0 30.183 57.053)"
                    x1={24.2}
                    y1={9.25}
                    x2={1.8}
                    y2={9.25}
                />
                <linearGradient id="ct_tree-node-add_svg__a">
                    <stop offset={0} stopColor="#9bdb4d" />
                    <stop offset={1} stopColor="#68b723" />
                </linearGradient>
                <linearGradient
                    x1={24.139}
                    y1={9.365}
                    x2={24.139}
                    y2={36.942}
                    id="ct_tree-node-add_svg__e"
                    xlinkHref="#ct_tree-node-add_svg__b"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(.98628 0 0 1.01535 -13.38 14.973)"
                />
                <linearGradient id="ct_tree-node-add_svg__b">
                    <stop offset={0} stopColor="#fff" />
                    <stop offset={0} stopColor="#fff" stopOpacity={0.235} />
                    <stop offset={1} stopColor="#fff" stopOpacity={0.157} />
                    <stop offset={1} stopColor="#fff" stopOpacity={0.392} />
                </linearGradient>
                <linearGradient
                    x1={24.139}
                    y1={20.069}
                    x2={24.139}
                    y2={26.212}
                    id="ct_tree-node-add_svg__f"
                    xlinkHref="#ct_tree-node-add_svg__c"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(1.02379 0 0 .97677 -14.25 15.879)"
                />
                <linearGradient id="ct_tree-node-add_svg__c">
                    <stop offset={0} stopColor="#fff" />
                    <stop offset={0} stopColor="#fff" stopOpacity={0.235} />
                    <stop offset={1} stopColor="#fff" stopOpacity={0.157} />
                    <stop offset={1} stopColor="#fff" stopOpacity={0.392} />
                </linearGradient>
            </defs>
            <path
                d="M12.262 17.12v15.628"
                fill="none"
                stroke="#abacae"
                strokeWidth={4}
            />
            <g stroke="#7a0000">
                <g strokeWidth={4.135}>
                    <path
                        d="M42.021 38.735c-2.28 6.29-8.636 11.671-14.976 9.411-6.706-.642-10.134-8.2-9.485-14.852.729-7.47 6.64-10.416 14.793-8.602 8.154 1.813 12.229 6.98 9.668 14.043z"
                        fill="#c6262e"
                        transform="matrix(.66768 .02892 -.02957 .6729 -6.876 -11.438)"
                    />
                    <path
                        d="M28.224 26.012c-.601 3.336 4.889 5.213 6.336 2"
                        fill="none"
                        stroke="#333"
                        transform="matrix(.66768 .02892 -.02957 .6729 -6.876 -11.438)"
                    />
                </g>
                <path
                    d="M12.845 7.56c.806-2.16 2.693-3.873 5.363-6.033"
                    fill="#275100"
                    fillOpacity={0.945}
                    stroke="#3a9104"
                    strokeWidth={2.774}
                    strokeLinecap="round"
                />
            </g>
            <path
                d="M10.286 12.207a2.905 2.235 48.879 01-3.594-.719 2.905 2.235 48.879 01-.227-3.658 2.905 2.235 48.879 013.594.719 2.905 2.235 48.879 01.227 3.658"
                fill="#ff8c82"
            />
            <g strokeLinejoin="round">
                <path
                    style={{
                        fontVariationSettings: "normal",
                    }}
                    d="M5.07 22.981a.885.885 0 00-.887.887V33.98H-5.93a.885.885 0 00-.887.887v7.227c0 .49.396.886.887.886H4.183v10.114c0 .49.395.886.887.886h7.226a.885.885 0 00.887-.886V42.98h10.113a.885.885 0 00.887-.886v-7.227a.885.885 0 00-.887-.887H13.183V23.868a.885.885 0 00-.887-.887z"
                    fill="url(#ct_tree-node-add_svg__d)"
                    stroke="#206b00"
                    strokeLinecap="round"
                    strokeOpacity={0.5}
                    transform="matrix(.54982 0 0 .54982 7.478 17.956)"
                />
                <path
                    d="M5.183 34.497V23.981h7v10.5m0 8v10.5h-7v-10.5"
                    opacity={0.5}
                    fill="none"
                    stroke="url(#ct_tree-node-add_svg__e)"
                    transform="matrix(.54982 0 0 .54982 7.478 17.956)"
                />
                <path
                    d="M12.683 35.007l10.5-.026v6.975l-10.5.025m-8 0l-10.5-.025V34.98h10.5"
                    opacity={0.5}
                    fill="none"
                    stroke="url(#ct_tree-node-add_svg__f)"
                    transform="matrix(.54982 0 0 .54982 7.478 17.956)"
                />
            </g>
        </svg>
    );
}

export default SvgCtTreeNodeAdd;
