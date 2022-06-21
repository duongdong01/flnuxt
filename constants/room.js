export const SELECT = {
    HCNS: 'HCNS',
    BA: 'BA',
    DEV: 'DEV',
};
export const OPTIONS_ROOM = [
    // selection trạng thái
    {
        id: '0',
        label: 'Phòng HCNS',
        value: SELECT.generalManager,
        tagType: 'blue',
    },
    {
        id: '1',
        label: 'Phòng BA',
        value: SELECT.QL,
        tagType: 'blue',
    },
    {
        id: '2',
        label: 'Phòng DEV',
        value: SELECT.QL,
        tagType: 'blue',
    },
];
export default OPTIONS_ROOM;
