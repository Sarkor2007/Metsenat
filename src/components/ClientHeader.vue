<script>
import logoImg from '../assets/images/client-logo.svg'
import checked from '../assets/icons/checked.svg'

export default {
    name: "TheHeader",
    data() {
        return {
            logoImg,
            checked,
            sumBox: [
                {
                    sum: 1000000,
                    active: true,
                },
                {
                    sum: 5000000,
                    active: false,
                },
                {
                    sum: 7000000,
                    active: false,
                },
                {
                    sum: 10000000,
                    active: false,
                },
                {
                    sum: 30000000,
                    active: false,
                },
                {
                    sum: 1000000,
                    active: false,
                }
            ]
        }
    },
    methods: {
        addSpace(item) {
            return item.toLocaleString().replaceAll(',', ' ')
        },
        changeActive(item) {
            this.sumBox.map(el => el.active = false);
            item.active = true
        }
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
    <section class="content">
        <div class="container">
            <div class="content__left">
                <h1 class="content__left-title">Homiy sifatida ariza topshirish</h1>
                <form class="content__left-form form">
                    <div class="form__tab">
                        <div class="form__tab-item left active">Jismoniy shaxs</div>
                        <div class="form__tab-item right">Yuridik shaxs</div>
                    </div>
                    <div class="form__box">
                        <label class="form__box-item"
                            for="name">
                            <h3>F.I.Sh. (Familiya Ism Sharifingiz)</h3>
                            <input id="name"
                                placeholder="Abdullayev Abdulla Abdulla o’g’li"
                                type="text">
                        </label>
                        <label class="form__box-item"
                            for="tel">
                            <h3>Telefon raqamingiz</h3>
                            <input id="tel"
                                placeholder="+998 00 000-00-00"
                                type="text">
                        </label>
                        <div class="form__box-item">
                            <h3>To‘lov summasi</h3>
                            <div class="form__sum">
                                <div v-for="(item, index) in sumBox"
                                    :key="index"
                                    :class="item.active ? 'active' : ''"
                                    @click="changeActive(item)"
                                    class="form__sum-item">
                                    <p>
                                        {{ addSpace(item.sum) }}
                                    </p>
                                    <span>Uzs</span>
                                    <img :src="checked"
                                        alt="check">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
body {
    background: #FFFFFF;
}
</style>

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

.content {
    // display: flex;

    &__left {
        padding: 76px 100px 76px 0px;
        width: 60%;
        margin: 0;
        background: #FFFFFF;
        border-right: 1px solid rgba(0, 0, 0, 0.08);

        &-title {
            font-weight: 700;
            font-size: 40px;
            line-height: 140%;
            letter-spacing: 0.01em;
            color: #1D1D1F;
        }

        .form {
            margin-top: 40px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 28px;

            &__tab {
                display: flex;
                align-items: center;

                &-item {
                    cursor: pointer;
                    width: 50%;
                    text-align: center;
                    background: #FFFFFF;
                    border: 2px solid #E0E7FF;
                    padding: 14px 0px;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 12px;
                    letter-spacing: 1.125px;
                    text-transform: uppercase;
                    color: rgba(51, 102, 255, 0.6);

                    &.active {
                        background: #3366FF;
                        border: 2px solid #3366FF;
                        color: #FFFFFF;
                    }

                    &.left {
                        border-radius: 6px 0px 0px 6px;
                    }

                    &.right {
                        border-radius: 0px 6px 6px 0px;
                    }
                }
            }

            &__box {
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 28px;

                &-item {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                h3 {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 14px;
                    letter-spacing: 1.125px;
                    text-transform: uppercase;
                    color: #1D1D1F;
                }

                input {
                    width: 100%;
                    padding: 12px 16px;
                    background: rgba(224, 231, 255, 0.2);
                    border: 1px solid #E0E7FF;
                    border-radius: 6px;

                    &::placeholder {
                        color: rgba(46, 56, 77, 0.35);
                    }
                }
            }

            &__sum {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;

                &-item {
                    cursor: pointer;
                    background: #FFFFFF;
                    border: 1px solid #E0E7FF;
                    border-radius: 5px;
                    padding: 20px 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 4px;
                    position: relative;

                    p {
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 21px;
                        text-transform: uppercase;
                        color: #2E384D;
                    }

                    span {
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 18px;
                        text-transform: uppercase;
                        color: #2E5BFF;

                    }

                    img {
                        display: none;
                    }

                    &.active {
                        border: 2px solid #2E5BFF;

                        img {
                            display: inline-block;
                            position: absolute;
                            right: 0px;
                            top: 0px;
                            transform: translate(50%, -50%);
                        }
                    }
                }
            }
        }
    }
}
</style>
