<template>
    <div class="min-h-[100vh]  detaile_emprofile">
        <div class="flex flex-col mt-8 w-full px-12">
            <div class="mb-2 flex">
                <i class="fa-solid fa-arrow-left ml-[-10px] pt-2 text-[#1e3a8a] mr-3" @click="back()" />
                <h2 class="text-[#1e3a8a] text-3xl">
                    {{ dataProfile ? dataProfile.name : '' }}
                </h2>
                <p class="ml-3 mt-1">
                    {{ dataProfile ? dataProfile.role : '' }}
                </p>
            </div>
            <div class="flex w-full items-center justify-between mt-2 mb-8">
                <div>
                    <up-load />
                </div>
                <div class="text-[#FB3C00]">
                    <a-icon type="key" />
                    <span>Đổi mật khẩu</span>
                </div>
            </div>
            <form-info :formdata="dataProfile" class="mt-6" />
            <!-- <tab-device /> -->
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import UpLoad from '@/components/emprofile/details/UpLoad.vue';
    import FormInfo from '@/components/emprofile/details/FormInfo.vue';
    // import TabDevice from '@/components/emprofile/details/TabDevice.vue';

    export default {
        components: {
            UpLoad,
            FormInfo,
            // TabDevice,
        },
        fetch({ store }) {
            store.dispatch('setUsers');
        },
        data() {
            return {
                dataProfile: {},
            };
        },
        computed: {
            ...mapState(['users']),
        },
        async mounted() {
            await this.$store.dispatch('setUsers');
            this.dataProfile = this.users.find((user) => user.id === this.$route.params.id);
        },
        methods: {
            back() {
                this.$router.push('/emprofile');
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>
