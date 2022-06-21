<template>
    <div class="h-screen form_login">
        <div class="max-w-screen-xl w-full h-full flex flex-col mx-auto bg-login-img">
            <div class="w-1/4 mx-auto mt-28 mb-8">
                <img src="@/static/login-img/logo-login.png" alt="">
            </div>
            <div class="w-1/3 h-80 mx-auto  flex justify-center bg-[#fff] rounded-lg pt-12">
                <a-form-model
                    ref="ruleForm"
                    :model="ruleForm"
                    :rules="rules"
                    v-bind="layout"
                >
                    <a-form-model-item has-feedback prop="user">
                        <a-input
                            v-model="ruleForm.user"
                            type="text"
                            autocomplete="off"
                            placeholder="Nhập tài khoản"
                        />
                    </a-form-model-item>
                    <a-form-model-item has-feedback prop="checkPass">
                        <a-input-password v-model="ruleForm.checkPass" placeholder="Nhập mật khẩu" autocomplete="off" />
                    </a-form-model-item>
                    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                        <a-button type="primary" @click="submitForm('ruleForm')">
                            Đăng nhập
                        </a-button>
                    </a-form-model-item>
                </a-form-model>
            </div>
        </div>
    </div>
</template>

<script>
    const validatePass = (rule, value, callback) => {
        // eslint-disable-next-line no-useless-escape
        const regex = /^[A-Za-z0-9_\.]{4,32}$/;
        if (value === '') {
            callback(new Error('Vui lòng nhập tên tài khoản'));
        } else {
            if (!regex.test(value)) {
                callback(new Error('Tài khoản không hợp lệ'));
                // this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
        }
    };
    const validatePass2 = (rule, value, callback) => {
        // eslint-disable-next-line no-useless-escape
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (value === '') {
            callback(new Error('Vui lòng nhập khẩu'));
        } else if (!regex.test(value)) {
            callback(new Error('Mật khẩu không hợp lệ'));
        }
        callback();
    };
    export default {
        layout: 'login',
        data() {
            return {
                ruleForm: {
                    user: '',
                    checkPass: '',
                },
                rules: {
                    user: [{ validator: validatePass, trigger: 'change' }],
                    checkPass: [{ validator: validatePass2, trigger: 'change' }],
                    // age: [{ validator: checkAge, trigger: 'change' }],
                },
                layout: {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 14 },
                },
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // resetForm(formName) {
            //     this.$refs[formName].resetFields();
            // },
        },
    };
</script>

<style lang="scss">
.form_login{
    // .ant-form-item{
    //     @apply flex justify-center text-center
    // }
    .ant-col-offset-4{
        @apply ml-0 w-full text-center
    }
   .ant-input{
        @apply w-80 px-10 py-5 rounded-lg h-10
    }
.ant-input-password{
    @apply w-80
}
.ant-form-explain{
    @apply w-80
}
}

</style>
