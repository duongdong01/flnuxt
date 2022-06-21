<template>
    <div class="max-h-[100vh] px-12 device">
        <div class="flex mt-8 w-full">
            <i class="fa-solid fa-arrow-left ml-[-10px] pt-2 text-[#1e3a8a]" />
            <h2 class="font-semibold ml-3 text-3xl text-[#1e3a8a]">
                Thiết bị
            </h2>
        </div>
        <div class="flex flex-col h-full mt-4">
            <div class="device_header w-full  flex justify-between">
                <div class="w-4/6">
                    <a-input-search placeholder="Tìm kiếm" enter-button @search="onSearch" />
                </div>
                <div class="w-1/4">
                    <a-range-picker separator="-" :placeholder="['Từ ngày','Đến ngày']" @change="onChange">
                        <a-icon slot="suffixIcon" type="calendar" />
                    </a-range-picker>
                </div>
            </div>
            <div class="w-full h-full mt-9 bg-[#fff]">
                <div class="tab_device">
                    <a-tabs default-active-key="1" class="mb-6" @change="callback">
                        <a-tab-pane key="1" tab="Đang sử dụng (2)" size="large">
                            <a-table :columns="columns" :data-source="data">
                                <a slot="name" slot-scope="text">{{ text }}</a>
                            </a-table>
                        </a-tab-pane>
                        <a-tab-pane
                            key="2"
                            tab="Đã sử dụng (1)"
                            force-render
                            class="mb-6"
                        >
                            <a-table :columns="columns" :data-source="data">
                                <a slot="name" slot-scope="text">{{ text }}</a>
                            </a-table>
                        </a-tab-pane>
                    </a-tabs>
                </div>
            </div>
        </div>
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
            width: 150,
        },
        {
            title: 'Tên thiết bị',
            dataIndex: 'name',
            key: 'name',
            width: 180,
        },
        {
            title: 'Phân loại',
            dataIndex: 'classify',
            key: 'classify',
            width: 200,

        },
        {
            title: 'Mô tả',
            dataIndex: 'describe',
            key: 'describe',
            ellipsis: false,
        },
        {
            title: 'Ngày tiếp nhận',
            dataIndex: 'date',
            key: 'date',
            width: 150,
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
            onChange(date, dateString) {
                console.log(date, dateString);
            },
            onSearch() {
                console.log('search');
            },
            callback(key) {
                console.log(key);
            },
        },
    };
</script>

<style lang="scss">
.device{
    .device_header {
            .ant-input{
                @apply h-10
            }
            .ant-input-search-button{
                @apply h-10

            }
    }
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
    .ant-tabs-bar{
        @apply border-none
    }
}
.tab_device{

    .ant-tabs-nav-scroll{
        .ant-tabs-nav{
            @apply w-full text-black ;
            div{
                @apply flex justify-center pb-2 font-medium;
                .ant-tabs-tab{
                    @apply w-1/2 py-4
                }
                .ant-tabs-tab-active{
                    @apply bg-[#1e3a8a] text-white
                }
            }
               .ant-tabs-ink-bar{
                    @apply w-1/2  py-0 bg-[#dadbdd] h-[1px]
                }
        }
    }
}
</style>
