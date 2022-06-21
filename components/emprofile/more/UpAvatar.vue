<template>
    <a-upload
        name="avatar"
        list-type="picture-card"
        class="avatar-uploader relative"
        :show-upload-list="false"
        :before-upload="beforeUpload"
        @change="handleChange"
    >
        <div class="img_upAvatar">
            <img v-if="imageUrl" :src="imageUrl" alt="avatar">
            <div v-else>
                <a-icon :type="loading ? 'loading' : 'plus'" />
                <div class="ant-upload-text">
                    Tải ảnh lên
                </div>
            </div>
        </div>
        <p class="bg-transparent absolute -right-full left-36 top-1/3 text-[#1e3a8a]">
            Ảnh đại diện
        </p>
    </a-upload>
</template>
<script>
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    export default {
        data() {
            return {
                loading: false,
                // eslint-disable-next-line import/no-unresolved
                imageUrl: '',
            };
        },
        methods: {
            handleChange(info) {
                if (info.file.status === 'uploading') {
                    this.loading = true;
                    return;
                }
                if (info.file.status === 'done') {
                    // Get this url from response in real world.
                    getBase64(info.file.originFileObj, (imageUrl) => {
                        this.imageUrl = imageUrl;
                        this.loading = false;
                    });
                }
            },
            beforeUpload(file) {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    this.$message.error('You can only upload JPG file!');
                }
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isLt2M) {
                    this.$message.error('Image must smaller than 2MB!');
                }
                return isJpgOrPng && isLt2M;
            },
        },
    };
</script>
<style>
.avatar-uploader > .ant-upload {
  /* width: 120px;
  height: 120px; */
  border: none;
  /* background: transparent; */
  /* border-radius: 4px;
  overflow: hidden; */
}

.img_upAvatar{
  width: 120px;
  height: 120px;
  border: none;
  border-radius: 4px;
  overflow: hidden;
    display: flex;
   align-items: center;
   justify-content: center;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.ant-upload.ant-upload-select-picture-card > .ant-upload{
    padding: 0px;
}
</style>
