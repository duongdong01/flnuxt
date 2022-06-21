<template>
    <div class="form_emprofile">
        <a-form-model
            ref="ruleForm"
            :model="form"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            :colon="false"
            :rules="rules"
        >
            <div class="grid grid-cols-2 gap-7 w-full form_info sm:grid-cols-1">
                <div>
                    <a-form-model-item ref="code" label="Mã nhân viên" prop="code">
                        <a-input
                            v-model="form.code"
                            @blur="
                                () => {
                                    $refs.code.onFieldBlur();
                                }
                            "
                        />
                    </a-form-model-item>
                    <a-form-model-item
                        v-if="!formdata"
                        ref="password"
                        label="Mật khẩu"
                        prop="password"
                    >
                        <a-input
                            v-model="form.password"
                            type="password"
                            @blur="
                                () => {
                                    $refs.password.onFieldBlur();
                                }
                            "
                        />
                    </a-form-model-item>
                    <a-form-model-item ref="name" label="Họ và tên" prop="name">
                        <a-input
                            v-model="form.name"
                            @blur="
                                () => {
                                    $refs.name.onFieldBlur();
                                }
                            "
                        />
                    </a-form-model-item>
                    <a-form-model-item ref="role" label="Vai trò" prop="role">
                        <a-select
                            v-model="form.role"
                            placeholder="please select your zone"
                        >
                            <a-icon slot="suffixIcon" type="caret-up" />
                            <a-select-option v-for="item in roles" :key="item.label" :value="item.label">
                                {{ item.label }}
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item label="Chức vụ" prop="rank">
                        <a-select
                            v-model="form.rank"
                            placeholder="please select your zone"
                            :filter-option="filterOption"
                            option-filter-prop="children"
                            show-search
                        >
                            <a-icon slot="suffixIcon" type="caret-up" />
                            <a-select-option v-for="item in position" :key="item.label" :value="item.label">
                                {{ item.label }}
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                </div>
                <div>
                    <a-form-model-item ref="phone" label="Số điện thoại" prop="phone">
                        <a-input
                            v-model="form.phone"
                            @blur="
                                () => {
                                    $refs.phone.onFieldBlur();
                                }
                            "
                        />
                    </a-form-model-item>
                    <a-form-model-item ref="email" label="Email" prop="email">
                        <a-input
                            v-model="form.email"
                            @blur="
                                () => {
                                    $refs.email.onFieldBlur();
                                }
                            "
                        />
                    </a-form-model-item>
                    <a-form-model-item label="Phòng ban" class="select_room mb-0" prop="room">
                        <a-select
                            v-model="form.room"
                            placeholder="please select your zone"
                        >
                            <a-icon slot="suffixIcon" type="caret-up" />
                            <a-select-option v-for="item in rooms" :key="item.id" :value="item.id">
                                {{ item.label }}
                            </a-select-option>
                        </a-select>
                    </a-form-model-item>
                    <a-form-model-item required prop="date">
                        <div>
                            <a-switch v-model="form.status" />
                            <span class="font-medium">Trạng thái hoạt động: {{ form.status===true ?"Đang làm việc":"đã nghỉ việc" }}</span>
                        </div>
                        <a-date-picker
                            v-model="form.date"
                            style="width: 100%;"
                            :default-value="moment('19/03/2021', dateFormat)"
                            :format="dateFormat"
                        />
                    </a-form-model-item>
                </div>
            </div>
            <a-form-model v-if="!formdata">
                <div class="flex justify-end my-3 form_btn">
                    <a-button size="large" class="w-48 text-[#1e3a8a] btn_cancel mr-6">
                        Hủy
                    </a-button>
                    <a-button size="large" class="w-48 text-white bg-[#1e3a8a] btn_add " @click="onSubmit">
                        Thêm
                    </a-button>
                </div>
            </a-form-model>
        </a-form-model>
        <div v-if="formdata" class="update_user">
            <tab-device />
            <div class="flex justify-between my-3">
                <div>
                    <a-button size="large" class="w-40  btn_delete">
                        Xóa tài khoản
                    </a-button>
                </div>
                <div class="flex space-x-4">
                    <a-button size="large" class="w-48 text-[#1e3a8a] btn_update" @click="onSubmit">
                        Cập nhập
                    </a-button>
                    <a-button size="large" class="w-48 text-white bg-[#1e3a8a] btn_close" @click="back()">
                        Đóng
                    </a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    import TabDevice from '@/components/emprofile/details/TabDevice.vue';
    // eslint-disable-next-line import/extensions
    import { OPTIONS_POSITION } from '@/constants/position.js';
    // eslint-disable-next-line import/extensions
    import { OPTIONS_ROLE } from '@/constants/role.js';

    // eslint-disable-next-line import/extensions
    import { OPTIONS_ROOM } from '@/constants/room.js';
    // eslint-disable-next-line import/extensions
    import {
        validName, validPassword, validPhone, validEmail,
    // eslint-disable-next-line import/extensions
    } from '@/utils/form.js';

    const formdefault = {
        code: '',
        password: '',
        name: '',
        role: '',
        rank: '',
        phone: '',
        email: '',
        room: '',
        status: true,
        date: moment('19/03/2021', 'DD/MM/YYYY'),
    };
    export default {
        components: {
            TabDevice,
        },
        // eslint-disable-next-line vue/require-prop-types
        props: ['formdata'],
        data() {
            return {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                form: this.formdata ? { ...this.formdata } : formdefault,
                dateFormat: 'DD/MM/YYYY',
                position: OPTIONS_POSITION,
                roles: OPTIONS_ROLE,
                rooms: OPTIONS_ROOM,
                rules: {
                    name: [{ required: true, validator: validName, trigger: 'blur' }],
                    code: [{ required: true, message: 'không được để trống mã nhân viên', trigger: 'blur' }],
                    password: [{ required: true, validator: validPassword, trigger: 'blur' }],
                    phone: [{ required: true, validator: validPhone, trigger: 'blur' }],
                    email: [{ required: true, validator: validEmail, trigger: 'blur' }],
                    date: [{ required: true, message: 'Please pick a date', trigger: 'change' }],
                    room: [{ required: true, message: 'Vui lòng chọn phòng', trigger: 'change' }],
                    role: [{ required: true, message: 'Vui lòng chọn vai trò', trigger: 'change' }],
                    rank: [{ required: true, message: 'Vui lòng chọn chức vụ', trigger: 'change' }],

                },
            };
        },

        watch: {
            formdata() {
                this.form = { ...this.formdata };
            },
        },
        methods: {
            moment,
            onSubmit() {
                this.$refs.ruleForm.validate((valid) => {
                    // console.log(2);
                    if (valid) {
                        if (!this.form.id) {
                            alert('thêm');
                            axios.post('https://flextext-f544f-default-rtdb.firebaseio.com/user.json', this.form)
                                .then((result) => {
                                    console.log('thành công', result);
                                });
                        } else {
                            alert('sửa');
                            axios.put(`https://flextext-f544f-default-rtdb.firebaseio.com/user/${this.form.id}.json`, this.form)
                                .then((result) => {
                                    console.log('thành công', result);
                                });
                        }
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            back() {
                this.$router.push('/emprofile');
            },
            filterOption(input, option) {
                return (
                    option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
                );
            },
            // handleChange(value) {
            //     console.log(`selected ${value}`);
            // },
            // handleBlur() {
            //     console.log('blur');
            // },
            // handleFocus() {
            //     console.log('focus');
            // },
        },
    };
</script>

<style lang="scss">
.form_emprofile{

    .form_info{
        .ant-row{
            @apply flex flex-col ;
            .ant-form-item-control-wrapper{
                @apply w-full
            }
            .ant-col{
                @apply text-left;
            }
            .ant-form-item-label {
                label{
                    @apply font-medium;
                }
    l           label::after{
                    @apply hidden
                }
            }
            // .select_room{
            //     @apply mb-0
            // }

        }
    }
.btn_cancel{
    @apply text-[#1e3a8a];
}
.btn_add{
    @apply text-white bg-[#1e3a8a]

}
.btn_add:hover{
    @apply bg-[#1e3a8a] text-white

}
.update_user{
    .btn_delete{
    @apply border border-red-600 text-red-600;
}
.btn_update{
    @apply text-[#1e3a8a]
}
.btn_close{
    @apply text-white bg-[#1e3a8a]

}
}
}

</style>
