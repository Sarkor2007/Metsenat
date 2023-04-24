<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        login() {
            if (this.form.email === 'test' && this.form.password === '1234') {
                localStorage.setItem('token', "dmlgbfbmlktmkrmvrmsrvomrtemwrpgmb");
                this.form = {};
                if (localStorage.getItem('token')) {
                    this.$router.push({ name: 'home' })
                }
                alert('Successfully!')
            } else {
                alert('Email or Password is wrong!')
            }
        }
    }
}
</script>

<template>
    <div class="login">
        <div class="login__wrapper">
            <div class="login__logo">
                <img src="../assets/images/login__logo.svg"
                    alt="logo">
            </div>
            <div class="login__box">
                <h2 class="login__box-title">
                    Kirish
                </h2>
                <form @submit.prevent="login">
                    <label class="login__box-item"
                        for="login">
                        <h3>LOGIN</h3>
                        <input placeholder="login"
                            type="text"
                            name="login"
                            v-model="form.email"
                            id="login">
                    </label>
                    <label class="login__box-item"
                        for="password">
                        <h3>PAROL</h3>
                        <input placeholder="password"
                            type="password"
                            name="password"
                            v-model="form.password"
                            id="password">
                    </label>
                    <div class="captcha">
                        <label for="captcha">
                            <input type="checkbox"
                                name="captcha"
                                id="captcha">
                            <h3>I’m not a robot</h3>
                        </label>
                        <img src="../assets/images/reCAPTCHA.png"
                            alt="captcha">
                    </div>
                    <input class="login__box-btn"
                        type="submit"
                        value="Kirish">
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 48px;
        align-items: center;
        max-width: 390px;
        width: 100%;
        padding: 0px 5px;
    }

    &__logo {
        max-width: 314px;
        height: auto;
        object-fit: contain;

        img {
            width: 100%;
        }
    }

    &__box {
        width: 100%;
        padding: 32px;
        background: #FFFFFF;
        border: 1px solid #EBEEFC;
        box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
        border-radius: 12px;

        @media (max-width: 768px) {
            padding: 32px 16px;
        }

        &-title {
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: #28293D;
        }


        &-item {
            h3 {
                font-weight: 500;
                font-size: 12px;
                line-height: 14px;
                letter-spacing: 1.125px;
                text-transform: uppercase;
                color: #1D1D1F;
            }

            input {
                margin-top: 8px;
                width: 100%;
                background: rgba(224, 231, 255, 0.2);
                border: 1px solid #E0E7FF;
                border-radius: 6px;
                padding: 12px 15px;
                font-weight: 400;
                font-size: 15px;
                line-height: 18px;
                color: black;

                &::placeholder {
                    color: rgba(46, 56, 77, 0.35);
                }
            }
        }

        form {
            margin-top: 44px;
            display: flex;
            flex-direction: column;
            gap: 22px;
            width: 100%;
        }

        &-btn {
            padding: 14px 0px 13px;
            background: #2E5BFF;
            border-radius: 6px;
            color: white;
            font-weight: 500;
            font-size: 15px;
            line-height: 21px;
            text-align: center;
            cursor: pointer;
        }

        .captcha {
            background: #FAFAFA;
            border: 1px solid #D6D6D6;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 14px;
            border-radius: 6px;

            label {
                display: flex;
                align-items: center;
                gap: 10px;

                h3 {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 16px;
                    color: #000000;
                }
            }
        }
    }
}
</style>