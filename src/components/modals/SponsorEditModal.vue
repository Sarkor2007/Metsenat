<script setup>
import exitBtn from '../../assets/icons/exit.svg'
import saveIcon from '../../assets/icons/save.svg'
import deleteIcon from '../../assets/icons/delete.svg'

import { useToast } from "vue-toastification"

</script>

<script>
export default {
    name: 'SponsorEditModal',
    props: ['open'],
    data() {
        return {
            sponsor: 'new',
            sum: 80000000
        }
    },
    methods: {
        closeAdd() {
            this.$emit('closeEditSponsor')
            document.body.style.overflow = '';
        },
        updateSponsor() {
            const toast = useToast()

            toast("Спонсор обновлён!", {
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

            this.$emit('closeEditSponsor')
            document.body.style.overflow = '';
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
                    <h3 class="filter__title">Homiylarni tahrirlash</h3>
                    <div class="filter__exit">
                        <img draggable="false"
                            @click="closeAdd"
                            :src="exitBtn"
                            alt="exit btn">
                    </div>
                </div>
                <form @submit.prevent="updateSponsor">
                    <div class="filter__body">
                        <div class="filter__list">
                            <ul>
                                <li>
                                    <label for="name">
                                        <h3>F.I.Sh. (Familiya Ism Sharifingiz)</h3>
                                        <select v-model="sponsor"
                                            class="filter__list-item"
                                            name="name"
                                            id="name"
                                            required>
                                            <option value=""
                                                selected
                                                disabled>-- Homiyni tanlang</option>
                                            <option value="new">Yangi</option>
                                            <option value="cancel">Bekor qilingan</option>
                                            <option value="moderation">Moderatsiyada</option>
                                        </select>
                                    </label>
                                </li>
                                <li>
                                    <label for="summ">
                                        <h3>Ajratilgan summa</h3>
                                        <input v-model="sum"
                                            required
                                            class="filter__list-item"
                                            id="summ"
                                            name="summ"
                                            type="number"
                                            placeholder="Summani kiriting">
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="filter__bottom">
                        <button type="submit"
                            class="filter__btn delete">
                            <img :src="deleteIcon"
                                alt="delete">
                            <h3>Homiyni o‘chirish</h3>
                        </button>
                        <button type="submit"
                            class="filter__btn update">
                            <img :src="saveIcon"
                                alt="save">
                            <h3>Saqlash</h3>
                        </button>

                    </div>
                </form>
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
    height: 100%;;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0px;
    }

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

        form {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 28px;
        }
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
        gap: 16px;
    }

    &__btn {
        &.update {
            background: #3366FF;
            box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16);

            h3 {
                color: #FFFFFF;
            }
        }

        &.delete {
            background: #FFECEB;

            h3 {
                color: #FF4945;
            }
        }

        cursor: pointer;
        display: flex;
        gap: 14px;
        align-items: center;
        height: 42px;
        padding: 0px 32px;
        border-radius: 5px;

        h3 {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: -0.35px;
        }
    }
}
</style>