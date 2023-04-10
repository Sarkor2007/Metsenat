<script setup>
import exitBtn from '../../assets/icons/exit.svg'
import saveIcon from '../../assets/icons/save.svg'


import { useToast } from "vue-toastification"

</script>

<script>
export default {
    name: 'StudentsEditModal',
    props: ['open'],
    methods: {
        closeEdit() {
            this.$emit('closeEdit')
        },
        updateStudent() {
            const toast = useToast()

            toast("Данные обновлены!", {
                position: "top-right",
                timeout: 2000,
                hideProgressBar: false,
                closeButton: true,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                pauseOnHover: false,
                draggable: true,
                draggablePercent: 0.6,
                closeButton: "button",
                icon: true,
                rtl: false
            });

            this.$emit('closeEdit')
        }
    }
}
</script>

<template>
    <div v-if="this.open"
        class="filter">
        <dialog :open="this.open">
            <div class="filter__wrapper">
                <div class="filter__header">
                    <h3 class="filter__title">Tahrirlash</h3>
                    <div class="filter__exit">
                        <img draggable="false"
                            @click="closeEdit"
                            :src="exitBtn"
                            alt="exit btn">
                    </div>
                </div>
                <div class="filter__body">
                    <div class="filter__list">
                        <ul>
                            <li>
                                <label for="name">
                                    <h3>F.I.Sh. (Familiya Ism Sharifingiz)</h3>
                                    <input class="filter__list-item"
                                        id="name"
                                        name="name"
                                        value="Ishmuhammedov Aziz Ishqobilovich"
                                        type="text">
                                </label>
                            </li>
                            <li>
                                <label for="tel">
                                    <h3>Telefon raqam</h3>
                                    <input class="filter__list-item"
                                        id="tel"
                                        name="tel"
                                        value="+998 973-72-60"
                                        type="tel">
                                </label>
                            </li>
                            <li>
                                <label for="university">
                                    <h3>OTM</h3>
                                    <select class="filter__list-item"
                                        name="university"
                                        id="university">
                                        <option value="inha">Toshkent shahridagi INHA Universiteti</option>
                                        <option value="milliy">O’zbekiston milliy universiteti</option>
                                    </select>
                                </label>
                            </li>
                            <li>
                                <label for="contract">
                                    <h3>Kontrakt miqdori</h3>
                                    <input class="filter__list-item"
                                        id="contract"
                                        name="contract"
                                        value="300000000"
                                        type="number">
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="filter__bottom">
                    <div @click="updateStudent"
                        class="filter__btn">
                        <img :src="saveIcon"
                            alt="save">
                        <h3>Saqlash</h3>
                    </div>
                </div>
            </div>

        </dialog>
    </div>
</template>

<style lang="scss" scoped>
.filter {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    overflow-y: scroll;

    dialog {
        padding: 100px 0px;
        width: 100%;
        background: transparent;
    }

    &__wrapper {
        background: #FFFFFF;
        border-radius: 12px;
        padding: 28px;
        max-width: 590px;
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 28px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #F5F5F7;
        padding-bottom: 28px;
    }

    &__exit {
        cursor: pointer;

    }

    &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #28293D;
    }


    &__body {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    &__type {
        display: flex;
        align-items: center;

        &-item {
            padding: 14px 0px;
            background: #FFFFFF;
            border: 2px solid #E0E7FF;
            color: rgba(51, 102, 255, 0.6);
            font-weight: 500;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            letter-spacing: 1.125px;
            text-transform: uppercase;
            border: 2px solid #E0E7FF;
            width: 50%;

            &.active {
                border: 2px solid #3366FF;
                background: #3366FF;
                color: #fff;
            }

            &.left {
                border-radius: 6px 0px 0px 6px;
            }

            &.right {
                border-radius: 0px 6px 6px 0px;
            }
        }
    }

    &__list {
        ul {
            display: flex;
            flex-direction: column;
            gap: 28px;

            li {
                label {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    h3 {
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 14px;
                        letter-spacing: 1.125px;
                        text-transform: uppercase;
                        color: #1D1D1F;
                    }

                    .filter__list-item {
                        background: rgba(224, 231, 255, 0.2);
                        border: 1px solid #E0E7FF;
                        border-radius: 6px;
                        padding: 12px 16px;
                        font-weight: 400;
                        font-size: 15px;
                        line-height: 18px;
                        color: #2E384D;
                    }

                    select {
                        cursor: pointer;
                    }
                }
            }
        }
    }

    &__bottom {
        padding-top: 28px;
        display: flex;
        width: 100%;
        border-top: 2px solid #F5F5F7;
        justify-content: flex-end;
    }

    &__btn {
        cursor: pointer;
        background: #3366FF;
        display: flex;
        gap: 14px;
        align-items: center;
        height: 42px;
        padding: 0px 32px;
        box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16);
        border-radius: 5px;

        h3 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: -0.35px;
            color: #FFFFFF;

        }
    }
}
</style>