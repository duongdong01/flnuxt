<template>
    <div class="min-h-[100vh] px-12 emprofile">
        <div class="flex flex-col mt-8 w-full">
            <div class="mb-2">
                <p class="text-[#a1a0a0] font-medium">
                    <i class="fa-solid fa-gear mr-3" />Quản lý  /  <span class="text-[#1e3a8a]"> Quản lý hồ sơ nhân viên</span>
                </p>
            </div>
            <div class="flex justify-between sm:flex-col">
                <div class="flex">
                    <i class="fa-solid fa-arrow-left text-[#1e3a8a] mr-3 mt-2" />
                    <h2 class="font-semibold text-3xl text-[#1e3a8a]">
                        Danh sách hồ sơ nhân viên
                    </h2>
                </div>
                <div>
                    <a-button
                        class="btn_add mr-4"
                        icon="plus"
                        size="default"
                        @click="moreAccount()"
                    >
                        Thêm tài khoản
                    </a-button>
                    <a-button
                        type="light"
                        class="btn_import"
                        icon="download"
                        size="default"
                    >
                        Import
                    </a-button>
                </div>
            </div>
        </div>
        <div class="flex flex-col h-full mt-3 space-y-8">
            <div class="emprofile_header w-full  flex justify-between sm:flex-col sm:space-y-3">
                <div class="w-4/6 sm:w-full">
                    <a-input-search
                        placeholder="Tìm kiếm"
                        enter-button
                        class="sm:w-full"
                        @search="onSearch"
                    />
                </div>
                <div class="w-1/3 flex justify-between pl-28 sm:space-x-4">
                    <a-select default-value="status" class="w-40" @change="handleChange">
                        <a-select-option value="jack">
                            Jack
                        </a-select-option>
                        <a-select-option value="status">
                            Trạng thái
                        </a-select-option>
                        <a-select-option value="Yiminghe">
                            yiminghe
                        </a-select-option>
                    </a-select>
                    <a-select default-value="position" class="w-40" @change="handleChange">
                        <a-select-option value="jack">
                            Jack
                        </a-select-option>
                        <a-select-option value="position">
                            Chức vụ
                        </a-select-option>
                        <a-select-option value="Yiminghe">
                            yiminghe
                        </a-select-option>
                    </a-select>
                </div>
            </div>
            <table-employee :data-sources="users" />
        </div>
    </div>
</template>

<script>
    import TableEmployee from '@/components/emprofile/TableEmployee.vue';

    export default {
        components: {
            TableEmployee,
        },
        async asyncData({ store }) {
            await store.dispatch('setUsers');
        },
        data() {
            return {

            };
        },
        computed: {
            users() {
                // eslint-disable-next-line array-callback-return
                return this.$store.getters.Users.map((e, i) => ({
                    ...e,
                    STT: i + 1,
                    image: 'photo',
                }));
            },
        },
        watch: {
            users() {
                console.log('user :', this.users);
            },
        },
        // mounted() {
        //     this.$store.dispatch('setUsers');
        // },
        methods: {
            onSearch() {
                console.log('search');
            },
            handleButtonClick(e) {
                console.log('click left button', e);
            },
            handleMenuClick(e) {
                console.log('click', e);
            },
            handleChange(value) {
                console.log(`selected ${value}`);
            },
            moreAccount() {
                this.$router.push('/emprofile/more-account');
            },
        },
    };
</script>

<style lang="scss">
.emprofile{
    .emprofile_header{
         .ant-input-search-button,.ant-input{
                @apply h-10;

            }
            .ant-select-selection{
                 @apply h-10;
            }
    }
    .btn_add{
     @apply h-10 bg-[#1e3a8a] text-white hover:bg-[#40a9ff] hover:text-white;
    // span{
    //     @apply text-white
    // }
}
}
.btn_import{
    @apply text-[#1e3a8a] h-10 ;
    span{
        @apply  hover:text-[#40a9ff]
    }
}

</style>
