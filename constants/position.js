export const SELECT = {
    generalManager: 'generalManager',
    vicePresident: 'vicePresident',
    HR: 'HR',
    intern: 'intern',
};
export const OPTIONS_POSITION = [
    // selection trạng thái
    {
        label: 'Tổng giám đốc',
        value: SELECT.generalManager,
        tagType: 'blue',
    },
    {
        label: 'Phó giám đốc',
        value: SELECT.vicePresident,
        tagType: 'green',
    },
    {
        label: 'HR',
        value: SELECT.HR,
        tagType: 'green',
    },
    {
        label: 'Thực tập sinh',
        value: SELECT.intern,
        tagType: 'green',
    },
];
export default OPTIONS_POSITION;
