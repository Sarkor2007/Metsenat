<script setup>
// icons
// import userImg from '../../assets/images/user.jpg'
// import editIcon from '../../assets/icons/edit.svg'
import leftarrowIcon from '../assets/icons/leftarrow.svg'
// import bottomImg from '../../assets/images/rocket.png'

</script>

<script>
export default {
    name: "AddStudent",
    data() {
        return {
        }
    },
}
</script>

<template>
    <section class="add">
        <div class="add__header">
            <div class="container">
                <button @click="this.$router.push('/admin/students')"
                    class="add__header-btn">
                    <img :src="leftarrowIcon"
                        alt="arrow">
                </button>
                <div class="add__header-box">
                    <h2 class="add__header-name">Talaba qo‘shish</h2>
                </div>
            </div>
        </div>
        <div class="add__body">
            <div class="add__body-top">
                <label class="add__el"
                    for="name">
                    <h3 class="add__subtitle">F.I.Sh. (Familiya Ism Sharif)</h3>
                    <input id="name"
                        name="name"
                        placeholder="F.I.Sh."
                        type="text">
                </label>
                <label class="add__el"
                    for="tel">
                    <h3 class="add__subtitle">Telefon raqam</h3>
                    <input id="tel"
                        name="tel"
                        placeholder="+998 00 000-00-00"
                        type="number">
                </label>
            </div>
            <label for="university"
                class="add__university add__el">
                <h3 class="add__subtitle">OTM</h3>
                <select class=""
                    name="university"
                    id="university">
                    <option value=""
                        disabled
                        selected>OTM ni tanlang</option>
                    <option value="inha">Toshkent shahridagi INHA Universiteti</option>
                    <option value="milliy">O’zbekiston milliy universiteti</option>
                </select>
            </label>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.add {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__subtitle {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 1.125px;
        text-transform: uppercase;
        color: #1D1D1F;
    }

    &__header {
        width: 100%;
        background: hsl(0, 0%, 100%);
        padding: 20px 0px;

        .container {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        &-btn {
            background: none;
            cursor: pointer;
        }

        &-name {
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: #28293D;
        }
    }

    &__el {
        display: flex;
        flex-direction: column;
        gap: 8px;

        input,
        select {
            background: rgba(224, 231, 255, 0.2);
            border: 1px solid #E0E7FF;
            border-radius: 6px;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            display: flex;
            align-items: center;
            padding: 0px 16px;
            height: 42px;
            color: #2E384D;
        }
    }

    &__body {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 28px;
        margin-top: 40px;
        max-width: 790px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #EBEEFC;
        box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.03);
        border-radius: 12px;
        padding: 24px 32px;

        &-top {
            display: flex;
            align-items: center;
            gap: 28px;

            label {
                width: calc(50% - 14px);

                input[type=number]::-webkit-inner-spin-button,
                input[type=number]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                input {
                    &::placeholder {
                        color: rgba(46, 56, 77, 0.35);
                    }
                }
            }
        }
    }

    &__university {
        width: 100%;

        select {
            width: 100%;
        }
    }
}
</style>