<template>
    <div class="details_tabdevice my-10 bg-[#fff]">
        <h2 class="bg-[#1e3a8a] text-white px-6 py-1">
            Thiết bị
        </h2>
        <a-tabs default-active-key="1" class="mb-6" @change="callback">
            <a-tab-pane key="1" tab="Đang sử dụng (2)" size="large">
                <a-table
                    :columns="columns"
                    :data-source="data"
                >
                    <!-- <a slot="name" slot-scope="text">{{ text }}</a> -->

                    <template slot="action">
                        <div class="w-full text-center">
                            <a-icon type="eye" class="text-center" style="text-align: center;" />
                        </div>
                    </template>
                </a-table>
            </a-tab-pane>
            <a-tab-pane
                key="2"
                tab="Đã sử dụng (1)"
                force-render
                class="mb-6"
            >
                <a-table :columns="columns" :data-source="data">
                    <!-- <a slot="name" slot-scope="text">{{ text }}</a> -->
                    <div class="w-full text-center">
                        <a-icon type="eye" class="text-center" style="text-align: center;" />
                    </div>
                </a-table>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<script>
    const columns = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
            width: 100,
            // scopedSlots: { customRender: 'STT' },
        },
        {
            title: 'Mã thiết bị',
            dataIndex: 'code',
            key: 'code',
            width: 140,
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'name',
            key: 'name',
            width: 170,
        },
        {
            title: 'Phân loại',
            dataIndex: 'classify',
            key: 'classify',
            width: 170,

        },
        {
            title: 'Mô tả',
            dataIndex: 'describe',
            key: 'describe',
            ellipsis: true,
        },
        {
            title: 'Ngày tiếp nhận',
            dataIndex: 'date',
            key: 'date',
            width: 150,
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            width: 120,
            scopedSlots: { customRender: 'action' },

        },
    ];
    const data = [
        {
            key: '1',
            STT: '1',
            code: 'MH29',
            name: 'Máy tính dell',
            classify: 'Màn hình',
            describe: `Màn hình 20”,Dell LCD P2722H sở hữu màn hình 27 inch với thiết kế phẳng, viền mỏng, 
            có độ phân giải Full HD, hiển thị chi tiết chân thực với 16.7 triệu màu, 
            cùng kết hợp với tấm nền IPS để bạn có thể xem chất lượng hình ảnh và màu sắc nhất quán từ mọi góc nhìn.`,
            date: '19/5/2021',
        },
        {
            key: '2',
            STT: '2',
            code: 'MH29',
            name: 'Máy tính dell',
            classify: 'Màn hình',
            describe: `Màn hình 20”,Dell LCD P2722H sở hữu màn hình 27 inch với thiết kế phẳng, viền mỏng, 
            có độ phân giải Full HD, hiển thị chi tiết chân thực với 16.7 triệu màu, 
            cùng kết hợp với tấm nền IPS để bạn có thể xem chất lượng hình ảnh và màu sắc nhất quán từ mọi góc nhìn.`,
            date: '19/5/2021',
        },
    ];
    export default {
        data() {
            return {
                data,
                columns,
            };
        },
        methods: {
            callback(key) {
                console.log(key);
            },
        },
    };
</script>

<style lang="scss">
.details_tabdevice{

    tr{
        th{
            @apply px-6 py-2
        }
        td{
            @apply px-6 py-2
        }
    }
    thead{
        tr{
            @apply h-14;
            th{
                @apply bg-[#daeff9]
            }
        }
    }
      td{
            @apply bg-[#fff]
        }
    .ant-tabs-bar{
        @apply border-none
    }
    .ant-tabs-nav-scroll{
            .ant-tabs-nav{
                @apply w-full text-black ;
                div{
                    @apply flex justify-center pb-2 font-medium;
                    .ant-tabs-tab{
                        @apply w-1/2 py-0
                    }
                    // .ant-tabs-tab-active{
                    //     @apply bg-[#1e3a8a] text-white
                    // }
                }
                   .ant-tabs-ink-bar{
                        @apply w-1/2  py-0 bg-[#dadbdd] h-[1px]
                    }
            }
        }
        .ant-tabs-bar{
            @apply mb-8
        }

}
</style>
