<template>
    <div class="table-employee">
        <a-table
            :scroll="{x:1000}"
            :data-source="dataSource"
            :columns="columns"
            :align="'right'"
        >
            <template slot="operation" slot-scope="text, record">
                <a-dropdown placement="bottomCenter">
                    <a-menu slot="overlay" class="drop_employee">
                        <a-menu-item key="1">
                            <a-icon type="edit" />
                            <nuxt-link class="cursor-pointer" tag="span" :to="`/emprofile/${record.id}`">
                                Sửa hồ sơ
                            </nuxt-link>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <a-icon type="key" />Đổi mật khẩu
                        </a-menu-item>
                        <a-menu-item key="3" @click="isShow(record.id)">
                            <a-icon type="delete" />Xóa tài khoản
                            <modal ref="modalDelete" :deleteob="obdelete" @delete-user="deleteUser" />
                        </a-menu-item>
                    </a-menu>
                    <a-button class="ml-2">
                        <a-icon type="ellipsis" />
                    </a-button>
                </a-dropdown>
            </template>
            <template slot="status" slot-scope="text, record">
                <i v-if="record.status===true" class="fa-solid fa-circle text-[0.6rem] mr-2 text-[#9cd3ed]" />
                <i v-else class="fa-solid fa-circle text-[0.6rem] mr-2 text-[#EBEBEB]" /> <span>{{ record.status===true?"Đang làm việc":"Đã nghỉ việc" }}</span>
            </template>
            <template slot="phone" slot-scope="text, record">
                <p>{{ record.phone | phoneFormat(record.phone) }}</p>
            </template>
        </a-table>
    </div>
</template>
<script>
    import axios from 'axios';
    import modal from '@/components/modal/modal.vue';

    export default {
        components: {
            modal,
        },
        props: {
            // id: {
            //     type: String,
            //     require: true,

            // },
            dataSources: {
                type: Array,
                require: false,
            },
        },
        data() {
            return {
                dataSource: this.dataSources,
                count: 2,
                columns: [
                    {
                        title: 'STT',
                        dataIndex: 'STT',
                        key: 'STT',
                        width: 58,
                        // scopedSlots: { customRender: 'name' },
                    },
                    {
                        title: 'Ảnh',
                        dataIndex: 'image',
                        key: 'image',
                        width: 80,
                    },
                    {
                        title: 'Mã nhân viên',
                        dataIndex: 'code',
                        key: 'code',
                        width: 130,
                    },
                    {
                        title: 'Tên',
                        dataIndex: 'name',
                        key: 'name',
                        width: 160,
                    },
                    {
                        title: 'Số điện thoại',
                        dataIndex: 'phone',
                        key: 'phone',
                        width: 150,
                        scopedSlots: { customRender: 'phone' },
                    },
                    {
                        title: 'Email',
                        dataIndex: 'email',
                        key: 'email',
                        width: 190,
                    },
                    {
                        title: 'Chức vụ',
                        dataIndex: 'rank',
                        key: 'rank',
                        width: 120,
                    },
                    {
                        title: 'Trạng thái',
                        dataIndex: 'status',
                        key: 'status',
                        width: 135,
                        scopedSlots: { customRender: 'status' },
                    },
                    {
                        title: 'Vai trò',
                        dataIndex: 'role',
                        key: 'role',
                        width: 105,
                    },
                    {
                        title: 'Hoạt động',
                        dataIndex: 'operation',
                        key: 'operation',
                        width: 105,
                        scopedSlots: { customRender: 'operation' },
                    },
                ],
                obdelete: {},
                // visible: false,
            };
        },
        computed: {
        },
        watch: {
            dataSources() {
                this.dataSource = this.dataSources;
            },
        },
        async mounted() {
            console.log('map:', this.dataSource);
        },
        methods: {
            onCellChange(key, dataIndex, value) {
                const dataSource = [...this.dataSource];
                const target = dataSource.find((item) => item.key === key);
                if (target) {
                    target[dataIndex] = value;
                    this.dataSource = dataSource;
                }
            },
            onDelete(key) {
                const dataSource = [...this.dataSource];
                this.dataSource = dataSource.filter((item) => item.key !== key);
            },
            isShow(id) {
                // console.log('show');
                this.$refs.modalDelete.visible = true;
                this.obdelete = this.dataSource.find((data) => data.id === id);
                // console.log('click delete', this.obdelete);
                // const obdelete = this.da;
            },
            deleteUser(id) {
                console.log('id', id);
                axios.delete(`https://flextext-f544f-default-rtdb.firebaseio.com/user/${id}.json`).then((data) => {
                    // this.$nuxt.refresh();
                    console.log('thành công', data);
                    this.dataSource = this.dataSource.filter((item) => item.id !== id);
                    this.$store.dispatch('setUsers');
                    // console.log('store:', this.$store.getters.Users);
                }).catch((e) => {
                    console.log('lỗi: ', e);
                });
                // this.dataSource
            },
        },
    };
</script>

<style lang="scss">

.table-employee{
   .editable-cell {
        @apply relative;
        .editable-cell-input-wrapper,
        .editable-cell-text-wrapper {
            @apply pr-6;
        }
         .editable-cell-text-wrapper {
            //  padding: 5px 24px 5px 5px;
             @apply px-2 pr-6 pl-2 ;
         }
    }

        .editable-cell-icon,
        .editable-cell-icon-check {
            @apply absolute right-0 w-5 cursor-pointer ;
        }

        .editable-cell-icon {
            @apply leading-5 hidden ;
        }

        .editable-cell-icon-check {
            @apply leading-7 ;
        }

        .editable-cell:hover .editable-cell-icon {
            @apply inline-block ;
        }

        .editable-cell-icon:hover,
        .editable-cell-icon-check:hover {
            @apply text-[#108ee9] ;
        }

        .editable-add-btn {
            @apply mb-2 ;
        }

        thead{
            tr{
                th{
                    @apply bg-[#daeff9] ;
                }
            }
        }
          tbody{
            tr{
                td{
                    @apply bg-[#fff] ;
                }
            }
        }

}
.drop_employee{
        .ant-dropdown-menu-item{
            @apply text-black  hover:text-[#1e3a8a];
            .anticon-delete{
                @apply text-[red]
            }
             .anticon-edit{
                @apply text-[#1e3a8a]
            }
        }
}

</style>
