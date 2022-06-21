<template>
    <a-layout id="components-layout-demo-responsive">
        <a-layout-sider
            breakpoint="lg"
            collapsed-width="0"
            theme="light"
            width="240"
            class="overflow-hidden"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
        >
            <div class="logo flex flex-col space-y-4 mb-12">
                <div class="flex justify-between">
                    <img src="@/static/login-img/logo-login.png" class="w-[60%]" alt="logo">
                    <div>
                        <i class="fa-regular fa-bell notification relative text-[1.2rem]" />
                    </div>
                </div>
                <p class="text-[#1e3a8a] font-semibold text-[0.9rem]">
                    Hệ thống quản lý thiết bị
                </p>
            </div>
            <a-menu
                theme="light"
                mode="inline"
                :default-selected-keys="['4']"
            >
                <a-menu-item key="4">
                    <i class="fa-solid fa-house  hover:text-[#1890ff] pr-2" />
                    <span class="nav-text">
                        <nuxt-link to="/" class="text-[#1e3a8a]">Dashboard</nuxt-link>
                    </span>
                </a-menu-item>
                <a-menu-item key="2">
                    <!-- <a-icon type="video-camera" /> -->
                    <i class="fa-solid fa-laptop pr-2" />
                    <span class="nav-text">
                        <nuxt-link to="/device" class="text-[#1e3a8a]">Thiết bị</nuxt-link>
                    </span>
                </a-menu-item>
                <a-menu-item key="3">
                    <!-- <a-icon type="upload" /> -->
                    <i class="fa-solid fa-envelope pr-2" />
                    <span class="nav-text">Yêu cầu</span>
                </a-menu-item>
                <a-sub-menu key="sub1" class="text-[#1e3a8a]">
                    <span slot="title"><i class="fa-solid fa-gear" />Quản lý</span>
                    <a-menu-item key="1a">
                        <nuxt-link to="/emprofile" tag="li" class="text-[#1e3a8a] list-none">
                            Quản lý Hồ sơ nhân viên
                        </nuxt-link>
                    </a-menu-item>
                    <a-menu-item key="2a">
                        Quản lý phòng ban
                    </a-menu-item>
                    <a-menu-item key="3a">
                        option3
                    </a-menu-item>
                    <a-menu-item key="4a">
                        option4
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item key="1">
                    <i class="fa-solid fa-file-lines" />
                    <span class="nav-text">Nội quy</span>
                </a-menu-item>
            </a-menu>
            <div class="flex mt-80  max-h-[40px] px-6">
                <div class="w-20 pl-3">
                    <img src="@/static/login-img/profile.jpg" class="h-full" alt="profile">
                </div>
                <div class="text-[#1e3a8a] flex justify-center flex-col">
                    <h2 class="text-[#1e3a8a]">
                        Nguyễn Văn Anh
                    </h2>
                    <button class="text-blue-700 border border-[#1D4ED8] rounded py-[1px] mx-auto w-24">
                        Đăng xuất
                    </button>
                </div>
            </div>
        </a-layout-sider>
        <a-layout>
            <a-layout-content class="main">
                <nuxt />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
    export default {
        methods: {
            onCollapse(collapsed, type) {
                console.log(collapsed, type);
            },
            onBreakpoint(broken) {
                console.log(broken);
            },
        },
    };
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 48px;
  margin-top:32px;
  padding: 0px 16px;
}
#components-layout-demo-responsive{
    height: 100vh;
}
#components-layout-demo-responsive .ant-layout-sider{
    flex: 0 0 240px ;
    max-width: 240px ;
    min-width: 240px ;
    width: 240px;
}
#components-layout-demo-responsive .ant-menu-item i{
    font-size: 1rem;
    min-width: 2.2rem;

}
#components-layout-demo-responsive .ant-menu-submenu i{
    font-size: 1rem;
    min-width: 2.3rem;

}
.anticon svg{
    display: block;
}
.main{
 /* background: #fff; */
  min-height: 100vh;
}
.ant-menu-submenu-arrow{
    display: none;
}
.ant-menu{
    border: none;
}

.notification::after{
    @apply content-[''] border-4 rounded-[50%] border-[red] top-0 absolute left-2

}
.ant-menu-item{
    color:#1e3a8a;
}
</style>
