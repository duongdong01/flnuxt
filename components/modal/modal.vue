<template>
    <div>
        <a-modal
            v-model="visible"
            title="Xóa tài khoản"
            class="text-center"
            :footer="false"
            @ok="handleOk"
        >
            <h4>Xác nhận xóa tài khoản số {{ deleteObject.STT > 9 ?deleteObject.STT:`0${deleteObject.STT}` }} - {{ deleteObject.rank }} - {{ deleteObject.name }}</h4>
            <div class="btn_modal w-full space-x-2 py-6">
                <a-button type="default" class="w-1/3  btn_cancel" @click="handleOk">
                    Hủy bỏ
                </a-button>
                <a-button class="w-1/3  btn_ok " @click="handleOk();deleteUser(deleteObject.id)">
                    Đồng ý
                </a-button>
            </div>
        </a-modal>
    </div>
</template>
<script>
    export default {
        props: {
            deleteob: {
                type: Object,
                require: true,
            },
        },
        data() {
            return {
                deleteObject: this.deleteob,
                visible: false,
            };
        },
        watch: {
            deleteob() {
                this.deleteObject = this.deleteob;
                console.log('prop detele: ', this.deleteObject);
            },
        },
        methods: {
            showModal() {
                this.visible = true;
            },
            handleOk(e) {
                console.log(e);
                this.visible = false;
            },
            deleteUser(id) {
                this.$emit('delete-user', id);
            },
        },
    };
</script>

<style lang="scss">
    .ant-modal-header{
        @apply border-0
    }
    .ant-modal-footer{
        @apply border-0
    }
    .ant-modal-title{
        @apply mt-8 text-[#1e3a8a] text-xl font-semibold
    }
    .btn_modal{
        button{
            @apply h-11;
        }
        .btn_ok{
            @apply bg-[#1e3a8a] text-white
        }
        .btn_cancel{
            @apply border-[#1e3a8a] text-[#1e3a8a]
        }
    }
    .ant-modal-body{
        @apply pt-4
    }
</style>
