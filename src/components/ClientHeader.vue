<script>
import logoImg from '../assets/images/client-logo.svg'
import checked from '../assets/icons/checked.svg'
import yesIcon from '../assets/icons/yes.svg'

export default {
    name: "ClientHeader",
    data() {
        return {
            logoImg,
            yesIcon,
            checked,
            otherInput: false,
            sendActive: false,
            sumBox: [
                {
                    id: 1,
                    sum: 1000000,
                    active: true,
                },
                {
                    id: 2,
                    sum: 5000000,
                    active: false,
                },
                {
                    id: 3,
                    sum: 7000000,
                    active: false,
                },
                {
                    id: 4,
                    sum: 10000000,
                    active: false,
                },
                {
                    id: 5,
                    sum: 30000000,
                    active: false,
                },
                {
                    id: 6,
                    sum: 0,
                    active: false,
                }
            ],
            activeTab: [
                {
                    id: 1,
                    class: 'left',
                    active: true,
                    title: 'Jismoniy shaxs'
                },
                {
                    id: 2,
                    class: 'right',
                    active: false,
                    title: 'Yuridik shaxs'
                }
            ],
            sponsor: {
                full_name: "",
                phone: "",
                sum: 0,
                payment_type: [
                    45
                ],
                firm: "",
                spent: 0,
                comment: ""
            },
            otherSum: '',
            selectSum: ''
        }
    },
    methods: {
        addSpace(item) {
            if (item == 0) {
                return 'BOSHQA'
            }
            return item.toLocaleString().replaceAll(',', ' ')
        },
        changeActive(item) {
            this.sumBox.map(el => el.active = false);
            item.active = true;
            if (item.sum === 0) {
                this.sponsor.sum = this.otherSum
            } else {
                this.sponsor.sum = item.sum;
            }
        },
        changeTab(item) {
            this.activeTab.map(el => el.active = false)
            item.active = true
        },
        addSponsor() {
            this.sponsor.sum = String(this.sponsor.sum)
            if (this.sponsor.sum == 0) {
                this.sponsor.sum = String(this.otherSum)
            }
            this.$store.dispatch('createSponsor', this.sponsor)

            this.sponsor = {
                full_name: "",
                phone: "",
                sum: 0,
                payment_type: [
                    45
                ],
                firm: "",
                spent: 0,
                comment: ""
            }
            this.sumBox = this.sumBox.map(el => {
                el.active = false;
                return el;
            });
            this.sumBox[0].active = true;
            this.sendActive = true
        }
    },
    computed: {
        activeOther() {
            let result = false
            for (let I = 0; I < this.sumBox.length; I++) {
                const el = this.sumBox[I];
                if (el.active == true && el.sum == 0) {
                    result = true
                }
            }
            return result
        },
        legalPerson() {
            return this.activeTab[1].active === true
        },
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
                <div class="header__menu-box">
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
        </div>
    </header>
    <section class="content">
        <div class="container">
            <div v-if="!sendActive"
                class="content__box">
                <h1 class="content__box-title">Homiy sifatida ariza topshirish</h1>
                <form @submit.prevent="addSponsor"
                    class="content__box-form form">
                    <div class="form__tab">
                        <div v-for="item in activeTab"
                            :key="item.id"
                            class="form__tab-item"
                            @click="changeTab(item)"
                            :class="!item.active ? item.class : `${item.class} active`">{{ item.title }}</div>
                    </div>
                    <div class="form__box">
                        <label class="form__box-item"
                            for="name">
                            <h3>F.I.Sh. (Familiya Ism Sharifingiz)</h3>
                            <input id="name"
                                v-model="sponsor.full_name"
                                required
                                placeholder="Abdullayev Abdulla Abdulla o’g’li"
                                type="text">
                        </label>
                        <label class="form__box-item"
                            for="tel">
                            <h3>Telefon raqamingiz</h3>
                            <input id="tel"
                                v-model="sponsor.phone"
                                required
                                placeholder="+998 00 000-00-00"
                                type="text">
                        </label>
                        <div class="form__box-item">
                            <h3>To‘lov summasi</h3>
                            <div class="form__sum">
                                <div v-for="(item, index) in sumBox"
                                    :key="index"
                                    @click="changeActive(item)"
                                    :class="{ active: item.active }"
                                    class="form__sum-item">
                                    <p>
                                        {{ addSpace(item.sum) }}
                                    </p>
                                    <span v-if="!item.sum == 0">Uzs</span>
                                    <img :src="checked"
                                        alt="check">
                                </div>
                                <input v-if="activeOther"
                                    id="sum"
                                    type="number"
                                    required
                                    v-model="otherSum"
                                    placeholder="0"
                                    class="form__sum-item other">
                            </div>
                        </div>
                        <label v-if="legalPerson"
                            class="form__box-item"
                            for="firm">
                            <h3>Telefon raqamingiz</h3>
                            <input id="firm"
                                v-model="sponsor.firm"
                                required
                                placeholder="Orient group"
                                type="text">
                        </label>
                    </div>
                    <button class="form__btn">Yuborish</button>
                </form>
            </div>
            <div class="send"
                v-else>
                <div class="send-box">
                    <div class="send-item">
                        <img :src="yesIcon"
                            alt="yes">
                    </div>
                    <h1 class="send-title">
                        Ma’lumotlar tekshirish uchun yuborildi.
                    </h1>
                    <h3 class="send-subtitle">
                        Tez orada siz bilan operatorimiz bog’lanib, barcha ma’lumotlarni aniqlashtiradi.
                    </h3>
                </div>
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
        column-gap: 50px;
        row-gap: 30px;

        @media (max-width: 1000px) {
            flex-direction: column;
            align-items: center;
        }
    }

    &__logo {
        cursor: pointer;
    }

    &__menu {
        display: flex;
        align-items: center;
        column-gap: 40px;
        row-gap: 20px;

        @media (max-width: 1000px) {
            width: 100%;
            justify-content: space-between;
        }

        @media (max-width: 670px) {
            flex-direction: column;
        }

        &-box {
            display: flex;
            align-items: center;
            gap: 40px;

            @media (max-width: 670px) {
                max-width: 480px;
                width: 100%;
                justify-content: space-between;
            }

        }
    }

    &__nav {
        display: flex;
        align-items: center;
        gap: 40px;

        @media (max-width: 670px) {
            max-width: 480px;
            width: 100%;
            justify-content: space-between;
        }

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
        padding: 0px 12px;
        border: 2px solid black;
        height: 44px;
        border-radius: 8px;

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
    .send {
        width: 100%;
        padding-top: 150px;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;

        &-box {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            max-width: 300px;
        }

        &-item {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 6px solid #E8F3DD;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-title {
            margin-top: 32px;
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            color: #2E384D;
        }

        &-subtitle {
            margin-top: 10px;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            color: #B2B7C1;
        }
    }

    &__box {
        padding: 76px 0px;
        width: 100%;
        max-width: 800px;
        margin: auto;
        background: #FFFFFF;

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

                input:not(input[type='radio']) {
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

                @media (max-width: 500px) {
                    grid-template-columns: repeat(2, 1fr);
                }

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
                    display: flex;
                    align-items: center;
                    gap: 6px;

                    &.other {
                        cursor: text;
                        grid-column-start: 1;
                        grid-column-end: 4;
                        background: rgba(224, 231, 255, 0.2);
                        border: 1px solid #E0E7FF;
                        border-radius: 6px;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 18px;
                        color: #000000;

                        @media (max-width: 500px) {
                            grid-column-end: 3;
                        }
                    }

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
                        background: #F9FAFF;

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

            &__btn {
                width: 100%;
                padding: 14px 0px 15px;
                background: #2E5BFF;
                border-radius: 6px;
                font-weight: 500;
                font-size: 15px;
                line-height: 21px;
                text-align: center;
                color: #FFFFFF;
            }
        }
    }
}
</style>
