export const SELECT = {
    Staff: 'Staff',
    Admin: 'Admin',
};
export const OPTIONS_ROLE = [
    // selection trạng thái
    {
        label: 'Nhân viên',
        value: SELECT.Staff,
        tagType: 'blue',
    },
    {
        label: 'Admin',
        value: SELECT.Admin,
        tagType: 'yellow',
    },
];
export default OPTIONS_ROLE;
