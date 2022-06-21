<template>
    <a-form
        :form="form"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        class="form_account"
        @submit="handleSubmit"
    >
        <div class="grid grid-cols-2 gap-6">
            <div>
                <a-form-item label="Mã nhân viên">
                    <a-input
                        v-decorator="['code', { rules: [{ required: true, message: 'Please input your code!' }] }]"
                    />
                </a-form-item>
                <a-form-item label="Mật khẩu">
                    <a-input
                        v-decorator="['password', { rules: [{ required: true, message: 'Please input your password!' }] }]"
                    />
                </a-form-item>
                <a-form-item label="Họ và tên">
                    <a-input
                        v-decorator="['name', { rules: [{ required: true, message: 'Please input your name!' }] }]"
                    />
                </a-form-item>
                <a-form-item label="Vai trò">
                    <a-select
                        v-decorator="[
                            'role',
                            { rules: [{ required: true, message: 'Please select your role!' }] },
                        ]"
                        placeholder="Select a option and change input text above"
                        @change="handleSelectChange"
                    >
                        <a-icon slot="suffixIcon" type="caret-up" />
                        <a-select-option v-for="item in roles" :key="item.value" :value="item.label">
                            {{ item.label }}
                        </a-select-option>
                    </a-select>
                </a-form-item>

                <a-form-item label="Chức vụ">
                    <a-select
                        v-decorator="[
                            'rank',
                            { rules: [{ required: true, message: 'Please select your gender!' }] },
                        ]"
                        placeholder="Select a option and change input text above"
                        @change="handleSelectChange"
                    >
                        <a-icon slot="suffixIcon" type="caret-up" />
                        <a-select-option v-for="item in ranks" :key="item.value" :value="item.label">
                            {{ item.label }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
            </div>

            <div>
                <a-form-item label="Số điện thoại">
                    <a-input
                        v-decorator="['phone', { rules: [{ required: true, message: 'Please input your phone number!' }] }]"
                    />
                </a-form-item>
                <a-form-item label="Email">
                    <a-input
                        v-decorator="['email', { rules: [{ required: true, message: 'Please input your email!' }] }]"
                    />
                </a-form-item>
                <a-form-item label="Phòng ban">
                    <a-select
                        v-decorator="[
                            'room',
                            { rules: [{ required: true, message: 'Please select your gender!' }] },
                        ]"
                        placeholder="Select a option and change input text above"
                        @change="handleSelectChange"
                    >
                        <a-icon slot="suffixIcon" type="caret-up" />
                        <a-select-option v-for="item in rooms" :key="item.value" :value="item.label">
                            {{ item.label }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item style="margin-bottom:0;">
                    <a-switch v-model="status" />
                    <span class="font-medium">Trạng thái hoạt động: {{ status===true ?"Đang làm việc":"đã nghỉ việc" }}</span>
                    <a-date-picker v-decorator="['date', { rules: [{ required: true, message: 'Please select your date!' }] }]" style="width: 100%" />
                </a-form-item>
            </div>
        </div>
        <div class="flex justify-end my-3">
            <a-button size="large" class="w-48 text-[#1e3a8a] btn_cancel mr-6">
                Hủy
            </a-button>
            <a-button size="large" class="w-48 text-white bg-[#1e3a8a] btn_add " html-type="submit">
                Thêm
            </a-button>
        </div>
    </a-form>
</template>

<script>
    import axios from 'axios';
    // eslint-disable-next-line import/extensions
    import { OPTIONS_POSITION } from '@/constants/position.js';
    // eslint-disable-next-line import/extensions
    import { OPTIONS_ROLE } from '@/constants/role.js';

    // eslint-disable-next-line import/extensions
    import { OPTIONS_ROOM } from '@/constants/room.js';

    export default {

        data() {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this, { name: 'coordinated' }),
                status: true,
                rooms: OPTIONS_ROOM,
                roles: OPTIONS_ROLE,
                ranks: OPTIONS_POSITION,
            };
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);

                        axios.post('https://flextext-f544f-default-rtdb.firebaseio.com/user.json', values)
                            .then((result) => {
                                console.log('thành công', result);
                            });
                    }
                });
            },
            handleSelectChange(value) {
                console.log(value);
                // this.form.setFieldsValue({
                //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
                // });
            },
        },
    };
</script>

<style lang="scss">
.form_account{
    .ant-row{
        @apply flex flex-col ;
        .ant-form-item-control-wrapper{
            @apply w-full
        }
        .ant-col{
            @apply text-left;
        }

    }
          .ant-form-item-label {
            label{
                @apply font-medium;
            }
           label::after{
                @apply hidden
            }
        }

.btn_cancel{
    @apply text-[#1e3a8a];
}
.btn_add{
    @apply text-white bg-[#1e3a8a]

}
}
</style>
