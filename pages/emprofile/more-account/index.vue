<template>
    <div class="min-h-[100vh]  more_account">
        <div class="flex flex-col mt-8 w-full px-12">
            <div class="mb-2">
                <p class="text-[#a1a0a0] font-medium">
                    <i class="fa-solid fa-gear mr-3" />Quản lý  / Quản lý hồ sơ nhân viên / <span class="text-[#1e3a8a]">Thêm tài khoản </span>
                </p>
            </div>
            <div class="flex">
                <i class="fa-solid fa-arrow-left text-[#1e3a8a] mr-3 mt-2" @click="back()" />
                <h2 class="font-semibold text-3xl text-[#1e3a8a]">
                    Thêm tài khoản mới
                </h2>
            </div>
            <div class="flex w-full items-center justify-between mt-12 mb-8">
                <div>
                    <UpAvatar />
                </div>
            </div>
            <form-info class="mt-6" />
        </div>
    </div>
</template>

<script>

    import UpAvatar from '@/components/emprofile/more/UpAvatar.vue';
    // import FormAccount from '@/components/emprofile/more/FormAccount.vue';
    import FormInfo from '@/components/emprofile/details/FormInfo.vue';

    export default {
        components: {
            UpAvatar,
            // FormAccount,
            FormInfo,
        },
        data() {
            return {
            };
        },
        methods: {
            back() {
                console.log('back');
                this.$router.push('/emprofile');
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>
