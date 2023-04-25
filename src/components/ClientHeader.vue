<script>
import logoImg from '../assets/images/client-logo.svg'

export default {
    name: "TheHeader",
    data() {
        return {
            logoImg
        }
    },
    methods: {

    }
}
</script>

<template>
    <header class="header">
        <div class="container">
            <div @click="$router.push('/client')"
                class="header__logo">
                <img :src="logoImg"
                    alt="logo">
            </div>
            <div class="header__menu">
                <ul class="header__nav">
                    <li class="header__nav-item">
                        <a href="#">Asosiy</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="#">Grantlar</a>
                    </li>
                    <li class="header__nav-item">
                        <a href="#">Soliq imtiyozlari</a>
                    </li>
                </ul>
                <div @click="$router.push('/login')"
                    class="header__login">
                    <img src="../assets/icons/login.svg"
                        alt="log out">
                    <h3>Kirish</h3>
                </div>
                <a href="#"
                    class="header__signup">
                    Ro‘yxatdan o’tish
                </a>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: relative;
    z-index: 2;
    padding: 20px 0px;
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
    background: #FFFFFF;

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        cursor: pointer;
    }

    &__menu {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    &__nav {
        display: flex;
        align-items: center;
        gap: 40px;

        &-item {
            a {
                font-weight: 500;
                font-size: 14px;
                line-height: 150%;
                color: #28293D;
            }
        }
    }

    &__login {
        cursor: pointer;
        height: 32px;
        display: flex;
        align-items: center;
        gap: 6px;

        img {
            height: 100%;
            object-fit: contain;
        }

        h3 {
            font-weight: 700;
            font-size: 14px;
            line-height: 150%;
            color: #28293D;
        }
    }

    &__signup {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #3366FF;
        padding: 8px 32px;
        border: 2px solid #3366FF;
        border-radius: 8px;
    }
}
</style>
